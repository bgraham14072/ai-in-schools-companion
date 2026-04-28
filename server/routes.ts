import type { Express } from "express";
import { createServer } from "node:http";
import type { Server } from "node:http";
import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";

// Load the book corpus once at server start.
let BOOK_CORPUS = "";
try {
  // Search multiple paths so this works in dev (tsx) and prod (CJS bundle).
  const candidates = [
    path.resolve(process.cwd(), "dist", "data", "book.txt"),
    path.resolve(process.cwd(), "server", "data", "book.txt"),
    path.resolve(process.cwd(), "data", "book.txt"),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      BOOK_CORPUS = fs.readFileSync(p, "utf8");
      break;
    }
  }
} catch (e) {
  console.warn("[chat] could not load book corpus", e);
}

const ROLE_NOTES: Record<string, string> = {
  superintendent:
    "The reader is a SUPERINTENDENT. Frame answers around district-wide vision, policy, board relations, budget, and change leadership. Reference Chapters 1, 3, 11, 13, 14 when applicable.",
  principal:
    "The reader is a PRINCIPAL or building leader. Frame answers around building-level pilots, teacher PD, and culture. Reference Chapters 5, 7, 11 when applicable.",
  teacher:
    "The reader is a TEACHER. Frame answers around classroom practice, lesson design, and student engagement. Reference Chapters 2, 6, 7, 8, 10 when applicable.",
  tech: "The reader is a TECHNOLOGY DIRECTOR or instructional tech leader. Frame answers around tools, infrastructure, data privacy, and pilot operations. Reference Chapters 3, 6, 13 when applicable.",
  sped: "The reader is a SPECIAL EDUCATION leader or coordinator. Frame answers around accessibility, differentiation, and inclusive practice. Reference Chapters 9, 10 when applicable.",
  board:
    "The reader is a SCHOOL BOARD member or trustee. Frame answers around governance, policy, equity, and community accountability. Reference Chapters 1, 3, 13, 14 when applicable.",
};

const SYSTEM_PROMPT = (role: string | null) => `You are the AI Companion for the book "The Future of Artificial Intelligence: Emerging Technologies and Trends in Education" (2025), compiled by Brian S. Graham, Ed.D.

Your job is to answer the reader's questions GROUNDED IN THE BOOK ITSELF. The full book text is provided below.

GROUND RULES:
- Use the book as your primary source. Quote or paraphrase what specific contributors actually say.
- When you cite something, name the chapter (e.g. "In Chapter 5, Hillary Kretz-Harvey describes…") and where useful, the contributor.
- If the book does not directly address the question, SAY SO. You may then offer reasonable inference, clearly labeled ("Beyond the book…" or "The book doesn't address this directly, but…"). Never fabricate quotes or claim something is in the book if it isn't.
- Keep responses tight: 2–4 short paragraphs unless the question genuinely needs more. Use plain text — no markdown headers, no bullet lists unless the user asks for steps.
- Use a warm, plainspoken tone fit for school leaders. No hype, no jargon.
${role && ROLE_NOTES[role] ? `\nREADER CONTEXT: ${ROLE_NOTES[role]}` : ""}

THE BOOK:
<book>
${BOOK_CORPUS}
</book>
`;

export async function registerRoutes(
  httpServer: ReturnType<typeof createServer>,
  app: Express
): Promise<Server> {
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, role } = req.body as {
        messages: { role: "user" | "assistant"; content: string }[];
        role: string | null;
      };
      if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: "messages required" });
      }
      if (!BOOK_CORPUS) {
        return res
          .status(500)
          .json({ error: "Book corpus not loaded on server" });
      }

      // Cap conversation length to last 10 turns to keep prompt size bounded.
      const trimmed = messages.slice(-10).map((m) => ({
        role: m.role,
        content: m.content.slice(0, 4000),
      }));

      // In dev sandbox, the proxy injects credentials and uses model alias "claude_sonnet_4_6".
      // In published sandbox, we use the user's own ANTHROPIC_API_KEY and a real model id.
      const userKey = process.env.ANTHROPIC_API_KEY;
      const client = userKey ? new Anthropic({ apiKey: userKey }) : new Anthropic();
      const model = userKey ? "claude-sonnet-4-5" : "claude_sonnet_4_6";
      const result = await client.messages.create({
        model,
        max_tokens: 1200,
        system: SYSTEM_PROMPT(role),
        messages: trimmed,
      });

      const text = result.content
        .filter((b: any) => b.type === "text")
        .map((b: any) => b.text)
        .join("\n")
        .trim();

      res.json({ reply: text || "(no response)" });
    } catch (e: any) {
      console.error("[chat] error", e);
      res
        .status(500)
        .json({ error: e?.message || "chat failed", reply: null });
    }
  });

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true, bookLoaded: BOOK_CORPUS.length > 0 });
  });

  return httpServer;
}

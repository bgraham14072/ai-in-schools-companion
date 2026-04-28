import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useRole } from "@/lib/role-context";
import { ROLES } from "@/data/book";
import { Send, MessageSquareText, Sparkles, BookOpen } from "lucide-react";
import { Link } from "wouter";

type Message = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "What does the book say about writing an AI policy that won't be obsolete in a year?",
  "How do I bring reluctant teachers into an AI pilot without forcing it?",
  "What's the case for AI in special education according to the book?",
  "Where does the book caution against AI use, and why?",
  "What would the contributors say to a board nervous about AI?",
];

export default function Chat() {
  const { role } = useRole();
  const roleObj = ROLES.find((r) => r.id === role);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, pending]);

  async function send(text: string) {
    if (!text.trim() || pending) return;
    setError(null);
    const userMsg: Message = { role: "user", content: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setPending(true);
    try {
      const res = await apiRequest("POST", "/api/chat", {
        messages: next,
        role: role || null,
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply || "(no response)" },
      ]);
    } catch (e: any) {
      setError(
        "Sorry — couldn't reach the book. Try again in a moment."
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-3.5rem)] max-w-4xl flex-col px-4 sm:px-6">
      {/* Header */}
      <div className="border-b border-border py-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Ask the book
        </p>
        <h1 className="mt-2 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
          A book-grounded conversation
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Answers come from the chapters themselves — with chapter
          citations when they apply.
          {roleObj && (
            <>
              {" "}You're reading as a{" "}
              <span className="font-medium text-foreground">
                {roleObj.label.toLowerCase()}
              </span>
              .
            </>
          )}
        </p>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-5 overflow-y-auto py-6"
        data-testid="chat-scroll"
      >
        {messages.length === 0 && !pending && (
          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold text-foreground">
                    Try one of these to start:
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-2">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-md border border-border bg-card px-4 py-3 text-left text-sm leading-relaxed text-foreground/85 transition-all hover-elevate"
                    data-testid={`button-starter-${s.slice(0, 20)}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Card>
            <p className="text-center text-xs text-muted-foreground">
              The book answers what it can, and tells you when something
              isn't covered.
            </p>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            data-testid={`message-${m.role}-${i}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground/90"
              }`}
            >
              {m.role === "assistant" && (
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-primary">
                  <BookOpen className="h-3 w-3" />
                  The book
                </div>
              )}
              <div className="whitespace-pre-wrap">{m.content}</div>
            </div>
          </div>
        ))}

        {pending && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl border border-border bg-card px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                </span>
                Searching the chapters…
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
            {error}
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="border-t border-border py-4"
      >
        <div className="flex items-end gap-2 rounded-xl border border-border bg-card p-2 shadow-sm focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/30">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            rows={1}
            placeholder="Ask the book a question…"
            className="max-h-32 flex-1 resize-none bg-transparent px-2 py-2 text-sm leading-relaxed outline-none placeholder:text-muted-foreground"
            data-testid="input-chat"
            disabled={pending}
          />
          <Button
            type="submit"
            size="icon"
            disabled={pending || !input.trim()}
            data-testid="button-send-chat"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          Responses ground in the book. Press Enter to send · Shift+Enter
          for newline
        </p>
      </form>
    </div>
  );
}

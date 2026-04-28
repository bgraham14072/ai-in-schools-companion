import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { CHAPTERS } from "@/data/book";
import { ThemeBadge } from "@/components/ThemeBadge";
import { ArrowRight } from "lucide-react";

const PARTS: Record<number, { label: string; tagline: string }> = {
  1: {
    label: "Part 1 · Foundations",
    tagline: "What AI is, why now, and what's at stake.",
  },
  2: {
    label: "Part 2 · Practical Applications",
    tagline: "How leaders are actually putting AI to work.",
  },
  3: {
    label: "Part 3 · Personalized & Differentiated Learning",
    tagline: "Where AI starts reaching every learner.",
  },
  4: {
    label: "Part 4 · The Road Ahead",
    tagline: "Building communities and preparing for what comes next.",
  },
};

export default function ChapterList() {
  const byPart = [1, 2, 3, 4].map((p) => ({
    part: p,
    info: PARTS[p],
    chapters: CHAPTERS.filter((c) => c.part === p),
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        Chapter hub
      </p>
      <h1 className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight">
        14 chapters · 4 parts · one conversation
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Open any chapter for the tagline, key takeaways, the contributor's
        signature quote, three discussion questions, and one Monday-morning
        action.
      </p>

      {byPart.map(({ part, info, chapters }) => (
        <section key={part} className="mt-14">
          <div className="flex items-baseline gap-3 border-b border-border pb-3">
            <p className="font-serif text-xl font-semibold tracking-tight">
              {info.label}
            </p>
            <p className="hidden text-sm text-muted-foreground sm:block">
              · {info.tagline}
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c) => (
              <Link
                key={c.number}
                href={`/chapters/${c.number}`}
                data-testid={`link-chapter-${c.number}`}
              >
                <Card className="group flex h-full flex-col p-5 transition-all hover-elevate">
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      Chapter {c.number}
                    </p>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      pp. {c.pageStart}–{c.pageEnd}
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-lg font-semibold leading-snug tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {c.author}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.tagline}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.themes.slice(0, 3).map((t) => (
                      <ThemeBadge key={t} themeId={t} asLink={false} />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-end border-t border-border pt-3 text-xs text-muted-foreground">
                    Open
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

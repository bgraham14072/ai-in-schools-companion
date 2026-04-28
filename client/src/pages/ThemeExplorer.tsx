import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { THEMES, CHAPTERS } from "@/data/book";
import { ArrowRight } from "lucide-react";

export default function ThemeExplorer() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        Theme explorer
      </p>
      <h1 className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight">
        Ten threads that run through the book
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Every chapter touches several of these. Pick a theme to see exactly
        which chapters develop it and what each contributor adds to the
        conversation.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {THEMES.map((t) => {
          const count = CHAPTERS.filter((c) => c.themes.includes(t.id))
            .length;
          return (
            <Link
              key={t.id}
              href={`/themes/${t.id}`}
              data-testid={`link-theme-${t.id}`}
            >
              <Card className="group relative flex h-full flex-col overflow-hidden p-6 transition-all hover-elevate">
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-[hsl(var(--chart-${t.color}))]`}
                />
                <p
                  className={`text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--chart-${t.color}))]`}
                >
                  Theme
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight">
                  {t.label}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
                  <span className="text-muted-foreground">
                    {count} chapter{count === 1 ? "" : "s"}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-primary">
                    Explore
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

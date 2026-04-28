import { Link, useParams } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { THEMES, CHAPTERS, TOOLS, type ThemeId } from "@/data/book";
import { ThemeBadge } from "@/components/ThemeBadge";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function ThemeDetail() {
  const { id } = useParams<{ id: string }>();
  const theme = THEMES.find((t) => t.id === id);

  if (!theme) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <p className="text-muted-foreground">Theme not found.</p>
        <Link href="/themes">
          <Button variant="ghost" size="sm" className="mt-4">
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
            Back to themes
          </Button>
        </Link>
      </div>
    );
  }

  const chapters = CHAPTERS.filter((c) => c.themes.includes(theme.id as ThemeId));
  const toolNames = new Set<string>();
  chapters.forEach((c) => c.toolsMentioned.forEach((t) => toolNames.add(t)));
  const tools = TOOLS.filter((t) => toolNames.has(t.name));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Link href="/themes" data-testid="link-back-themes">
        <Button variant="ghost" size="sm" className="-ml-2">
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
          All themes
        </Button>
      </Link>

      <div className="mt-6 border-b border-border pb-10">
        <p
          className={`text-xs uppercase tracking-[0.2em] text-[hsl(var(--chart-${theme.color}))]`}
        >
          Theme
        </p>
        <h1 className="mt-2 font-serif text-[clamp(2rem,5vw,3rem)] leading-[1.05] tracking-tight">
          {theme.label}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {theme.description}
        </p>
      </div>

      {/* Chapters that develop this theme */}
      <section className="mt-12">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {chapters.length} chapter{chapters.length === 1 ? "" : "s"}{" "}
          develop this theme
        </p>
        <h2 className="mt-1 font-serif text-2xl font-semibold tracking-tight">
          What the book says
        </h2>

        <div className="mt-8 space-y-5">
          {chapters.map((c) => (
            <Link
              key={c.number}
              href={`/chapters/${c.number}`}
              data-testid={`link-chapter-${c.number}`}
            >
              <Card className="group p-6 transition-all hover-elevate">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      Chapter {c.number} · {c.author.split(",")[0]}
                    </p>
                    <h3 className="mt-1.5 font-serif text-lg font-semibold tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.tagline}
                    </p>
                    {c.quote && (
                      <p className="mt-4 flex items-start gap-2 border-l-2 border-primary/40 pl-3 font-serif text-sm italic leading-relaxed text-foreground/85">
                        <Quote className="mt-1 h-3 w-3 shrink-0 text-primary" />
                        <span>{c.quote}</span>
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.themes.map((t) => (
                        <ThemeBadge key={t} themeId={t} asLink={false} />
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools associated */}
      {tools.length > 0 && (
        <section className="mt-16">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Tools that come up
          </p>
          <h2 className="mt-1 font-serif text-2xl font-semibold tracking-tight">
            Toolkit for this theme
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {tools.map((t) => (
              <Card key={t.name} className="p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{t.name}</p>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {t.category}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

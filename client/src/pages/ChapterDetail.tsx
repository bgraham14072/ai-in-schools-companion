import { Link, useParams } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CHAPTERS, CONTRIBUTORS, TOOLS, ROLES } from "@/data/book";
import { ThemeBadge } from "@/components/ThemeBadge";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  CheckCircle2,
  HelpCircle,
  Calendar,
  MessageSquareText,
} from "lucide-react";

export default function ChapterDetail() {
  const { n } = useParams<{ n: string }>();
  const num = Number(n);
  const chapter = CHAPTERS.find((c) => c.number === num);

  if (!chapter) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <p className="text-muted-foreground">Chapter not found.</p>
        <Link href="/chapters">
          <Button variant="ghost" size="sm" className="mt-4">
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
            Back to chapters
          </Button>
        </Link>
      </div>
    );
  }

  const author = CONTRIBUTORS.find(
    (c) => c.chapterNumbers.includes(chapter.number) && c.name === chapter.author
  );
  const tools = TOOLS.filter((t) =>
    chapter.toolsMentioned.some(
      (m) => m.toLowerCase() === t.name.toLowerCase()
    )
  );
  const prev = CHAPTERS.find((c) => c.number === chapter.number - 1);
  const next = CHAPTERS.find((c) => c.number === chapter.number + 1);

  const audienceLabels = chapter.audienceFit
    .map((id) => ROLES.find((r) => r.id === id)?.label)
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/chapters" data-testid="link-back-chapters">
        <Button variant="ghost" size="sm" className="-ml-2">
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
          All chapters
        </Button>
      </Link>

      {/* Header */}
      <header className="mt-6 border-b border-border pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Chapter {chapter.number} · Part {chapter.part}
        </p>
        <h1 className="mt-3 font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-tight">
          {chapter.title}
        </h1>
        {chapter.subtitle && (
          <p className="mt-2 font-serif text-xl italic text-foreground/75">
            {chapter.subtitle}
          </p>
        )}
        <p className="mt-5 text-sm text-muted-foreground">
          By <span className="font-medium text-foreground">{chapter.author}</span>
          {chapter.authorRole && <> · {chapter.authorRole}</>}
          <span className="mx-2 text-muted-foreground/50">·</span>
          pp. {chapter.pageStart}–{chapter.pageEnd}
        </p>
        <p className="mt-6 max-w-3xl font-serif text-xl leading-snug text-foreground/90">
          {chapter.tagline}
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {chapter.themes.map((t) => (
            <ThemeBadge key={t} themeId={t} size="md" />
          ))}
        </div>
      </header>

      {/* Summary */}
      <section className="mt-10">
        <p className="text-base leading-relaxed text-foreground/85">
          {chapter.summary}
        </p>
      </section>

      {/* Quote callout */}
      <section className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <Quote className="h-5 w-5 text-primary" />
        <p className="mt-3 font-serif text-xl italic leading-snug text-foreground/90">
          &ldquo;{chapter.quote}&rdquo;
        </p>
        <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
          — {chapter.author}
        </p>
      </section>

      {/* Key takeaways */}
      <section className="mt-12">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Key takeaways
        </p>
        <h2 className="mt-1 font-serif text-2xl font-semibold tracking-tight">
          What you'll come away with
        </h2>
        <ul className="mt-6 space-y-3">
          {chapter.keyTakeaways.map((kt, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-base leading-relaxed text-foreground/85">
                {kt}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Two-up: Discussion + Monday action */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-primary" />
            <p className="text-xs font-semibold uppercase tracking-wider">
              Discussion questions
            </p>
          </div>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed">
            {chapter.discussionQuestions.map((q, i) => (
              <li key={i} className="flex gap-3 text-foreground/85">
                <span className="font-serif text-base font-semibold text-primary">
                  {i + 1}
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </Card>
        <Card className="border-primary/30 bg-secondary/30 p-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <p className="text-xs font-semibold uppercase tracking-wider">
              Monday-morning action
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            {chapter.mondayAction}
          </p>
        </Card>
      </div>

      {/* Tools mentioned */}
      {tools.length > 0 && (
        <section className="mt-12">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Tools mentioned in this chapter
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {tools.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-border bg-card p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{t.name}</p>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {t.category}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Audience fit */}
      {audienceLabels.length > 0 && (
        <p className="mt-10 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Most useful for:</span>{" "}
          {audienceLabels.join(" · ")}
        </p>
      )}

      {/* CTA: ask the book */}
      <Card className="mt-12 flex flex-wrap items-center justify-between gap-4 border-primary/30 p-6">
        <div className="flex items-start gap-3">
          <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="font-semibold">
              Want to dig into this chapter further?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Ask the book a question — answers ground in the chapters
              themselves.
            </p>
          </div>
        </div>
        <Link href="/chat" data-testid="link-ask-book">
          <Button>
            Ask the book
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </Link>
      </Card>

      {/* Prev/Next nav */}
      <nav className="mt-12 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={`/chapters/${prev.number}`} data-testid="link-prev-chapter">
            <Card className="group p-5 transition-all hover-elevate">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                <ArrowLeft className="mr-1 inline h-3 w-3" />
                Previous · Chapter {prev.number}
              </p>
              <p className="mt-2 font-serif font-semibold leading-snug">
                {prev.title}
              </p>
            </Card>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link
            href={`/chapters/${next.number}`}
            data-testid="link-next-chapter"
            className="sm:col-start-2"
          >
            <Card className="group p-5 text-right transition-all hover-elevate">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Next · Chapter {next.number}
                <ArrowRight className="ml-1 inline h-3 w-3" />
              </p>
              <p className="mt-2 font-serif font-semibold leading-snug">
                {next.title}
              </p>
            </Card>
          </Link>
        )}
      </nav>
    </article>
  );
}

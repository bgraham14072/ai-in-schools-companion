import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ASSESSMENT,
  DIMENSIONS,
  CHAPTERS,
  type Dimension,
} from "@/data/book";
import {
  ArrowRight,
  RefreshCcw,
  BookOpen,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const LIKERT = [
  { value: 1, label: "Not yet" },
  { value: 2, label: "Just starting" },
  { value: 3, label: "Developing" },
  { value: 4, label: "Mostly true" },
  { value: 5, label: "Strong" },
];

type Answers = Record<string, number>;

export default function Assessment() {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);

  const total = ASSESSMENT.length;
  const completed = Object.keys(answers).length;
  const progress = (completed / total) * 100;

  const setAnswer = (id: string, v: number) =>
    setAnswers((a) => ({ ...a, [id]: v }));

  // Group items by dimension
  const grouped = DIMENSIONS.map((d) => ({
    dim: d,
    items: ASSESSMENT.filter((a) => a.dimension === d.id),
  }));

  // Compute scores
  const scores = useMemo(() => {
    return DIMENSIONS.map((d) => {
      const items = ASSESSMENT.filter((a) => a.dimension === d.id);
      const answered = items.filter((i) => answers[i.id] !== undefined);
      const sum = answered.reduce((s, i) => s + (answers[i.id] || 0), 0);
      const avg = answered.length ? sum / answered.length : 0;
      return {
        dim: d,
        avg,
        pct: (avg / 5) * 100,
        answered: answered.length,
        total: items.length,
      };
    });
  }, [answers]);

  // Recommended chapters: weakest dimensions
  const ranked = [...scores].sort((a, b) => a.avg - b.avg);
  const focusAreas = ranked.slice(0, 3);
  const recommendedChapterNumbers = new Set<number>();
  focusAreas.forEach((f) => {
    ASSESSMENT.filter((a) => a.dimension === f.dim.id).forEach((item) => {
      item.chapterRefs.forEach((n) => recommendedChapterNumbers.add(n));
    });
  });
  const recommendedChapters = CHAPTERS.filter((c) =>
    recommendedChapterNumbers.has(c.number)
  ).slice(0, 6);

  if (submitted) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Your readiness profile
        </p>
        <h1 className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight">
          Where you're strong, and where to focus next
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          This is a snapshot — not a verdict. Use it to start a conversation
          with your team, then revisit in 90 days.
        </p>

        {/* Scores */}
        <section className="mt-10 space-y-4">
          {scores.map((s) => (
            <Card
              key={s.dim.id}
              className="p-5"
              data-testid={`card-score-${s.dim.id}`}
            >
              <div className="flex items-baseline justify-between">
                <p className="font-semibold">{s.dim.label}</p>
                <p className="font-serif text-lg font-semibold tabular-nums">
                  {s.avg.toFixed(1)}
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    / 5
                  </span>
                </p>
              </div>
              <Progress value={s.pct} className="mt-3 h-2" />
              <p className="mt-2 text-sm text-muted-foreground">
                {s.dim.blurb}
              </p>
            </Card>
          ))}
        </section>

        {/* Focus areas */}
        <section className="mt-12">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Focus areas
          </p>
          <h2 className="mt-1 font-serif text-2xl font-semibold tracking-tight">
            Three places to put your attention
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {focusAreas.map((f) => (
              <Card
                key={f.dim.id}
                className="border-primary/30 bg-secondary/30 p-5"
              >
                <AlertCircle className="h-4 w-4 text-primary" />
                <p className="mt-3 font-semibold">{f.dim.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.dim.blurb}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Recommended chapters */}
        <section className="mt-12">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Read next
          </p>
          <h2 className="mt-1 font-serif text-2xl font-semibold tracking-tight">
            Chapters that develop your focus areas
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {recommendedChapters.map((c) => (
              <Link
                key={c.number}
                href={`/chapters/${c.number}`}
                data-testid={`link-recommended-${c.number}`}
              >
                <Card className="group flex items-start gap-3 p-4 transition-all hover-elevate">
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      Chapter {c.number}
                    </p>
                    <p className="mt-1 font-serif font-semibold leading-snug">
                      {c.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {c.tagline}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
              window.scrollTo({ top: 0 });
            }}
            data-testid="button-retake"
          >
            <RefreshCcw className="mr-1.5 h-3.5 w-3.5" />
            Retake the check
          </Button>
          <Link href="/chat" data-testid="link-chat-after-assessment">
            <Button>
              Ask the book about your focus areas
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        Readiness self-check
      </p>
      <h1 className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight">
        18 honest questions across 6 dimensions
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        About 5 minutes. Answer for yourself first; bring your team in
        after. There's no grade — just a starting point and chapters that
        match where you are.
      </p>

      {/* Sticky progress */}
      <div className="sticky top-14 z-30 -mx-4 mt-8 border-y border-border bg-background/90 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {completed} of {total} answered
          </span>
          <span className="font-medium tabular-nums">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="mt-2 h-1.5" />
      </div>

      <div className="mt-8 space-y-10">
        {grouped.map(({ dim, items }) => (
          <section key={dim.id}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {dim.label}
            </p>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              {dim.blurb}
            </p>
            <div className="mt-5 space-y-4">
              {items.map((it, idx) => (
                <Card key={it.id} className="p-5">
                  <p className="text-base leading-relaxed text-foreground/90">
                    <span className="mr-2 font-mono text-xs text-muted-foreground">
                      {idx + 1}.
                    </span>
                    {it.prompt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {LIKERT.map((l) => {
                      const active = answers[it.id] === l.value;
                      return (
                        <button
                          key={l.value}
                          onClick={() => setAnswer(it.id, l.value)}
                          data-testid={`button-likert-${it.id}-${l.value}`}
                          className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-all hover-elevate ${
                            active
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card text-foreground/85"
                          }`}
                        >
                          <span className="mr-1.5 font-mono">{l.value}</span>
                          {l.label}
                        </button>
                      );
                    })}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
        <Button
          size="lg"
          disabled={completed < total}
          onClick={() => {
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          data-testid="button-submit-assessment"
        >
          {completed < total ? (
            <>
              Answer all {total} to see results ({total - completed} left)
            </>
          ) : (
            <>
              <CheckCircle2 className="mr-1.5 h-4 w-4" />
              See your readiness profile
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

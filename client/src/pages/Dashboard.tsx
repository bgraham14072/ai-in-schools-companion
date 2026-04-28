import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CHAPTERS, ROLES, THEMES, TOOLS } from "@/data/book";
import { useRole } from "@/lib/role-context";
import { ThemeBadge } from "@/components/ThemeBadge";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  MessageSquareText,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function Dashboard() {
  const { role } = useRole();
  const roleObj = ROLES.find((r) => r.id === role);

  // Chapters most relevant to the role
  const matched = role
    ? CHAPTERS.filter((c) => c.audienceFit.includes(role))
    : CHAPTERS;
  const top = matched.slice(0, 5);

  // Tools mentioned in matched chapters
  const toolNames = new Set<string>();
  matched.forEach((c) => c.toolsMentioned.forEach((t) => toolNames.add(t)));
  const matchedTools = TOOLS.filter((t) => toolNames.has(t.name)).slice(0, 6);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Your reading dashboard
          </p>
          <h1 className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight">
            {roleObj
              ? `Reading as a ${roleObj.label.toLowerCase()}`
              : "Browsing the book"}
          </h1>
          {roleObj && (
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {roleObj.blurb}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <Link href="/role" data-testid="link-change-role">
            <Button variant="outline" size="sm">
              {role ? "Change role" : "Pick a role"}
            </Button>
          </Link>
          <Link href="/assessment" data-testid="link-take-assessment">
            <Button size="sm">
              Take readiness check
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <ActionCard
          to="/chat"
          icon={MessageSquareText}
          title="Ask the book"
          body="Get grounded answers from the chapters in seconds."
          testid="card-action-chat"
        />
        <ActionCard
          to="/assessment"
          icon={CheckCircle2}
          title="Readiness self-check"
          body="18 honest questions across 6 dimensions."
          testid="card-action-assessment"
        />
        <ActionCard
          to="/tools"
          icon={Wrench}
          title="Tool library"
          body="Every tool referenced in the book, with chapter links."
          testid="card-action-tools"
        />
      </div>

      {/* Recommended for you */}
      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {role ? "Recommended for you" : "Featured chapters"}
            </p>
            <h2 className="mt-1 font-serif text-2xl font-semibold tracking-tight">
              Start here
            </h2>
          </div>
          <Link href="/chapters" data-testid="link-all-chapters">
            <Button variant="ghost" size="sm">
              All chapters
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {top.map((c) => (
            <Link
              key={c.number}
              href={`/chapters/${c.number}`}
              data-testid={`link-recommended-chapter-${c.number}`}
            >
              <Card className="group flex h-full flex-col p-6 transition-all hover-elevate">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  Chapter {c.number}
                </p>
                <h3 className="mt-2 font-serif text-lg font-semibold leading-snug tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.themes.slice(0, 2).map((t) => (
                    <ThemeBadge key={t} themeId={t} asLink={false} />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                  <span>{c.author.split(",")[0]}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Themes for role */}
      <section className="mt-16">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Themes that come up most for {roleObj?.label || "leaders"}
        </p>
        <h2 className="mt-1 font-serif text-2xl font-semibold tracking-tight">
          Explore by theme
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.slice(0, 6).map((t) => (
            <Link
              key={t.id}
              href={`/themes/${t.id}`}
              data-testid={`link-theme-${t.id}`}
            >
              <Card className="flex h-full flex-col p-5 transition-all hover-elevate">
                <p
                  className={`text-[11px] uppercase tracking-[0.16em] text-[hsl(var(--chart-${t.color}))]`}
                >
                  Theme
                </p>
                <p className="mt-1 font-semibold">{t.label}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools strip */}
      {matchedTools.length > 0 && (
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Tools surfaced for you
              </p>
              <h2 className="mt-1 font-serif text-2xl font-semibold tracking-tight">
                What's in the toolkit
              </h2>
            </div>
            <Link href="/tools" data-testid="link-all-tools">
              <Button variant="ghost" size="sm">
                Full library
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {matchedTools.map((t) => (
              <Card key={t.name} className="p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{t.name}</p>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {t.category}
                  </span>
                </div>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
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

function ActionCard({
  to,
  icon: Icon,
  title,
  body,
  testid,
}: {
  to: string;
  icon: any;
  title: string;
  body: string;
  testid: string;
}) {
  return (
    <Link href={to} data-testid={testid}>
      <Card className="group flex h-full items-start gap-4 p-5 transition-all hover-elevate">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="font-semibold">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {body}
          </p>
        </div>
        <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
      </Card>
    </Link>
  );
}

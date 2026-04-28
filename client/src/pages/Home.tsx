import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BOOK,
  CHAPTERS,
  ROLES,
  THEMES,
  CONTRIBUTORS,
  TOOLS,
  NEXT_BOOK,
} from "@/data/book";
import { useRole } from "@/lib/role-context";
import { ThemeBadge } from "@/components/ThemeBadge";
import { BookCTA } from "@/components/BookCTA";
import {
  Compass,
  School,
  Lightbulb,
  Shield,
  Heart,
  Users,
  ArrowRight,
  Sparkles,
  MessageSquareText,
  Quote,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  school: School,
  lightbulb: Lightbulb,
  shield: Shield,
  heart: Heart,
  users: Users,
};

export default function Home() {
  const { setRole } = useRole();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-[hsl(var(--chart-2))]/10" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" />
            Interactive companion · 2026 edition
          </p>
          <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            <span className="text-foreground">Lead the</span>{" "}
            <span className="text-primary">AI conversation</span>
            <br />
            in your schools — with this book at your side.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            An interactive dashboard built around{" "}
            <em className="font-serif text-foreground/90">
              The Future of Artificial Intelligence: Emerging Technologies
              and Trends in Education
            </em>{" "}
            — compiled by Dr. Brian S. Graham with {BOOK.contributorCount}{" "}
            education leaders from across the country. Choose your role,
            explore by theme, and find your next move.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/role">
              <Button
                size="lg"
                className="text-base"
                data-testid="button-hero-start"
              >
                Pick your role to start
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/chat">
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                data-testid="button-hero-chat"
              >
                <MessageSquareText className="mr-1.5 h-4 w-4" />
                Ask the Book
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            <Stat label="Chapters" value={String(BOOK.chapterCount)} />
            <Stat
              label="Contributors"
              value={String(BOOK.contributorCount)}
            />
            <Stat label="Themes" value={String(THEMES.length)} />
            <Stat label="Tools indexed" value={String(TOOLS.length)} />
          </div>
        </div>
      </section>

      {/* BUY THE BOOK */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16">
        <BookCTA variant="hero" testIdSuffix="home-hero" />
      </section>

      {/* ROLE PICKER */}
      <section id="roles" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          eyebrow="Step 1"
          title="Who are you reading as?"
          desc="The dashboard reshapes itself around your role — surfacing the chapters, themes, and concrete moves that fit you best."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((r) => {
            const Icon = ICONS[r.icon] ?? Compass;
            return (
              <Link
                key={r.id}
                href="/dashboard"
                onClick={() => setRole(r.id)}
                data-testid={`card-role-${r.id}`}
              >
                <Card className="group h-full p-6 hover-elevate transition-colors">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold tracking-tight">{r.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {r.blurb}
                  </p>
                  <div className="mt-4 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Open my dashboard
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* THEMES STRIP */}
      <section className="border-y border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Cross-cutting themes"
            title="Read by what matters to you, not just by chapter"
            desc="Every chapter touches several of these threads. Pick one to see exactly where it surfaces in the book."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {THEMES.map((t) => (
              <ThemeBadge key={t.id} themeId={t.id} size="md" />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/themes">
              <Button variant="link" className="px-0" data-testid="link-explore-themes">
                Explore the theme map <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED CHAPTER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          eyebrow="From the book"
          title="A taste of what's inside"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[CHAPTERS[6], CHAPTERS[10], CHAPTERS[11]].map((c) => (
            <Link
              key={c.number}
              href={`/chapters/${c.number}`}
              data-testid={`card-feature-${c.number}`}
            >
              <Card className="flex h-full flex-col p-6 hover-elevate">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Chapter {c.number} · {c.author.split(",")[0]}
                </p>
                <h3 className="mt-2 font-serif text-xl tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.tagline}
                </p>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {c.themes.slice(0, 3).map((t) => (
                      <ThemeBadge key={t} themeId={t} asLink={false} />
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-y border-border bg-primary/5 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Quote className="mx-auto mb-4 h-6 w-6 text-primary" />
          <p className="font-serif text-xl leading-snug tracking-tight sm:text-2xl">
            "The AI revolution in education will not be shaped by code,
            hardware, or algorithms alone. It will be forged by the
            vision, courage, and unwavering values of the leaders and
            educators who choose to engage."
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            — Brian S. Graham, Ed.D. · Chapter 14
          </p>
        </div>
      </section>

      {/* CONTRIBUTORS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          eyebrow="Contributors"
          title={`${BOOK.contributorCount} education leaders, one conversation`}
          desc="Superintendents, principals, founders, and researchers — each writing from their own vantage point."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {CONTRIBUTORS.slice(0, 8).map((c) => (
            <div
              key={c.slug}
              className="rounded-lg border border-border bg-card p-4"
              data-testid={`card-contributor-preview-${c.slug}`}
            >
              <p className="font-medium leading-tight">{c.name}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">
                {c.role}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/contributors">
            <Button variant="link" className="px-0" data-testid="link-all-contributors">
              See all contributors <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* NEXT BOOK */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Card className="overflow-hidden border-2 border-dashed border-primary/30 bg-gradient-to-br from-card to-primary/5 p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Coming September 2026
          </p>
          <h3 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            {NEXT_BOOK.title}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The hands-on companion to this book. A practical playbook for
            school leaders translating ideas into weekly action —
            frameworks, checklists, and concrete moves you can use Monday
            morning.
          </p>
        </Card>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-serif text-3xl tracking-tight">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

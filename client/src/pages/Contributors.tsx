import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { CONTRIBUTORS, CHAPTERS } from "@/data/book";
import { ExternalLink, BookOpen } from "lucide-react";

function initials(name: string) {
  return name
    .replace(/Dr\.|Ed\.D\.|Ph\.D\./g, "")
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Contributors() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        Contributor network
      </p>
      <h1 className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight">
        13 voices from the field
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Superintendents, principals, ed-tech founders, and authors. Each
        contributor brings a chapter-length perspective from their own work
        — not theory at a distance.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CONTRIBUTORS.map((c) => {
          const chapters = CHAPTERS.filter((ch) =>
            c.chapterNumbers.includes(ch.number)
          );
          return (
            <Card
              key={c.slug}
              className="flex h-full flex-col p-6"
              data-testid={`card-contributor-${c.slug}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-serif text-base font-semibold text-primary">
                  {initials(c.name)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold leading-snug">{c.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {c.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                {c.bio}
              </p>

              {chapters.length > 0 && (
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {chapters.length === 1 ? "Chapter" : "Chapters"}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {chapters.map((ch) => (
                      <li key={ch.number}>
                        <Link
                          href={`/chapters/${ch.number}`}
                          className="group flex items-start gap-2 text-sm text-foreground/85 hover:text-primary"
                          data-testid={`link-contributor-chapter-${ch.number}`}
                        >
                          <BookOpen className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground group-hover:text-primary" />
                          <span>
                            <span className="font-medium">
                              Ch. {ch.number}
                            </span>{" "}
                            — {ch.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {c.links && c.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  {c.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                      data-testid={`link-contributor-external-${c.slug}`}
                    >
                      {l.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

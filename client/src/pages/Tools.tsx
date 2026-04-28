import { useState } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TOOLS, type Tool } from "@/data/book";
import { ExternalLink, BookOpen } from "lucide-react";

const CATEGORIES: Tool["category"][] = [
  "Assistant",
  "Tutor",
  "Teacher Tool",
  "Builder",
  "Safety",
  "Accessibility",
  "Framework",
];

export default function Tools() {
  const [filter, setFilter] = useState<Tool["category"] | "All">("All");
  const filtered =
    filter === "All" ? TOOLS : TOOLS.filter((t) => t.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        Tool library
      </p>
      <h1 className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight">
        Every tool referenced in the book
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        {TOOLS.length} tools and platforms — what they do, where they
        appear, and which chapter to read for context. We don't endorse
        anything. We do tell you who used what, and how.
      </p>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        <Button
          variant={filter === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("All")}
          data-testid="button-filter-all"
        >
          All ({TOOLS.length})
        </Button>
        {CATEGORIES.map((c) => {
          const count = TOOLS.filter((t) => t.category === c).length;
          if (count === 0) return null;
          return (
            <Button
              key={c}
              variant={filter === c ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(c)}
              data-testid={`button-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {c} ({count})
            </Button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <Card
            key={t.name}
            className="flex h-full flex-col p-5"
            data-testid={`card-tool-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-serif text-lg font-semibold tracking-tight">
                {t.name}
              </p>
              <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {t.category}
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {t.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-3 text-xs">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <BookOpen className="h-3 w-3" />
                <span>In:</span>
                {t.whereInBook.map((n, i) => (
                  <Link
                    key={n}
                    href={`/chapters/${n}`}
                    className="font-medium text-foreground/80 hover:text-primary"
                    data-testid={`link-tool-chapter-${t.name.toLowerCase().replace(/\s+/g, "-")}-${n}`}
                  >
                    Ch. {n}
                    {i < t.whereInBook.length - 1 ? ", " : ""}
                  </Link>
                ))}
              </div>
              {t.href && (
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  data-testid={`link-tool-external-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  Visit
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

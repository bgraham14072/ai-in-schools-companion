import { BOOK, NEXT_BOOK } from "@/data/book";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold tracking-tight">
              {BOOK.title}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {BOOK.subtitle}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Compiled by {BOOK.compiler}, {BOOK.year}.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Coming September 2026</p>
            <p className="mt-1 text-sm font-serif italic text-foreground/85">
              {NEXT_BOOK.title}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {NEXT_BOOK.description}
            </p>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>
              An interactive companion for school leaders, teachers,
              and boards.
            </p>
            <p className="mt-2 text-xs">
              &copy; {BOOK.year} Brian S. Graham. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

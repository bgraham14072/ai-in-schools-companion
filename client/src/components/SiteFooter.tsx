import { BOOK, NEXT_BOOK } from "@/data/book";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <a
              href={BOOK.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-buy-book-footer"
              className="mt-4 inline-flex"
            >
              <Button size="sm" variant="default">
                <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
                Buy on Amazon
              </Button>
            </a>
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

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BOOK } from "@/data/book";
import { ShoppingCart, Star } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

type Variant = "hero" | "sidebar" | "banner" | "compact";

export function BookCTA({
  variant = "sidebar",
  testIdSuffix = "",
}: {
  variant?: Variant;
  testIdSuffix?: string;
}) {
  const testId = `link-buy-book${testIdSuffix ? `-${testIdSuffix}` : ""}`;

  if (variant === "hero") {
    return (
      <Card className="overflow-hidden border-2 border-primary/25 bg-gradient-to-br from-card via-card to-primary/5">
        <div className="grid items-center gap-6 p-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:p-8">
          <a
            href={BOOK.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`${testId}-cover`}
            className="block transition-transform hover:scale-[1.02]"
          >
            <img
              src={bookCover}
              alt={`Cover of ${BOOK.title}`}
              className="w-full max-w-[180px] rounded-md shadow-xl ring-1 ring-border"
            />
          </a>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              Don't have the book yet?
            </p>
            <h3 className="mt-2 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
              Get the full book on Amazon
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              This dashboard is a companion — the real depth is in the
              chapters. {BOOK.contributorCount} education leaders, {BOOK.chapterCount}{" "}
              chapters, {BOOK.pageCount} pages. Available in paperback and on
              Kindle.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={BOOK.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={testId}
              >
                <Button size="lg" className="text-base">
                  <ShoppingCart className="mr-1.5 h-4 w-4" />
                  Buy on Amazon
                </Button>
              </a>
              <p className="text-xs text-muted-foreground">
                Opens Amazon in a new tab
              </p>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className="flex flex-wrap items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 sm:gap-4 sm:px-5"
        data-testid={`banner-buy-book${testIdSuffix ? `-${testIdSuffix}` : ""}`}
      >
        <img
          src={bookCover}
          alt=""
          aria-hidden
          className="h-12 w-9 flex-none rounded-sm shadow-sm ring-1 ring-border"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-tight">
            Want the full chapter, not just the answer?
          </p>
          <p className="text-xs leading-snug text-muted-foreground">
            Get the complete book on Amazon — every chapter, in your hands.
          </p>
        </div>
        <a
          href={BOOK.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={testId}
          className="flex-none"
        >
          <Button size="sm">
            <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
            Buy on Amazon
          </Button>
        </a>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={BOOK.buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={testId}
      >
        <Button size="sm" variant="default" className="text-xs sm:text-sm">
          <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
          Buy the book
        </Button>
      </a>
    );
  }

  // sidebar variant (default)
  return (
    <Card className="overflow-hidden p-5">
      <div className="flex items-start gap-4">
        <a
          href={BOOK.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`${testId}-cover`}
          className="flex-none transition-transform hover:scale-[1.03]"
        >
          <img
            src={bookCover}
            alt={`Cover of ${BOOK.title}`}
            className="h-28 w-20 rounded-sm shadow-md ring-1 ring-border"
          />
        </a>
        <div className="min-w-0">
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary">
            The book
          </p>
          <p className="mt-1 font-serif text-base font-semibold leading-tight">
            {BOOK.title}
          </p>
          <p className="mt-1 text-xs leading-snug text-muted-foreground">
            By Dr. Brian S. Graham · {BOOK.year}
          </p>
          <div className="mt-1 flex items-center gap-1 text-amber-500">
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
          </div>
        </div>
      </div>
      <a
        href={BOOK.buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={testId}
        className="mt-4 block"
      >
        <Button size="sm" className="w-full">
          <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
          Buy on Amazon
        </Button>
      </a>
    </Card>
  );
}

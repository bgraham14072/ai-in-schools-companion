import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useRole } from "@/lib/role-context";
import { ROLES } from "@/data/book";
import { BookOpen } from "lucide-react";

const NAV = [
  { label: "Themes", href: "/themes" },
  { label: "Chapters", href: "/chapters" },
  { label: "Contributors", href: "/contributors" },
  { label: "Tools", href: "/tools" },
  { label: "Assessment", href: "/assessment" },
  { label: "Ask the Book", href: "/chat" },
];

export function SiteHeader() {
  const [loc] = useLocation();
  const { role, setRole } = useRole();
  const roleObj = ROLES.find((r) => r.id === role);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          data-testid="link-home"
        >
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="hidden sm:inline">AI in Schools</span>
          <span className="sm:hidden">AIIS</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? loc === "/"
                : loc.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors hover-elevate ${
                  active
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {roleObj ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setRole(null)}
              data-testid="button-change-role"
              className="hidden text-xs sm:inline-flex"
            >
              <span className="text-muted-foreground">Reading as:</span>
              <span className="ml-1 font-medium">{roleObj.label.split(" / ")[0]}</span>
            </Button>
          ) : (
            <Link href="/role">
              <Button size="sm" data-testid="button-pick-role">
                Pick your role
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="md:hidden border-t border-border">
        <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-3 py-1.5 text-xs">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-2.5 py-1 text-muted-foreground hover-elevate"
              data-testid={`link-mobnav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

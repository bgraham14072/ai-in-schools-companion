import { THEMES, type ThemeId } from "@/data/book";
import { Link } from "wouter";

const COLOR_CLASSES: Record<string, string> = {
  "1": "bg-[hsl(var(--chart-1))]/12 text-[hsl(var(--chart-1))] border border-[hsl(var(--chart-1))]/25",
  "2": "bg-[hsl(var(--chart-2))]/12 text-[hsl(var(--chart-2))] border border-[hsl(var(--chart-2))]/25",
  "3": "bg-[hsl(var(--chart-3))]/12 text-[hsl(var(--chart-3))] border border-[hsl(var(--chart-3))]/25",
  "4": "bg-[hsl(var(--chart-4))]/12 text-[hsl(var(--chart-4))] border border-[hsl(var(--chart-4))]/25",
  "5": "bg-[hsl(var(--chart-5))]/12 text-[hsl(var(--chart-5))] border border-[hsl(var(--chart-5))]/25",
  "6": "bg-[hsl(var(--chart-1))]/12 text-[hsl(var(--chart-1))] border border-[hsl(var(--chart-1))]/25",
};

export function ThemeBadge({
  themeId,
  size = "sm",
  asLink = true,
}: {
  themeId: ThemeId;
  size?: "sm" | "md";
  asLink?: boolean;
}) {
  const t = THEMES.find((x) => x.id === themeId);
  if (!t) return null;
  const className = `inline-flex items-center rounded-full ${
    size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs"
  } font-medium tracking-wide ${COLOR_CLASSES[t.color]} hover-elevate`;
  if (asLink) {
    return (
      <Link
        href={`/themes/${t.id}`}
        className={className}
        data-testid={`badge-theme-${t.id}`}
      >
        {t.shortLabel}
      </Link>
    );
  }
  return <span className={className}>{t.shortLabel}</span>;
}

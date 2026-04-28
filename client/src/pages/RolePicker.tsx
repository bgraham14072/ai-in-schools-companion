import { Link, useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ROLES } from "@/data/book";
import { useRole } from "@/lib/role-context";
import {
  Compass,
  School,
  Lightbulb,
  Shield,
  Heart,
  Users,
  ArrowRight,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  school: School,
  lightbulb: Lightbulb,
  shield: Shield,
  heart: Heart,
  users: Users,
};

export default function RolePicker() {
  const { role, setRole } = useRole();
  const [, setLoc] = useLocation();

  const choose = (id: any) => {
    setRole(id);
    setLoc("/dashboard");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        Step 1 · Tell us where you sit
      </p>
      <h1 className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight">
        Who are you reading as?
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        Pick the role closest to your work. We use it to surface the
        chapters, themes, and tools that match the questions you're most
        likely asking right now. You can change it anytime.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {ROLES.map((r) => {
          const Icon = ICONS[r.icon] || Compass;
          const active = role === r.id;
          return (
            <button
              key={r.id}
              onClick={() => choose(r.id)}
              data-testid={`button-role-${r.id}`}
              className={`group flex items-start gap-4 rounded-xl border bg-card p-5 text-left transition-all hover-elevate ${
                active
                  ? "border-primary ring-1 ring-primary/30"
                  : "border-border"
              }`}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">{r.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {r.blurb}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Open dashboard <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
        <span>Not sure?</span>
        <Link href="/dashboard" data-testid="link-skip-role">
          <Button variant="ghost" size="sm">
            Browse without picking
          </Button>
        </Link>
      </div>
    </div>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Coins,
  FileSpreadsheet,
  Landmark,
  LayoutDashboard,
  Scale,
  Users,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useLedger } from "@/lib/store";

const NAV = [
  { to: "/", label: "نمای کلی", short: "کلی", icon: LayoutDashboard },
  { to: "/people", label: "افراد و گروه‌ها", short: "افراد", icon: Users },
  { to: "/assets", label: "دارایی‌ها", short: "دارایی", icon: Landmark },
  { to: "/ledger", label: "دفتر تراکنش‌ها", short: "دفتر", icon: BookOpen },
  { to: "/obligations", label: "بدهی و مطالبات", short: "تعهد", icon: Scale },
  { to: "/audit", label: "ردپای محاسبه", short: "ردپا", icon: Wallet },
  { to: "/import", label: "ورود اکسل", short: "اکسل", icon: FileSpreadsheet },
  { to: "/rates", label: "نرخ ارز", short: "نرخ", icon: Coins },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const setHydrated = useLedger((s) => s.setHydrated);

  useEffect(() => {
    const api = useLedger.persist;
    const done = () => setHydrated(true);
    if (api && typeof api.rehydrate === "function") {
      void Promise.resolve(api.rehydrate()).finally(done);
    } else {
      done();
    }
  }, [setHydrated]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <div className="mx-auto flex max-w-7xl">
        <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-e border-line p-5 md:flex">
          <Brand />
          <nav className="mt-8 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-11 items-center gap-2 rounded-md px-3 text-sm transition-colors duration-150",
                  pathname === item.to
                    ? "bg-teal text-teal-fg"
                    : "text-ink-muted hover:bg-paper-inset hover:text-ink",
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-auto text-xs leading-6 text-ink-subtle">
            حساب خانوادگی با واحد صندوق. همهٔ سهم‌ها از دفتر تراکنش‌ها قابل ردیابی است.
          </p>
        </aside>

        <div className="min-w-0 flex-1 overflow-x-hidden px-4 pt-5 pb-24 md:px-6 md:pb-10">
          <header className="mb-6 flex items-end justify-between border-b border-line pb-4 md:hidden">
            <Brand compact />
          </header>
          {children}
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-8 border-t border-line bg-paper-elevated md:hidden">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex h-14 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[10px]",
              pathname === item.to ? "text-teal" : "text-ink-subtle",
            )}
          >
            <item.icon className="size-4" />
            <span>{item.short}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <div className="text-xl font-semibold tracking-tight text-teal">سهم‌بان</div>
      {!compact && <div className="mt-1 text-xs text-ink-muted">دفتر حساب خانواده</div>}
    </div>
  );
}

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-paper-elevated p-5 shadow-[0_1px_0_color-mix(in_oklab,var(--color-ink)_4%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 className={cn("text-base font-semibold text-ink", className)} {...props} />;
}

export function CardHint({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("mt-1 text-sm text-ink-muted", className)} {...props} />;
}

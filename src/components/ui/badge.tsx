import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "muted",
  ...props
}: React.ComponentProps<"span"> & { tone?: "muted" | "teal" | "rose" | "forest" }) {
  const tones = {
    muted: "bg-paper-inset text-ink-muted",
    teal: "bg-teal-soft text-teal",
    rose: "bg-rose-soft text-rose",
    forest: "bg-teal-soft text-forest",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}

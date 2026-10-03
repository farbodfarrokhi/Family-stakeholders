import { cn } from "@/lib/utils";

export function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "h-11 w-full rounded-md border border-line bg-paper-elevated px-3 text-sm text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

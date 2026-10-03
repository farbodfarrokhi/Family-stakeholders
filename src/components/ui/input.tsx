import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-line bg-paper-elevated px-3 text-sm text-ink",
        "placeholder:text-ink-subtle focus-visible:border-teal",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-24 w-full rounded-md border border-line bg-paper-elevated px-3 py-2 text-sm text-ink",
        "placeholder:text-ink-subtle focus-visible:border-teal",
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return <label className={cn("mb-1.5 block text-sm font-medium text-ink-muted", className)} {...props} />;
}

export function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

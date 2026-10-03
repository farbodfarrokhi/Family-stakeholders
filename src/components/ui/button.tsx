import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-opacity transition-transform duration-[var(--motion-quick,150ms)] ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-teal text-teal-fg hover:bg-teal-hover",
        secondary: "bg-paper-inset text-ink hover:bg-line",
        outline: "border border-line-strong bg-paper-elevated text-ink hover:bg-paper-inset",
        ghost: "text-ink-muted hover:bg-paper-inset hover:text-ink",
        danger: "bg-rose text-teal-fg hover:opacity-90",
      },
      size: {
        default: "h-11 px-4",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-5",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

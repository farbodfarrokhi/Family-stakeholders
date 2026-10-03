import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogContent({
  className,
  children,
  title,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & { title: string }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/40" />
      <DialogPrimitive.Content
        className={cn(
          "fixed top-1/2 left-1/2 z-50 max-h-[90vh] w-[min(640px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-line bg-paper-elevated p-5 shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <DialogPrimitive.Title className="text-lg font-semibold">{title}</DialogPrimitive.Title>
          <DialogPrimitive.Close asChild>
            <Button variant="ghost" size="icon" aria-label="بستن">
              <X />
            </Button>
          </DialogPrimitive.Close>
        </div>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

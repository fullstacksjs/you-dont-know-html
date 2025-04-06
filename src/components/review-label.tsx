import { cn } from "@/lib/cn";

export const ReviewLabel = ({
  className,
  ...props
}: React.ComponentProps<"label">) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={cn(
        "flex w-full items-center gap-3 rounded border p-3 overflow-clip border-border-dark",
        className,
      )}
      {...props}
    />
  );
};

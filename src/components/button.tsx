import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "contained" | "secondary";
  size?: "md" | "sm";
  asChild?: boolean;
}

export const Button = ({
  variant = "contained",
  className,
  asChild,
  size = "md",
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "w-full cursor-pointer",
        {
          "bg-accent text-background ": variant === "contained",
          "bg-shade-2 text-accent": variant === "secondary",
          "py-2.5 text-center font-bold rounded-md": size === "md",
        },
        className,
      )}
      {...props}
    />
  );
};

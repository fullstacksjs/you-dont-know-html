import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "contained" | "outline";
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
          "py-6 text-center font-bold text-xl rounded-md": size === "md",
        },
        className,
      )}
      {...props}
    />
  );
};

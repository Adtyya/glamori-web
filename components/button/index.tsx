import { ButtonHTMLAttributes, FC, ReactNode, createElement } from "react";
import clsx from "clsx";

type Variant = "primary" | "outline" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-glamorig-500 text-white hover:bg-glamorig-600",
  outline:
    "border border-glamorig-500 text-glamorig-500 hover:bg-glamorig-500 hover:text-white",
  ghost: "text-glamorig-500 hover:bg-glamorig-500/10",
  destructive:
    "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-6 py-1.5 text-sm",
  md: "px-7 py-2 text-base",
  lg: "px-8 py-2.5 text-lg",
};

const Button: FC<ButtonProps> = ({
  children,
  as = "button",
  href,
  variant = "primary",
  size = "md",
  fullWidth,
  loading,
  className,
  disabled,
  ...rest
}) => {
  const element = as === "a" ? "a" : "button";

  const isDisabled = disabled || loading;

  return createElement(
    element,
    {
      href,
      disabled: element === "button" ? isDisabled : undefined,
      className: clsx(
        "inline-flex items-center justify-center gap-2 rounded-2xl transition duration-200 active:scale-[.97] cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        isDisabled && "opacity-70 cursor-not-allowed",
        className
      ),
      ...rest,
    },
    loading ? "Loading..." : children
  );
};

export default Button;

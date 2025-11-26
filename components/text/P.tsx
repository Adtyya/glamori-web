import { FC, ReactNode } from "react";
import clsx from "clsx";

type Size = "sm" | "md" | "lg";

interface ParagraphProps {
  children: ReactNode;
  size?: Size;
  className?: string;
}

const sizeStyles: Record<Size, string> = {
  sm: "text-[13px] leading-relaxed",
  md: "text-[15px] leading-relaxed",
  lg: "text-[17px] leading-relaxed",
};

const Paragraph: FC<ParagraphProps> = ({
  children,
  size = "md",
  className,
}) => {
  return (
    <p className={clsx(sizeStyles[size], "text-glamorib-100", className)}>
      {children}
    </p>
  );
};

export default Paragraph;

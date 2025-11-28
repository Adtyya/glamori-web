import { FC, ReactNode } from "react";
import clsx from "clsx";

type Size = "sm" | "md" | "lg" | "xl";

interface ParagraphProps {
  children: ReactNode;
  size?: Size;
  className?: string;
}

const sizeStyles: Record<Size, string> = {
  sm: "text-[10px] 2xl:text-[14px] leading-relaxed",
  md: "text-[14px] 2xl:text-[16px] leading-relaxed",
  lg: "text-[16px] 2xl:text-[18px] leading-relaxed",
  xl: "text-[18px] 2xl:text-[22px] leading-relaxed",
};

const Paragraph: FC<ParagraphProps> = ({
  children,
  size = "md",
  className,
}) => {
  return (
    <p className={clsx(sizeStyles[size], "text-glamoris-900", className)}>
      {children}
    </p>
  );
};

export default Paragraph;

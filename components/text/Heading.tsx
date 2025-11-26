import { FC, ReactNode, createElement, JSX } from "react";
import clsx from "clsx";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  children: ReactNode;
  as?: HeadingLevel;
  className?: string;
}

const headingStyles: Record<HeadingLevel, string> = {
  1: "text-[42px] lg:text-[60px] font-bold leading-tight",
  2: "text-[36px] lg:text-[50px] font-semibold leading-tight",
  3: "text-[30px] lg:text-[42px] font-semibold leading-snug",
  4: "text-[26px] lg:text-[34px] font-medium leading-snug",
  5: "text-[23px] lg:text-[30px] font-medium leading-normal",
  6: "text-[20px] lg:text-[26px] font-medium leading-normal",
};

const Heading: FC<HeadingProps> = ({ children, as = 2, className }) => {
  const element = `h${as}` as keyof JSX.IntrinsicElements;

  return createElement(
    element,
    {
      className: clsx(headingStyles[as], className),
    },
    children
  );
};

export default Heading;

import { FC, ReactNode, createElement, JSX } from "react";
import clsx from "clsx";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  children: ReactNode;
  as?: HeadingLevel;
  className?: string;
}

const headingStyles: Record<HeadingLevel, string> = {
  1: "text-[34px] lg:text-[42px] 2xl:text-[50px] font-bold leading-tight",
  2: "text-[30px] lg:text-[38px] 2xl:text-[44px] font-semibold leading-tight",
  3: "text-[26px] lg:text-[32px] 2xl:text-[38px] font-semibold leading-snug",
  4: "text-[22px] lg:text-[28px] 2xl:text-[32px] font-medium leading-snug",
  5: "text-[20px] lg:text-[26px] 2xl:text-[28px] font-medium leading-normal",
  6: "text-[18px] lg:text-[22px] 2xl:text-[24px] font-medium leading-normal",
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

import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="w-full h-full max-w-7xl mx-auto">{children}</div>;
}

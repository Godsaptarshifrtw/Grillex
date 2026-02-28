import React from "react";
import Navbar from "./Navbar";

interface IProps {
  children: React.ReactNode;
  className?: string;
  style ? : React.CSSProperties | undefined;
}

export default function SectionLayout({ children, className, style }: IProps) {
  return (
    <section style={style} className={`w-full h-[600px] max-h-[650px] px-20 ${className}`}>
      {children}
    </section>
  );
}

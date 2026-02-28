import React from "react";

interface IProps {
  type?: "H1" | "H2" | "H3" | "H4";
  children: React.ReactNode;
  className?: string;
  style ? : React.CSSProperties
}

const ComponentToRender = ({ type, children, className, style }: IProps) => {
  const default_class = "font-semibold tracking-wider text-xl text-gray-700";

  switch (type) {
    case "H1":
      return <h1 style={style} className={`${default_class} ${className}`}>{children}</h1>;
    case "H4":
      return <h4 style={style} className={`${default_class} ${className}`}>{children}</h4>;
    case "H3":
      return <h3 style={style} className={`${default_class} ${className}`}>{children}</h3>;
    default:
      return <h2 style={style} className={`${default_class} ${className}`}>{children}</h2>;
  }
};

export default function Heading({ type, children, className, style }: IProps) {
  return (
    <>
      <div className="font-semibold tracking-wider text-xl text-gray-700 hidden">
        This is for tailwind needed class
      </div>
      <ComponentToRender type={type} className={className} style = {style}>
        {children}
      </ComponentToRender>
    </>
  );
}

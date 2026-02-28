import React from "react";


export default function Heading({ children, className }: { children: React.ReactNode, className ? : string }) {
  return <h2 className="font-semibold text-xl">{children}</h2>;
}

import React from "react";

type PType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export default function P(params: PType) {
  return (
    <p
      className={`text-gray-600 leading-7 tracking-wide text-[17px] text-justify ${params.className}`}
    >
      {params.children}
    </p>
  );
}

import React from "react";

interface IPorps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export default function Button(props: IPorps) {
  return <button {...props} className={`uppercase font-semibold bg-[#B62E26] py-8 tracking-[0.2em] text-white hover:bg-[#FFB426] transition-all duration-300 hover:text-black ${props.className}`}>{props.children}</button>;
}

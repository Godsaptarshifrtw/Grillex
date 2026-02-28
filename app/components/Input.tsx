import React from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export default function Input(props: IProps) {
  return (
    <div className="border">
      <input
        {...props}
        className="outline-none w-full px-3 py-2"
      />
    </div>
  );
}

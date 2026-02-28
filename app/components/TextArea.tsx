import React from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export default function TextArea(props: IProps) {
  return (
    <div className="border">
      <textarea {...props} className="outline-none w-full px-3 py-2"></textarea>
    </div>
  );
}

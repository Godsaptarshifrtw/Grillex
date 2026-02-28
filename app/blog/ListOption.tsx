import React from "react";
import Heading from "./Heading";
import P from "./P";

interface IProps {
  list: {
    heading?: string;
    description: string;
    isAnyLinkInDescription?: boolean;
  }[];
}

export default function ListOption({ list }: IProps) {
  return (
    <ul className="w-full space-y-3">
      <p className="read-only:hidden text-[14.4px]"></p>
      {list.map((item, index) => (
        <li key={index}>
          {item.heading ? (
            <Heading
              style={{ fontSize: "14.4px" }}
              type="H4"
              className="float-left mr-2 text-[14.4px]"
            >
              {item.heading} :
            </Heading>
          ) : null}
          <P className="text-[14.4px]">
            {!item.heading ? "- " : ""}
            {item.isAnyLinkInDescription ? (
              <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
            ) : (
              item.description
            )}
          </P>
        </li>
      ))}
    </ul>
  );
}

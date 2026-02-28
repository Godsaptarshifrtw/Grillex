import React from "react";

interface IPorps {
  list: { heading: string; description: string }[];
}
export default function ListWithHeading({ list }: IPorps) {
  return (
    <ul className="space-y-4">
      {list.map((item, index) => (
        <li key={index}>
          {/* <span className="float-left mr-1">
            {index + 1}
            {")"}
          </span> */}
          <h3 className="font-medium float-left mr-1">{item.heading} : </h3>
          <p className="text-gray-600 text-justify">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

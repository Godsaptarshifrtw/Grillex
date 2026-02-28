"use client";

import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { ICollapseMenu } from "@/app/types";

interface IProps {
  elementheadingcolor?: string;
  elementbg?: string;
  spacebetween?: string;
  collapsemenudata: ICollapseMenu[];
}

export default function CollapseMenu({
  collapsemenudata,
  elementheadingcolor,
  elementbg,
  spacebetween,
}: IProps) {
  const [current, setCurrent] = useState(-1);

  const onAnyItemClick = (curretnIndex: number) => {
    setCurrent((prestate) => {
      if (prestate === curretnIndex) return -1;
      return curretnIndex;
    });
  };
  return (
    <div className={`${spacebetween || "space-y-7"}`}>
      {collapsemenudata.map((item, index) => (
        <div key={index} className={`overflow-hidden`}>
          <div
            onClick={() => onAnyItemClick(index)}
            className={`w-full cursor-pointer relative px-3 py-4 ${
              elementbg || "bg-[#444444]"
            } flex items-center gap-5 text-white font-semibold tracking-[0.1em]`}
          >
            {current === index ? (
              <FaMinus className={elementheadingcolor || ""} size={20} />
            ) : (
              <IoMdAdd className={elementheadingcolor || ""} size={20} />
            )}
            <span className={elementheadingcolor || ""}>{item.question}</span>
            <div
              className={`h-[2px] bg-[#FFB426] absolute bottom-0 left-0 ${
                current === index ? "w-full" : "w-0"
              } transition-all duration-500 ease-linear`}
            ></div>
          </div>

          <div
            className={`w-full ${
              current === index ? "max-h-[250px] pt-5" : "max-h-0"
            } transition-all duration-500`}
          >
            <p className="font-reg text-[#6F6F6F] font-semibold text-[15px] tracking-widest">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

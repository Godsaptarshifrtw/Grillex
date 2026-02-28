"use client";

import React from "react";
import { ITabItem } from "../types";
import { encodeUrl } from "@/utils/cleanUrl";
import IsItLink from "@/utils/IsItLink";

interface IProps {
  isLink?: boolean;
  tablist: ITabItem[];
  currentTabIndex: number;
  setCurrentTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function VTabMenu({
  isLink,
  tablist,
  currentTabIndex,
  setCurrentTabIndex,
}: IProps) {
  return (
    <ul className="w-full">
      {tablist.map((item, index) => (
        <li key={index}>
          <IsItLink  className="border-b-[1.5px] py-5 block relative group/tabitem cursor-pointer text-sm" onCLick={() => setCurrentTabIndex(index)} link={isLink ? item.path : undefined}>
            <span className="font-[400] tracking-widest text-gray-700">
              {item.name}
            </span>
            <div
              className={`${
                currentTabIndex === index ? "w-20" : "w-0"
              } h-[0.15rem] group-hover/tabitem:w-full transition-all duration-300 absolute -bottom-[1px] bg-[#FFB426]`}
            ></div>
          </IsItLink>
          {/* <Link
            href={isLink ? encodeUrl(item.name) : "#"}
            onClick={() => setCurrentTabIndex(index)}
            className="border-b-[1.5px] py-5 block relative group/tabitem cursor-pointer text-sm"
          >
            <span className="font-[400] tracking-widest text-gray-700">
              {item.name}
            </span>
            <div
              className={`${
                currentTabIndex === index ? "w-20" : "w-0"
              } h-[0.15rem] group-hover/tabitem:w-full transition-all duration-300 absolute -bottom-[1px] bg-[#FFB426]`}
            ></div>
          </Link> */}
        </li>
      ))}
    </ul>
  );
}

import Image from "next/image";
import React from "react";
import { IBlogInfo } from "../types";
import Link from "next/link";

interface IProps {
  className?: string;
  blogInfo: IBlogInfo;
  currentIndex: number;
  isRelatedblog?: boolean;
}

export default function BlogItem({
  blogInfo,
  currentIndex,
  isRelatedblog,
  className,
}: IProps) {
  return (
    <li
      className={`${
        currentIndex === 0
          ? "row-span-2 col-span-2 sm:row-span-1 sm:col-span-1"
          : ""
      } overflow-hidden`}
    >
      <Link
        href={blogInfo.link}
        className={`w-full overflow-hidden block relative ${
          isRelatedblog ? "h-auto" : "h-full"
        } group/blogitem`}
      >
        <Image
          className="size-full object-cover"
          src={blogInfo.image}
          alt={blogInfo.altTag ?? "Blog Demo"}
          height={1200}
          width={1200}
        />
        <div
          className={`size-full absolute bg-[#00000093] drop-shadow-xl group-hover/blogitem:opacity-0 top-0 bottom-0 text-white flex flex-col justify-end px-6 py-3 ${
            isRelatedblog ? "px-3" : ""
          } transition-all duration-700`}
        >
          <h2
            className={`uppercase tracking-widest ${
              isRelatedblog ? "line-clamp-1" : ""
            }`}
          >
            {blogInfo.heading}
          </h2>
          <div className="w-36 h-[1px] bg-white mt-2"></div>
          <div
            className={`w-full flex justify-between items-center ${
              isRelatedblog ? "mt-2" : ""
            } tracking-widest text-xs`}
          >
            <p>{blogInfo.by}</p>
            <p className={`${isRelatedblog ? "" : "px-3 py-1 bg-blue-700"}`}>
              {blogInfo.date}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

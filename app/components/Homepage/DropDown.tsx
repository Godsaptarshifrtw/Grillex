"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface IProps {
  children: React.ReactNode;
}

export default function DropDown({ children }: IProps) {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <section className="w-full flex items-center flex-col justify-center py-20 container-layout">
      <div
        onClick={() => setIsCollapse(!isCollapse)}
        className="flex-center gap-6 cursor-pointer"
      >
        <h2 className="font-semibold tracking-widest text-2xl">
          READ MORE ABOUT OUR PRODUCTS DETAILS
        </h2>
        <FaChevronDown
          className={`${
            isCollapse ? "rotate-180" : "rotate-0"
          } transition-all duration-300`}
        />
      </div>
      <div
        className={`${
          isCollapse ? "max-h-[1500px]" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-linear`}
      >
        {children}
      </div>
    </section>
  );
}

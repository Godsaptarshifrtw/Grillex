"use client";

import React, { useState } from "react";
import { nav_list } from "../constant";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setMobileNavVisibility } from "../redux/slice/mobilenavSlice";
import Link from "next/link";

const LinkOrNotLink = ({
  children,
  className,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  link?: string;
}) => {
  if (link) {
    return (
      <Link href={link} className={className}>
        {children}
      </Link>
    );
  }

  return <div className={className + " cursor-pointer"}>{children}</div>;
};

export default function MobileSlider() {
  const mobileNavVisibility = useSelector(
    (state: RootState) => state.mobilenav
  );
  const dispatch = useDispatch();
  const closeSlider = () => {
    dispatch(setMobileNavVisibility(false));
  };
  const [currentSubMenuIndex, setCurrentSubMenuIndex] = useState(-1);
  return (
    <aside
      onClick={closeSlider}
      className={`fixed min-h-full w-full top-[5rem] z-50 ${
        mobileNavVisibility ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-[80%] min-h-screen bg-white py-5 md:w-[80%] ${
          mobileNavVisibility ? "-translate-x-0" : "-translate-x-full"
        } transition-all duration-500`}
      >
        {nav_list.map((eachNavItem, parentIndex) => (
          <LinkOrNotLink
            key={parentIndex}
            link={!eachNavItem.submenu ? eachNavItem.path : undefined}
            className="group/mobilelistitem block"
          >
            <div
              onClick={() =>
                setCurrentSubMenuIndex(
                  parentIndex === currentSubMenuIndex ? -1 : parentIndex
                )
              }
              className="flex items-center justify-between px-5 py-3 hover:bg-[#B62E26] hover:text-white text-gray-800"
            >
              <h3 className="font-reg font-semibold text-[1rem]">
                {eachNavItem.name}
              </h3>
              {eachNavItem.submenu ? (
                <RiArrowDownSLine
                  className={`${
                    parentIndex === currentSubMenuIndex
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                  size={18}
                />
              ) : null}
            </div>
            {eachNavItem.submenu ? (
              <div>
                {eachNavItem.submenu.map((subMenu) => (
                  <Link
                    key={subMenu.name}
                    href={subMenu.path}
                    className={`text-[15px] px-8 block ${
                      currentSubMenuIndex === parentIndex
                        ? "max-h-full py-2"
                        : "max-h-0 overflow-hidden py-0"
                    } font-reg hover:bg-[#B62E26] hover:text-white`}
                  >
                    {subMenu.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            ) : null}
          </LinkOrNotLink>
        ))}
      </div>
    </aside>
  );
}

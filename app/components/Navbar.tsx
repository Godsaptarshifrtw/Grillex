"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { nav_list } from "../constant";
import MobileNavOpenBtn from "./MobileNavOpenBtn";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setNavBarHeight } from "../redux/slice/navHeightSlice";

export default function Navbar() {
  const currentPath = usePathname();
  const currentIndex = 0;

  const navBarHeight = useSelector((state : RootState) => state.navBarHeight);
  const dispatch = useDispatch();

  useEffect(() => {
    let lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          // Scrolling down
          // console.log("Scrolling down");
          dispatch(setNavBarHeight("-100%"));
      } else {
          // Scrolling up
          // console.log("Scrolling up");
          dispatch(setNavBarHeight("0%"));
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
      },
      false
    );
  }, []);
  return (
    <header style={{translate : `0% ${navBarHeight}`}} className="bg-gray-900 w-full max-w-[1400px] fixed h-20 z-40 flex items-center ts:h-20 transition-all duration-500">
      <div className="container-layout flex items-center gap-20">
        <Link href={"/"} className="block flex-grow">
          <Image
            className="w-56 ts:w-40 md:w-40"
            src="/grillex-logo.webp"
            alt=""
            height={1200}
            width={1200}
          />
        </Link>
        <nav className="text-[#fff] font-[600] flex items-center gap-10 ts:hidden md:hidden">
          {nav_list.map((item, index) => (
            <div
              key={index}
              className={`tracking-[0.2em] group/navitem relative text-[14px] hover:text-[#FFAE2B] ${
                currentPath === item.path ? "text-[#EF5A6F]" : "text-[#fff]"
              } transition-all duration-200`}
            >
              <Link href={item.path}>{item.name}</Link>
              {/* <p>{currentPath.includes(item.path)}</p> */}

              {item.submenu ? (
                <div className="absolute invisible translate-x-36 opacity-0 z-50 group-hover/navitem:visible group-hover/navitem:-translate-x-5 group-hover/navitem:opacity-100 transition-all duration-700 delay-75">
                  <div className={`w-72 bg-white mt-10`}>
                    {item.submenu.map((subitem, index) => (
                      <div
                        key={index}
                        className="uppercase text-gray-800 flex-center border-b"
                      >
                        <Link
                          href={subitem.path}
                          className={`w-full px-5 py-5 hover:bg-[#ffb32650]`}
                        >
                          {subitem.name}
                        </Link>
                      </div>
                    ))}
                    <div className="w-full h-2 bg-[#FFB426]"></div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="flex flex-col text-[#fff] font-[500] ts:hidden">
          <Link href={"tel:8336908118"}>+91{"  "}8336908118</Link>
          <Link
            className="text-[#a5a5a5]"
            href={"mailto:subrata.ash@gmail.com"}
          >
            subrata.ash@gmail.com
          </Link>
        </div>
        <MobileNavOpenBtn className="hidden ts:block md:block" />
      </div>
    </header>
  );
}

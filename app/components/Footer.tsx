import React from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { nav_list } from "../constant";
import ContactInfo from "@/app/components/ContactInfo";

export default function Footer() {
  return (
    <footer className="bg-[#ebe1be73]">
      <div className="w-full py-20  grid grid-cols-3 md:grid-cols-2 gap-16 px-20 text-[#111827] ts:px-5 ts:grid-cols-1 ts:h-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-4 bg-[#536493]"></div>
            <h3 className="tracking-widest font-medium text-2xl">ABOUT US</h3>
          </div>
          <p className="w-[16.5rem] mt-1 tracking-widest">
            Grillex is Kolkata’s premier destination for top-quality metal
            products.
          </p>
          <SocialLinks />
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-4 bg-[#536493]"></div>
            <h3 className="tracking-widest font-medium text-2xl">
              GET IN TOUCH
            </h3>
          </div>
          {/* <div>
          <p className="text-[#FFFFFF33] tracking-widest text-xs">
            CONTACT NUMBER
          </p>
          <Link href={"tel:8336908118"} className="tracking-[0.1em]">
            +91 98312 34910
          </Link>
        </div>
        <div>
          <p className="text-[#FFFFFF33] tracking-widest text-xs">ADDRESS</p>
          <p className="tracking-[0.1em]">
            Ashiana, AA-48, Near PNB, Salt Lake Sec – 1, Kolkata – 64
          </p>
        </div>
        <div>
          <p className="text-[#FFFFFF33] tracking-widest text-xs">
            EMAIL ADRESS
          </p>
          <Link
            href={"mailto:subrata.ash@gmail.com"}
            className="tracking-[0.1em]"
          >
            subrata.ash@gmail.com
          </Link>
        </div> */}
          <ContactInfo />
        </div>

        <div className="space-y-9">
          <div className="flex items-center gap-3">
            <div className="size-4 bg-[#536493]"></div>
            <h3 className="tracking-widest font-medium text-2xl">
              USEFUL LINKS
            </h3>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
          {nav_list.map((navItem) => (
            <Link key={navItem.path} href={navItem.path}>{navItem.name}</Link>
          ))}
        </div> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Link
                className="block"
                href={nav_list[0].path}
                key={nav_list[0].path}
              >
                {nav_list[0].name}
              </Link>
              <Link
                className="block"
                href={nav_list[2].path}
                key={nav_list[2].path}
              >
                {nav_list[2].name}
              </Link>
              <Link
                className="block"
                href={nav_list[3].path}
                key={nav_list[3].path}
              >
                {nav_list[3].name}
              </Link>
            </div>
            <div className="space-y-2">
              <p>Products</p>
              {nav_list[1].submenu?.map((subMenuItem) => (
                <Link
                  className="text-sm block text-[#EF5A6F] hover:underline"
                  key={subMenuItem.path}
                  href={subMenuItem.path}
                >
                  {subMenuItem.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="block text-center text-sm border-t py-5">
        Digital Partner :
        <Link
          href={"https://ommdigitalsolution.com/"}
          className="underline pl-1 font-semibold"
        >
          OMM DIGITAL SOLUTION PVT. LTD.
        </Link>
      </span>
    </footer>
  );
}

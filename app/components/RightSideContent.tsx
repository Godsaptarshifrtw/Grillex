import React from "react";
import ServicesList from "../components/Services/ServicesList";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import { MdDownload, MdEmail, MdPhone } from "react-icons/md";
import Button from "../components/Button";

interface IProps {
  projectname: string;
}

export default function RightSideContent({ projectname }: IProps) {
  return (
    <div className="flex-grow basis-[20%] space-y-4 pl-16 ts:pl-0 md:pl-0">
      <h2 className="font-bold text-2xl tracking-wide">
        WHAT SERVICES WE OFFER
      </h2>
      <ServicesList productname={projectname} />
      <h2 className="font-bold text-2xl tracking-widest pt-10">OUR CONTACTS</h2>
      <div className="space-y-8">
        <div className="flex items-center">
          <div className="w-10">
            <IoLocationSharp size={20} color="#B62E26" />
          </div>
          <Link className="space-y-2" href={"tel:8336908118"}>
            <span className="block text-[#929292] tracking-widest text-xs">
              FREE CONSULTATION
            </span>
            <span className="text-[16px] font-semibold">+91 98312 34910</span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="w-[75px] md:w-[43px]">
            <MdPhone size={20} color="#B62E26" />
          </div>
          <div>
            <span className="block text-[#929292] tracking-widest text-xs">
              ADDRESS
            </span>
            <span className="text-[16px] font-semibold">
              Ashiana, AA-48, Near PNB, Salt Lake Sec – 1, Kolkata – 64
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-10">
            <MdEmail size={20} color="#B62E26" />
          </div>
          <Link className="space-y-2" href={"mailto:subrata.ash@gmail.com"}>
            <span className="block text-[#929292] tracking-widest text-xs">
              EMAIL ADDRESS
            </span>
            <span className="text-[16px] font-semibold">
              subrata.ash@gmail.com
            </span>
          </Link>
        </div>
      </div>

      <h2 className="font-bold text-2xl tracking-widest pt-10">OUR BROCHURE</h2>

      <Link className="block" href={"/Invisible-grill.pdf"}>
        <Button className="flex-center w-full gap-3">
          <MdDownload size={18} className="mt-1" />
          <span>Download</span>
        </Button>
      </Link>
    </div>
  );
}

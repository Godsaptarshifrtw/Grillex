import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiMessage3Fill } from "react-icons/ri";
import OpenPopupDialogBtn from "./OpenPopupDialogBtn";

export default function FloatingBtn() {
  return (
    <div className="fixed bottom-10 right-10 z-50 space-y-3 ts:right-4 md:right-2 md:bottom-3">
      <Link
        href={
          "https://api.whatsapp.com/send/?phone=%2B918336908118&text&type=phone_number&app_absent=0"
        }
        className="bg-[#EF5A6F] relative active:scale-95 text-white size-10 flex-center transition-all duration-200"
      >
        <IoLogoWhatsapp />
        <div className="h-[5px] w-full bg-[#D83046] absolute bottom-0"></div>
      </Link>
      <Link
        href={"tel:8336908118"}
        className="bg-[#EF5A6F] relative active:scale-95 text-white size-10 flex-center transition-all duration-200"
      >
        <IoMdCall />
        <div className="h-[5px] w-full bg-[#D83046] absolute bottom-0"></div>
      </Link>
      <OpenPopupDialogBtn className="bg-[#EF5A6F] relative active:scale-95 text-white size-10 flex-center transition-all duration-200">
        <RiMessage3Fill />
        <div className="h-[5px] w-full bg-[#D83046] absolute bottom-0"></div>
      </OpenPopupDialogBtn>
    </div>
  );
}

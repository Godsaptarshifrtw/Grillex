import Image from "next/image";
import React from "react";

export default function PageBanner({title} : { title : string }) {
  return (
    <section className="h-72 w-full relative overflow-hidden ts:h-96">
      <div className="size-full absolute z-10 bg-[#00000070]  flex flex-col items-center justify-center space-y-10 ts:mt-10">
        <h1 className="text-4xl text-center text-white font-semibold uppercase tracking-[0.2em]">
          {title}
        </h1>
        <div className="w-20 mr-2 h-1 bg-white"></div>
      </div>
      <Image
        className="size-full object-cover"
        src={"/about/about-banner.jpg"}
        alt="banner background"
        height={1200}
        width={1200}
      />
    </section>
  );
}

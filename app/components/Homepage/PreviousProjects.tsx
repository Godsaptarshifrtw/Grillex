import Image from "next/image";
import React from "react";

export default function PreviousProjects() {
  return (
    <section className="w-full h-96 overflow-hidden flex-center relative ts:flex-col ts:h-[500px]">
      <Image
        className="size-full"
        src="/banner1.jpg"
        alt=""
        sizes="(max-width: 639px) 100vw, 100vw"
        height={1200}
        width={1200}
      />
      {/* <ul className="flex items-center gap-6 absolute w-full top-0 bottom-0 flex-wrap ts:gap-x-5 ts:gap-y-0">
        {datas.map((item) => (
          <li key={item.text} className="flex-center flex-grow flex-col gap-5 group/item">
            <h2 className="text-8xl font-bold text-white group-hover/item:-translate-y-4 ts:text-5xl transition-all duration-300 font-reg tracking-wider">{item.num}</h2>
            <div className="w-[50%] h-[1.3px] bg-[#B62E26]"></div>
            <span className="text-white tracking-widest ts:text-xs">{item.text}</span>
          </li>
        ))}
      </ul> */}

      <div className="absolute w-[750px] md:w-[650px] top-0 bottom-0 flex items-center gap-20 ts:w-full ts:flex-col ts:gap-3 ts:px-10 ts:justify-center">
        {/* <div className="flex-grow"> */}
        <Image
          className="size-40"
          src={"/subrata-150x150.webp"}
          alt="Subrata 150"
          height={1200}
          width={1200}
        />
        {/* </div> */}
        <div className="relative">
          <p className="font-semibold text-xl text-white text-justify">
            Welcome to the world of innovation and quality at Grillex, we offer
            unrivaled products that redefine safety and style. Join us on this
            journey of excellence and experience the future of design.
          </p>
          <div className="absolute -bottom-10 right-0">
            <p className="text-end text-gray-300 font-semibold tracking-widest">
              Director Subrata Kundu
            </p>
            <div className="h-[1px] w-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

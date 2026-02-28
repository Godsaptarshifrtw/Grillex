import React from "react";
import Image from "next/image";
import Link from "next/link";

const products_info = [
  {
    title: "METAL RAILING",
    img: "/projects/metal_railing.webp",
    link: "/metal-railing",
  },
  {
    title: "METAL PARTITION",
    img: "/projects/metal_partition.webp",
    link: "/metal-partition",
  },
  {
    title: "METAL FURNITURE",
    img: "/projects/gal-furni-23.webp",
    link: "/metal-furniture",
  },
  {
    title: "PVD COATED GRILL",
    img: "/projects/pvd_coated_grill.webp",
    link: "/pvd-coated-grill",
  },
  {
    title: "INVISIBLE GRILL",
    img: "/projects/invisible-grill-1000x1000.webp",
    link: "/invisible-grill",
  },
  {
    title: "AWNINGS & SCREENS",
    img: "/projects/retractable-awning.webp",
    link: "/awnings-screens",
  },
  {
    title: "EUROPEAN MOTORIZED PERGOLA",
    img: "/projects/pargola.webp",
    link: "/european-motorised-pergola",
  },
];

export default function OurProjects() {
  return (
    <section className="max-h-full h-full container-layout">
      <h2 className="font-semibold text-[1.75rem] uppercase tracking-widest">
        Our Products <span className="text-[#c2c5bf]">SINCE 2012</span>
      </h2>
      <div className="w-36 bg-yellow-500 h-[2px] "></div>
      <ul className="grid grid-cols-4 gap-4 mt-6 ts:grid-cols-1 md:grid-cols-2">
        {products_info.map((item, index) => (
          <li
            key={index}
            className={`w-full block
           ${index === 2 ? "col-span-2 row-span-2 ts:col-span-1" : ""} 
           ${index === 4 ? "row-span-2 ts:col-span-1" : ""} 
           ${index === 6 ? "grid-col-1-3 ts:col-span-1" : ""} 
           overflow-hidden h-full relative group/projectitem
           `}
          >
            <Link href={item.link}>
              <Image
                className="size-full object-cover -translate-y-12 group-hover/projectitem:translate-y-0 transition-all duration-300"
                src={item.img}
                alt={item.title.toLowerCase() + " image"}
                sizes="(max-width: 639px) 100vw, 100vw"
                height={1200}
                width={1200}
              />
              <div className="w-full translate-y-0 group-hover/projectitem:translate-y-full transition-all duration-300 h-auto bg-[#f3f3f3] absolute bottom-0 p-5 space-y-2">
                <h2 className="font-semibold tracking-widest text-xl">
                  {item.title}
                </h2>
                {/* <p className="text-[#b62e26] font-semibold tracking-widest">{item.subtitle}</p> */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

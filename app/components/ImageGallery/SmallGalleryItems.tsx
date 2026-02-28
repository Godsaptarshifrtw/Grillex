import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

interface IProps {
  projects_images: string[];
  selectedImgIndex: number;
  setSelectedImgIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function SmallGalleryItems({
  projects_images,
  selectedImgIndex,
  setSelectedImgIndex,
}: IProps) {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prestate) => {
      if (prestate === projects_images.length - 1) return 0;
      return prestate + 1;
    });
  };

  const goPrev = () => {
    setCurrent((prestate) => {
      if (prestate === 0) return projects_images.length - 1;
      return prestate - 1;
    });
  };
  return (
    <div className="relative w-full">
      {/* <div className=" h-full z-10 absolute top-0 flex-center left-0 bottom-0">
        <GrFormNextLink
          onClick={goPrev}
          size={24}
          className="text-white cursor-pointer rotate-180"
        />
      </div> */}
      <ul className="grid grid-cols-5 ts:grid-cols-3 mt-2 gap-5">
        {projects_images.map((src, index) => (
          <li
            key={src}
            onClick={() => setSelectedImgIndex(index)}
            className="relative cursor-pointer"
          >
            <div
              className={`${
                selectedImgIndex === index ? "bg-[#00000000]" : "bg-[#0000006c]"
              } absolute size-full top-0 bottom-0 left-0 right-0 transition-all duration-500`}
            ></div>
            <Image
              className="w-44 h-20"
              src={src}
              alt=""
              height={1200}
              width={1200}
            />
          </li>
        ))}
      </ul>
      {/* <div className=" h-full z-10 absolute top-0 flex-center right-0 bottom-0">
        <GrFormNextLink
          onClick={goNext}
          size={24}
          className="text-white cursor-pointer"
        />
      </div> */}
    </div>
  );
}

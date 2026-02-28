"use client";

import Image from "next/image";
import React, { useState } from "react";
import SmallGalleryItems from "./SmallGalleryItems";

interface IProps {
  projects_images : string[]
}

export default function ImageGallery({ projects_images } : IProps) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  return (
    <div>
      <div className="flex items-center flex-col h-[26rem] ts:h-[12rem] overflow-hidden">
        {projects_images.map((src, index) => (
          <div
            key={index}
            style={{ translate: `0 -${100 * selectedImgIndex}%` }}
            className={`flex-shrink-0 size-full transition-all duration-500`}
          >
            <Image
              className={`size-full object-cover`}
              src={src}
              alt=""
              height={1200}
              width={1200}
            />
          </div>
        ))}
      </div>
      <SmallGalleryItems
        projects_images={projects_images}
        selectedImgIndex={selectedImgIndex}
        setSelectedImgIndex={setSelectedImgIndex}
      />
    </div>
  );
}

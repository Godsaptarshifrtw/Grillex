"use client";

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

type TestimonialType = { id: number; username: string; message: string };

const testimonials: TestimonialType[] = [
  {
    id: 1,
    username: "Mr. D.V. Ramana Murty",
    message:
      "The invisible grills from Grillex provide peace of mind, securing my home without compromising its aesthetic appeal.",
  },
  {
    id: 2,
    username: "Mr. Dheeraj Kumar Paul",
    message:
      "Grillex’s metal partitions gave my office a sleek and modern look, enhancing privacy while maintaining an open atmosphere.",
  },
  {
    id: 3,
    username: "Mr. Mukhesh Chandra",
    message:
      "The metal furniture from Grillex elevated the aesthetics of my home, combining style and durability flawlessly.",
  },
  {
    id: 4,
    username: "Mr. Saatish Kumar",
    message:
      "Grillex’s invisible grills provide an unobstructed view from my balcony, offering safety without compromising the scenic beauty.",
  },
  {
    id: 5,
    username: "Mrs. Ruma Bhattacharya",
    message:
      "I am highly impressed with the impeccable craftsmanship exhibited in Grillex’s metal partitions, adding elegance to my restaurant’s interior.",
  },
  {
    id: 6,
    username: "Mr. Gopal Krishna Sarkar",
    message:
      "The metal furniture collection by Grillex transformed my outdoor space into a comfortable and trendy haven for relaxation.",
  },
  {
    id: 7,
    username: "Mr. K. Venkata Siva Prasad Rao",
    message:
      " Grillex’s metal partitions created a functional and organized workspace for my team, enhancing productivity and workflow.”",
  },
  {
    id: 8,
    username: "Mr. Indranil Deb & Family",
    message:
      "I am amazed at how seamlessly Grillex’s metal furniture blends with various design styles, adding a touch of sophistication to any setting.”",
  },
  {
    id: 9,
    username: "Ms. Aanchal Singh",
    message:
      "The invisible grills from Grillex not only protect my loved ones but also enhance the visual appeal of my residential space.",
  },
];

export default function Testimonials() {
  const [services_list, setServicesList] = useState<TestimonialType[][]>([]);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (window.innerWidth < 769) {
      const newList: TestimonialType[][] = [];
      testimonials.forEach((eachItem) => {
        newList.push([eachItem]);
      });
      setServicesList(newList);
    } else {
      const newList: TestimonialType[][] = [];
      let count = 0;
      testimonials.forEach((eachItem, index) => {
        if (!newList[count]) {
          newList[count] = [eachItem];
        } else {
          newList[count].push(eachItem);
        }
        if ((index + 1) % 3 === 0) {
          count++;
        }
      });
      setServicesList(newList);
    }
  }, []);

  const next = () => {
    setCurrent((prestate) => {
      if (prestate === services_list.length - 1) return 0;
      return prestate + 1;
    });
  };

  const prev = () => {
    setCurrent((prestate) => {
      if (prestate === 0) return services_list.length - 1;
      return prestate - 1;
    });
  };
  return (
    <section className="px-20 h-96 py-10 mt-10 ts:px-5 ts:h-auto">
      <div className="flex items-center flex-wrap">
        <div className="flex-grow">
          <h2 className="text-3xl text-[#313131] tracking-[0.2em] font-bold">
            TESTIMONIALS
          </h2>
          <p className="text-gray-400 tracking-widest text-sm mt-[1px]">
            People Say Nicest Things
          </p>
          <div className="w-36 bg-yellow-500 h-[2px] mt-2"></div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 ts:mt-5">
          <GrFormNextLink
            onClick={prev}
            size={28}
            className="rotate-180 cursor-pointer"
          />
          <div className="h-[15px] w-[1px] bg-gray-400 opacity-40"></div>
          <GrFormNextLink onClick={next} className="cursor-pointer" size={28} />
        </div>
      </div>
      <div className="flex overflow-hidden w-full mt-10">
        {services_list.map((eachArray, index) => (
          <ul
            key={index}
            style={{ translate: `-${current * 100}%` }}
            className="w-full flex items-center flex-shrink-0 justify-center gap-9 overflow-x-hidden transition-all duration-500"
          >
            {eachArray.map((info) => (
              <li key={info.id} className="w-96 h-52 relative transition-all duration-300">
                <div className="size-full bg-[#414141] absolute right-2 bottom-2 p-5">
                  <div className="flex gap-3 items-start">
                    <div className="size-12 bg-[#7e7d7d] rounded-full"></div>
                    <div className="space-y-1">
                      <h2 className="font-semibold text-gray-300 tracking-widest">
                        {info.username}
                      </h2>
                      <div className="flex gap-1 text-[#d3a95c]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-200 tracking-widest mt-3 text-sm">
                    {info.message}
                  </p>
                </div>
                <div className="size-full bg-[#555555]"></div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

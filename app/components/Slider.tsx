"use client";

import React, { useEffect, useState } from "react";

interface IProps<T> {
  list: T[];
  itemtoshow: number;
  // children: React.ReactNode;
}

export default function Slider<T>({ list }: IProps<T>) {
  const [modified_list, setModifiedList] = useState<T[][]>([]);

  useEffect(() => {
    if (window.innerWidth < 639) {
      const newList: T[][] = [];
      list.forEach((eachItem) => {
        newList.push([eachItem]);
      });
      // setModifiedList(newList);
    } else {
      const newList: T[][] = [];
      let count = 0;
      list.forEach((eachItem, index) => {
        if (!newList[count]) {
          newList[count] = [eachItem];
        } else {
          newList[count].push(eachItem);
        }
        if ((index + 1) % 3 === 0) {
          count++;
        }
      });
      // setModifiedList(newList);
    }
  }, []);

  return <div></div>;
}

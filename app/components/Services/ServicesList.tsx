"use client";

import React, { useState } from "react";
import VTabMenu from "../VTabMenu";
import { ITabItem } from "../../types";
import { nav_list } from "@/app/constant";

const serviceslist: ITabItem[] = nav_list[1].submenu as ITabItem[];

interface IProps {
  productname : string;
}

export default function ServicesList({productname} : IProps) {
  const index = nav_list[1].submenu?.findIndex((item) => item.path === `/${productname}`);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(index || 0);

  return (
    <VTabMenu
      isLink = {true}
      tablist={serviceslist}
      currentTabIndex={currentTabIndex}
      setCurrentTabIndex={setCurrentTabIndex}
    />
  );
}

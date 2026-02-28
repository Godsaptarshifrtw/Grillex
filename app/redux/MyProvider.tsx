"use client";

import React from "react";
import MobileSlider from "../components/MobileSlider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "./store";
import FloatingBtn from "../components/FloatingBtn";
import PopupDialog from "../components/PopupDialog";
import OpenPopupAfter10Sec from "../components/OpenPopupAfter10Sec";

interface IPorps {
  children: React.ReactNode;
}

export default function MyProvider({ children }: IPorps) {
  return (
    <Provider store={store}>
      <OpenPopupAfter10Sec />
      <FloatingBtn />
      <PopupDialog />
      <MobileSlider />
      <Navbar />
      <div className="pt-20 ts:pt-3">{children}</div>
      <Footer />
    </Provider>
  );
}

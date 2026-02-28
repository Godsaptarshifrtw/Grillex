"use client";

import React from "react";
import ContactPageForm from "./Contact/ContactPageForm";
import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setPopupDialogVisibility } from "../redux/slice/popupDialogSlice";
import { RootState } from "../redux/store";

export default function PopupDialog() {
  const dispatch = useDispatch();
  const popupDialogVisibility = useSelector((state : RootState) => state.popupdialog)

  const closeDialog = () => {
    dispatch(setPopupDialogVisibility(false))
  }
  return (
    <div onClick={closeDialog} className={`w-full fixed size-full bg-[#0000008e] z-50 ${popupDialogVisibility ? "flex-center" : "hidden"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`w-[35rem] ts:w-full ts:mx-3 h-auto relative bg-gray-100 px-12 py-4 pt-10 rounded-3xl ts:px-5`}>
        <h2 className="font-bold text-2xl text-gray-600">Contact us</h2>
        <p className="text-gray-500 mb-4 text-sm">
          Email, call or complete the form and we will contact you as soon as
          possible.
        </p>
        <ContactPageForm />
        <RiCloseLargeFill onClick={closeDialog} className="absolute top-8 right-8 cursor-pointer active:scale-[.85] transition-all duration-500" />
      </div>
    </div>
  );
}

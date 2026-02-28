"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setPopupDialogVisibility } from "../redux/slice/popupDialogSlice";

type BtnType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function OpenPopupDialogBtn(props: BtnType) {
  const dispatch = useDispatch();
  const openDialog = () => {
    dispatch(setPopupDialogVisibility(true));
  };
  return (
    <button onClick={openDialog} {...props} className={props.className}>
      {props.children}
    </button>
  );
}

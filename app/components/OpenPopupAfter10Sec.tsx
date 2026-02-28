"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPopupDialogVisibility } from "../redux/slice/popupDialogSlice";

export default function OpenPopupAfter10Sec() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      dispatch(setPopupDialogVisibility(true));
      clearTimeout(timeoutID);
    }, 10 * 1000);

    return () => clearTimeout(timeoutID);
  }, []);

  return <></>;
}

"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMobileNavVisibility } from "../redux/slice/mobilenavSlice";
import { MdOutlineMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { RootState } from "../redux/store";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export default function MobileNavOpenBtn(props: IProps) {
  const mobileNavVisibility = useSelector(
    (state: RootState) => state.mobilenav
  );
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(setMobileNavVisibility(mobileNavVisibility ? false : true));
  };
//   const closeSlider = () => {
//     dispatch(setMobileNavVisibility(false));
//   }
  return (
    <button onClick={onButtonClick} {...props}>
      {mobileNavVisibility ? (
        <TfiClose color="#fff" size={20} />
      ) : (
        <MdOutlineMenu color="#fff" size={30} />
      )}
    </button>
  );
}

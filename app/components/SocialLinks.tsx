import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io";

const socialIcons = [
  { icon: <IoLogoFacebook />, link: "https://www.facebook.com/grillex.in" },
  { icon: <FaTwitter />, link: "https://x.com/Grillex5" },
  { icon: <ImInstagram />, link: "https://www.instagram.com/grillex_in/" },
];

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function SocialLinks(props: IProps) {
  return (
    <div className="flex gap-3" {...props}>
      {socialIcons.map((iconInfo) => (
        <div
          key={iconInfo.link}
          className="size-8 hover:bg-yellow-600 transition-all duration-300 bg-[#EF5A6F] flex-center text-white"
        >
          <Link href={iconInfo.link}>{iconInfo.icon}</Link>
        </div>
      ))}
    </div>
  );
}

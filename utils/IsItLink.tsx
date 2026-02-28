import Link from "next/link";
import React from "react";

interface IPorps {
  link?: string;
  children: React.ReactNode;
  onCLick?: () => void;
  className?: string;
}

export default function IsItLink({
  link,
  children,
  onCLick,
  className,
}: IPorps) {
  return (
    <>
      {link ? (
        <Link className={`block ${className}`} href={link}>
          {children}
        </Link>
      ) : (
        <span onClick={onCLick} className={`block ${className}`}>
          {children}
        </span>
      )}
    </>
  );
}

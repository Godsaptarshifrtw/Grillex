import Link from "next/link";
import React from "react";

//[#FFFFFF33]

export default function ContextInfo() {
  return (
    <>
      <div>
        <p className="text-[#858484] tracking-widest text-xs">
          CONTACT NUMBER
        </p>
        <Link href={"tel:8336908118"} className="tracking-[0.1em]">
          +91 98312 34910
        </Link>
      </div>
      <div>
        <p className="text-[#858484] tracking-widest text-xs">ADDRESS</p>
        <p className="tracking-[0.1em]">
          Ashiana, AA-48, Near PNB, Salt Lake Sec – 1, Kolkata – 64
        </p>
      </div>
      <div>
        <p className="text-[#858484] tracking-widest text-xs">EMAIL ADRESS</p>
        <Link
          href={"mailto:subrata.ash@gmail.com"}
          className="tracking-[0.1em]"
        >
          subrata.ash@gmail.com
        </Link>
      </div>
    </>
  );
}

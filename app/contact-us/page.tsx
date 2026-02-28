import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import ContactPageForm from "../components/Contact/ContactPageForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact us for best metal products in Kolkata | Grillex", 
  description:
    "Contact Grillex for top-notch invisible grills, metal furniture, metal products, and more in Kolkata. Upgrade your safety today!",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function page() {
  return (
    <main className="w-full min-h-96 relative h-full">
      <div className="container-layout grid grid-cols-2 ts:grid-cols-1 md:grid-cols-1">
        <section className="w-full space-y-5 py-10 pr-20 ts:pr-0 ts:pt-32 md:pr-0 md:pb-0 md:pt-10">
          <h1 className="font-semibold tracking-widest">Contact Us</h1>
          <h2 className="text-5xl text-gray-700 font-bold">
            Get In Touch Today
          </h2>
          <p className="font-semibold tracking-widest text-gray-600">
            Send us a message and we will get your question answered as soon as
            possible
          </p>

          <ContactPageForm />
        </section>
        <section className="flex absolute ts:relative md:relative w-[40rem] md:w-full rounded-l-full md:rounded-none top-0 bottom-0 right-0 items-center justify-center bg-[#313131] ts:bg-transparent ts:h-full ts:pb-10 md:bg-transparent md:justify-start md:h-full md:pb-10">
          <div className="space-y-8">
            <div className="flex items-center flex-grow">
              <div className="w-10 text-[#e0e0e0] md:text-gray-900 ts:md:text-gray-900">
                <MdPhone size={20} />
              </div>
              <Link
                className="space-y-2 text-[#e0e0e0] md:text-gray-900 ts:md:text-gray-900"
                href={"tel:98312 34910"}
              >
                <span className="block tracking-widest text-xs">
                  FREE CONSULTATION
                </span>
                <span className="text-[16px]">+91 98312 34910</span>
              </Link>
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-[40px] text-[#e0e0e0] md:text-gray-900 ts:md:text-gray-900">
                <IoLocationSharp size={20} />
              </div>
              <Link
                className="space-y-2 text-[#e0e0e0] md:text-gray-900 ts:md:text-gray-900"
                href={"#"}
              >
                <span className="block tracking-widest text-xs">ADDRESS</span>
                <span className="text-[16px]">
                  Ashiana, AA-48, Near PNB, Salt Lake Sec – 1, Kolkata – 64
                </span>
              </Link>
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-10 text-[#e0e0e0] md:text-gray-900 ts:md:text-gray-900">
                <MdEmail size={20} />
              </div>
              <Link
                className="space-y-2 text-[#e0e0e0] md:text-gray-900 ts:md:text-gray-900"
                href={"mailto:subrata.ash@gmail.com"}
              >
                <span className="block tracking-widest text-xs">
                  EMAIL ADRESS
                </span>
                <span className="text-[16px]">subrata.ash@gmail.com</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

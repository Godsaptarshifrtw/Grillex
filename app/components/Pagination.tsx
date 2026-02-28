"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IProps {
  totalPage: number | undefined;
  page: number;
  onPageChange?: (page: number) => void;
  onPageClickChangeSearchParams?: boolean;
  searchParamsName?: string;
  scrollOnLinkClick?: boolean;
}

const MAX_PAGE = 5;
export default function Pagination({
  page,
  totalPage = -1,
  onPageClickChangeSearchParams = false,
  searchParamsName = "page",
  scrollOnLinkClick = false,
  onPageChange,
}: IProps) {
  const [array, setArray] = useState<number[]>([]);
  const [currentSelectedPage, setCurrentSelectedPage] = useState(page);
  const route = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    setArray(() => {
      if (totalPage >= MAX_PAGE) return [1, 2, 3, 4, 5];
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    });
  }, [totalPage]);

  const handleNextBtn = () => {
    setArray((prev) => prev.map((item) => item + 1));
  };

  const handlePrevBtn = () => {
    setArray((prev) => prev.map((item) => item - 1));
  };

  const handlePageClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    page: number
  ) => {
    onPageChange?.(page);
    if (onPageClickChangeSearchParams) {
      event.preventDefault();
      setCurrentSelectedPage(page);
      route.push(href, { scroll: scrollOnLinkClick });
    }
  };

  return (
    <div key={page} className="flex items-center justify-between">
      <button
        disabled={array[0] === 1 || page === 1}
        onClick={handlePrevBtn}
        className={`flex items-center gap-2.5 px-3 ${
          array[0] === 1
            ? "opacity-30 !cursor-not-allowed"
            : "hover:bg-[#ffd2308c] !cursor-pointer"
        }`}
      >
        {/* <Image
          className="-rotate-90"
          src={"/icons/back_btn.svg"}
          alt="Back Btn Icons"
          height={40}
          width={40}
        /> */}
        <span className="font-semibold text-sm">Previous</span>
      </button>

      <ul className="flex items-center gap-2.5 max-sm:hidden">
        {array.map((item) => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set(searchParamsName, item.toString());
          const linkToRedirect = `${pathname}?${newSearchParams.toString()}`;
          return (
            <li key={item}>
              <Link
                scroll={scrollOnLinkClick}
                href={linkToRedirect}
                onClick={(e) => handlePageClick(e, linkToRedirect, item)}
                className={`size-10 hover:opacity-75 flex items-center justify-center cursor-pointer rounded-[50%] text-sm ${
                  item === page
                    ? "bg-[#ef5a6f] text-white"
                    : "hover:border border-accent"
                }`}
              >
                {/* {isPending && item === currentSelectedPage ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="animate-spin text-black lucide lucide-loader-circle-icon lucide-loader-circle"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                ) : (
                  item
                )} */}
                {item}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        disabled={
          array[MAX_PAGE - 1] === undefined || array[MAX_PAGE - 1] >= totalPage
        }
        onClick={handleNextBtn}
        className={`flex items-center gap-2.5 px-3 ${
          array[MAX_PAGE - 1] === undefined || array[MAX_PAGE - 1] >= totalPage
            ? "opacity-30 !cursor-not-allowed"
            : "hover:bg-[#ffd2308c] !cursor-pointer"
        }`}
      >
        <span className="font-semibold text-sm">Next</span>
        {/* <Image
          className="rotate-90"
          src={"/icons/back_btn.svg"}
          alt="Back Btn Icons"
          height={40}
          width={40}
        /> */}
      </button>
    </div>
  );
}

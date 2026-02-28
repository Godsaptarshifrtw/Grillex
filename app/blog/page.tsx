import React from "react";
import BlogListView from "./BlogListView";

interface IProps {
  searchParams: { page?: string };
}

export default function page({ searchParams }: IProps) {
  return (
    <section className="w-full container-layout space-y-10 py-10 ts:pt-24">
      <div>
        <h1 className="text-center font-bold text-5xl tracking-widest">
          <span className="text-[#56BCC7]">Our</span>
          <span className="text-gray-700"> Blogs</span>
        </h1>
      </div>
      <React.Suspense
        fallback={
          <div className="py-16 text-center">
            <span className="text-sm text-gray-500 flex items-center gap-y-3 flex-col">
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
                className="animate-spin lucide lucide-loader-circle-icon lucide-loader-circle"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Loading Blogs...
            </span>
          </div>
        }
      >
        <BlogListView searchParams={searchParams} />
      </React.Suspense>
    </section>
  );
}

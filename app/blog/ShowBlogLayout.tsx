import Image from "next/image";
import React from "react";
import BlogItem from "./BlogItem";
import { blogData } from "./blogData";

interface IProps {
  children: React.ReactNode;
  index: number;
}

export default function ShowBlogLayout({ children, index }: IProps) {
  const relatedBlogs = blogData.filter(
    (blogInfo) =>
      blogData[index].tags === blogInfo.tags &&
      blogData[index].link !== blogInfo.link
  );
  return (
    <section className="w-full container-layout py-10 ts:pt-20">
      <div className="grid grid-cols-4 ts:grid-cols-1">
        <div className="space-y-6 col-span-3">
          <div
            className={`w-full overflow-hidden relative aspect-video ts:h-[15rem] group/blogitem`}
          >
            <Image
              className="size-full object-cover"
              src={blogData[index].image}
              alt={blogData[index].altTag ?? "Grillex Image"}
              height={1200}
              width={1200}
            />
            <div className="size-full absolute bg-[#00000093] group-hover/blogitem:opacity-0 top-0 bottom-0 text-white flex items-end justify-between px-6 py-3 transition-all duration-700">
              <p className="tracking-widest">{blogData[index].by}</p>
              <p className="px-3 py-1 bg-blue-700 flex-grow-0">
                {blogData[index].date}
              </p>
            </div>
          </div>

          <h1 className="uppercase font-bold tracking-widest text-3xl text-gray-700 leading-10">
            {blogData[index].heading}
          </h1>

          <div className="size-full space-y-3">{children}</div>
        </div>
        <div className="w-full px-5 space-y-5">
          <h2 className="font-semibold text-2xl tracking-widest text-gray-700">
            Related Blogs
          </h2>

          {relatedBlogs.length === 0 ? (
            <p className="text-sm text-gray-500 text-center tracking-widest">
              No Related blog available
            </p>
          ) : (
            <ul className="space-y-5">
              {relatedBlogs.map((blog, currentIndex) => (
                <BlogItem
                  key={blog.id}
                  isRelatedblog={true}
                  blogInfo={blog}
                  currentIndex={currentIndex}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

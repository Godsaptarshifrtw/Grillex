import React, { cache } from "react";
import { wordpressApi } from "@/lib/wordpressApi";
// import { IBlogSearchParams } from "../types";
import { Metadata } from "next";
import Image from "next/image";
import "@/app/blog_content.css";

interface ISingleBlogPost {
  id: number;
  title: string;
  slug: string;
  content: {
    rendered: string;
  };
  date: string;
  thumbnail: string | null;
  categories: number[];
  altTag?:string;
  tags: string[];
  rankmath_meta: {
    focus_keyword: string;
    seo_title: string;
    seo_description: string;
    canonical_url: string;
    robots_meta: string[];
    advanced_robots: string;
    og_title: string;
    og_description: string;
    og_image: string;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string;
    breadcrumb_title: string;
    pillar_content: string;
    cornerstone_content: string;
    meta_keywords: string;
  };
}

const getSingleBlogInfo = cache(async (slug: string) => {
  const api = await wordpressApi();
  return (
    await api.get<ISingleBlogPost>(`/wp-json/custom/grillex/v1/posts/${slug}`)
  ).data;
});

interface IProps {
  params: Promise<{ slug: string }>;
  //   searchParams: Promise<IBlogSearchParams>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ["slug"]: string }>;
}): Promise<Metadata> {
  const blogSlug = (await params)["slug"];
  const categoryPageInfo = await getSingleBlogInfo(blogSlug);

  return {
    title: categoryPageInfo.rankmath_meta.seo_title,
    description: categoryPageInfo.rankmath_meta.seo_description,
    keywords: categoryPageInfo.rankmath_meta.meta_keywords,
    openGraph: {
      title: categoryPageInfo.rankmath_meta.og_title,
      description: categoryPageInfo.rankmath_meta.og_description,
      images: categoryPageInfo.rankmath_meta.og_image,
      url: `/${blogSlug}`,
      type: "article",
      locale: "en_US",
      siteName: "Grillex",
    },
  };
}

export default async function page({ params }: IProps) {
  const { slug } = await params;
  const singleBlog = await getSingleBlogInfo(slug);

  return (
    <section className="w-full container-layout py-10 ts:pt-20">
      <div className="space-y-6 col-span-4">
        <div
          className={`w-full overflow-hidden relative aspect-video ts:h-[15rem] group/blogitem`}
        >
          <Image
            className="size-full object-cover aspect-video"
            src={singleBlog.thumbnail ?? ""}
            alt={singleBlog.altTag ?? "Grillex Image"}
            height={1200}
            width={1200}
          />
          <div className="size-full absolute bg-[#00000093] group-hover/blogitem:opacity-0 top-0 bottom-0 text-white flex items-end justify-between px-6 py-3 transition-all duration-700">
            <p className="tracking-widest">Grillex</p>
            <p className="px-3 py-1 bg-blue-700 flex-grow-0">
              {singleBlog.date}
            </p>
          </div>
        </div>

        <h1 className="uppercase font-bold tracking-widest text-3xl text-gray-700 leading-10">
          {singleBlog.title}
        </h1>

        <div
          className="not-tailwind blog_content !font-normal"
          dangerouslySetInnerHTML={{ __html: singleBlog.content.rendered }}
        ></div>
      </div>
    </section>
  );
}

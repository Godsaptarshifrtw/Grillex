import { wordpressApi } from "@/lib/wordpressApi";
import BlogItem from "./BlogItem";
import Pagination from "../components/Pagination";
import { IBlogInfo } from "../types";
import { blogData } from "./blogData";

interface IProps {
  searchParams: { page?: string };
}

export default async function BlogListView({ searchParams } : IProps) {
  const api = await wordpressApi();
  const NUMBER_OF_BLOGS_SHOW = 12;

  const currentPage = parseInt(searchParams?.page || "1");
  const response = await api.get<IBlogInfo[]>(
    `/wp-json/custom/grillex/v1/posts?page=${currentPage}&per_page=12`
  );
  const blogList = response.data;
  const WORDPRESS_DATA_LENGTH = blogList.length;
  let WORDPRESS_TOTAL_PAGES = Number(response.headers["x-wp-totalpages"]);

  let totalPages = WORDPRESS_TOTAL_PAGES;

  if (WORDPRESS_DATA_LENGTH < NUMBER_OF_BLOGS_SHOW) {
    blogList.push(
      ...blogData
        .sort((a, b) => parseInt(b.id) - parseInt(a.id))
        .slice(
          Math.round(
            (currentPage - 1) * (NUMBER_OF_BLOGS_SHOW - WORDPRESS_DATA_LENGTH)
          ),
          currentPage * (NUMBER_OF_BLOGS_SHOW - WORDPRESS_DATA_LENGTH)
        )
    );

    totalPages =
      blogData.length / NUMBER_OF_BLOGS_SHOW +
      WORDPRESS_DATA_LENGTH / NUMBER_OF_BLOGS_SHOW;
  }
  return (
    <>
      <ul className="grid grid-cols-3 ts:grid-cols-1 gap-6 md:grid-cols-2">
        {blogList.map((blog, index) => (
          <BlogItem
            key={index}
            isRelatedblog={false}
            blogInfo={blog}
            currentIndex={index}
          />
        ))}
      </ul>
      <Pagination
        page={currentPage}
        totalPage={totalPages}
        scrollOnLinkClick={true}
      />
    </>
  );
}

import BlogItem from "./BlogItem";
import Pagination from "../components/Pagination";
import { getAllPosts } from "@/lib/blog";

interface IProps {
  searchParams: { page?: string };
}

export default function BlogListView({ searchParams }: IProps) {
  const NUMBER_OF_BLOGS_SHOW = 12;

  const currentPage = parseInt(searchParams?.page || "1");

  const allPosts = getAllPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalPages = Math.ceil(allPosts.length / NUMBER_OF_BLOGS_SHOW);

  const blogList = allPosts.slice(
    (currentPage - 1) * NUMBER_OF_BLOGS_SHOW,
    currentPage * NUMBER_OF_BLOGS_SHOW
  );

  return (
    <>
      <ul className="grid grid-cols-3 ts:grid-cols-1 gap-6 md:grid-cols-2">
        {blogList.map((blog, index) => (
          <BlogItem
            key={blog.slug}
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
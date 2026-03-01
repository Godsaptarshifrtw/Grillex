import { getAllPosts } from "@/lib/blog";

export async function fetchAllBlogSlugs(_source?: string): Promise<string[]> {
  const posts = getAllPosts();
  return posts.map((post) => post.slug);
}

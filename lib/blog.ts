import { blogData } from "@/app/blog/blogData";
import { IBlogInfo } from "@/app/types";

export interface BlogPost extends IBlogInfo {
  slug: string;
  title?: string;
  excerpt?: string;
  contentHtml?: string;
}

/**
 * Parse date strings like "13th Jun, 2024", "Apr 18, 2025", "May 5, 2025"
 */
function parseDate(dateStr: string): number {
  // Handle "13th Jun, 2024" format - remove ordinals (st, nd, rd, th)
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const parsed = new Date(cleaned);
  return isNaN(parsed.getTime()) ? 0 : parsed.getTime();
}

export function getAllPosts(): BlogPost[] {
  return blogData
    .map((blog) => ({
      ...blog,
      slug: blog.link.replace(/^\//, ""),
      title: blog.heading,
      excerpt: blog.heading,
      contentHtml: "",
    }))
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

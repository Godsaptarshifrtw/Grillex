import { getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import "@/app/blog_content.css";

interface IProps {
  params: { slug: string };
}

// Generate metadata (normal SEO)
export async function generateMetadata({
  params,
}: IProps): Promise<Metadata> {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default function BlogPost({ params }: IProps) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <section className="w-full container-layout py-10 ts:pt-20">
      <div className="space-y-6 col-span-4">

        {post.image && (
          <div className="w-full overflow-hidden relative aspect-video">
            <Image
              className="size-full object-cover"
              src={post.image}
              alt={post.title}
              height={1200}
              width={1200}
            />
          </div>
        )}

        <h1 className="uppercase font-bold tracking-widest text-3xl text-gray-700 leading-10">
          {post.title}
        </h1>

        <p className="text-gray-500">{post.date}</p>

        <div
          className="not-tailwind blog_content !font-normal"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </section>
  );
}
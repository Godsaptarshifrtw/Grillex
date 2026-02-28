import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { fetchAllBlogSlugs } from "@/lib/fetchAllBlogSlugs";

export const dynamic = "force-dynamic";

export async function GET() {
  // ✅ 1. Load your old static sitemap file
  const staticPath = path.join(process.cwd(), "public", "sitemap-static.xml");
  const staticXml = fs.readFileSync(staticPath, "utf8");

  // ✅ 2. Fetch dynamic data
  const slugs = await fetchAllBlogSlugs("Grillex");
  // ✅ 3. Generate dynamic XML
  const dynamicXml = slugs
    .map(
      (slug) => `
    <url>
      <loc>https://grillex.in/${slug}</loc>
    </url>`
    )
    .join("");

  // ✅ 4. Merge static XML + dynamic XML
  // NOTE: we strip `</urlset>` from static XML so we can append new URLs
  const mergedXml = staticXml.replace("</urlset>", `${dynamicXml}\n</urlset>`);

  return new NextResponse(mergedXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
      "Surrogate-Control": "no-store",
    },
  });
}

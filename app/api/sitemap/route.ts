import { Data } from "@/app/data";
import { NextResponse } from "next/server";

const BASE_URL = "https://totallynotisla.my.id";

export async function GET() {
    // Replace this with your actual project URLs (e.g., from a database)
    const dynamicUrls = Data.map((e) => `/projects/${e.detailHref}`);

    const staticUrls = ["/", "/projects"];

    const urls = [...staticUrls, ...dynamicUrls];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
        .map(
            (url) => `
      <url>
        <loc>${BASE_URL}${url}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${url === "/" ? "1.0" : "0.8"}</priority>
      </url>
    `
        )
        .join("")}
  </urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}

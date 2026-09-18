import { NextResponse } from "next/server";
import { getAllProjectIds } from "../../../data/projects";
import { getAllBlogSlugs } from "../../../data/posts";
import { getAllArtifactIds } from "../../../data/artifacts";

export async function POST() {
  try {
    const host = "ahlulfirdaus.com";
    const baseUrl = `https://${host}`;

    // Collect all active site URLs
    const projectUrls = getAllProjectIds().map((id) => `${baseUrl}/work/${id}`);
    const blogUrls = getAllBlogSlugs().map((slug) => `${baseUrl}/blog/${slug}`);
    const artifactUrls = getAllArtifactIds().map((id) => `${baseUrl}/artifacts/${id}`);

    const urlList = [
      `${baseUrl}/`,
      `${baseUrl}/blog`,
      `${baseUrl}/templates`,
      ...projectUrls,
      ...blogUrls,
      ...artifactUrls,
    ];

    // Optional API key from environment variable or header
    const indexNowKey = process.env.INDEXNOW_KEY || "af-systems-indexnow-key";

    const payload = {
      host: host,
      key: indexNowKey,
      keyLocation: `${baseUrl}/${indexNowKey}.txt`,
      urlList: urlList,
    };

    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      submittedUrlsCount: urlList.length,
      urls: urlList,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to ping IndexNow",
      },
      { status: 500 }
    );
  }
}

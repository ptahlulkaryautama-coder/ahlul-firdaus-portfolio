import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Google-Extended",
          "Amazonbot",
          "Bytespider",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://ahlulfirdaus.com/sitemap.xml",
  };
}

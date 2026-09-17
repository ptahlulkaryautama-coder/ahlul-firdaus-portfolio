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
          "Applebot-Extended",
          "Meta-ExternalAgent",
          "cohere-ai",
          "Diffbot",
          "FacebookBot",
          "omgili",
          "omgilibot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://ahlulfirdaus.com/sitemap.xml",
    host: "https://ahlulfirdaus.com",
  };
}

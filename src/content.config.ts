import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/news" }),
});
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/works" }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/events" }),
  schema: z.object({
    image: z
      .object({ url: z.string(), alt: z.string().optional() })
      .optional(),
    title: z.string(),
    description: z.string().optional(),
    from: z.coerce.date().optional(),
    to: z.coerce.date().optional(),
    location: z.string().optional(),
    url: z.string().optional(),
    tags: z.array(z.string()).optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/pages" }),
});

const config = defineCollection({
  loader: file("./src/contents/config/data.json"),
});

const home = defineCollection({
  loader: file("./src/contents/config/home.json"),
});

export const collections = { pages, news, works, events, config, home };

import { asset } from "@/lib/base-path";
import type { ArticleType } from "./article.model";
import { zArticlesSchema } from "./article.model";

export const fetchArticles = async (): Promise<ArticleType[]> => {
  const res = await fetch(asset("/articles-data/list.json"));

  if (!res.ok) throw new Error("Failed to fetch articles");

  const json = await res.json();

  const parsed = zArticlesSchema.safeParse(json);
  if (!parsed.success) {
    throw new Error("Invalid article data format");
  }

  return parsed.data;
};

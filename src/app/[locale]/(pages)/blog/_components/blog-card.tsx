"use client";

import { Skeleton } from "@/app/_components/ui/skeleton";
import { asset } from "@/lib/base-path";
import { fetchArticles } from "@/packages/action/articles/article.action";
import { LocaleLink as Link } from "@/app/_components/custom/locale-link";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";

export const BlogCard = () => {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  return (
    <>
      {articles?.map((article) => (
        <div
          key={article.slug}
          className="flex flex-col sm:flex-row bg-card rounded-lg overflow-hidden w-full max-w-3xl mx-auto shadow-md"
        >
          <div className="flex-shrink-0">
            <Image
              src={asset(isLoading ? "/images/blog-placeholder.avif" : article.image)}
              alt={article.title}
              width={200}
              height={200}
              className="w-full sm:w-44 h-44 object-cover"
            />
          </div>
          <div className="flex justify-center items-center p-4 text-center sm:text-left w-full">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isLoading ? (
                <Skeleton className="h-6 w-3/4" />
              ) : (
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-terracotta text-xl sm:text-2xl font-serif"
                >
                  {article.title}
                </Link>
              )}
            </motion.h1>
          </div>
        </div>
      ))}
    </>
  );
};

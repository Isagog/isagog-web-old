"use client";

import { SectionTitle } from "@/app/_components/custom/section-title";
import { LocaleLink as Link } from "@/app/_components/custom/locale-link";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { asset } from "@/lib/base-path";
import { fetchProjects } from "@/packages/action/projects/project.action";
import { useCurrentLocale, useScopedI18n } from "@/packages/locales/client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export const ProjectSection = () => {
  const locale = useCurrentLocale();
  const t = useScopedI18n("project-page");
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", locale],
    queryFn: () => fetchProjects(locale),
  });

  return (
    <div className="flex flex-col gap-4 min-h-[75vh]">
      {isLoading
        ? Array.from({ length: 2 }).map((_, idx) => (
            <Card
              key={idx}
              className="flex-col md:flex-row items-center w-[80%] mx-auto justify-between gap-8 mb-16 p-6"
            >
              <Skeleton className="w-full md:w-60 h-72 md:h-96" />
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <Skeleton className="h-6 w-3/4" />
                <div className="flex justify-between text-sm">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <div className="flex justify-between text-sm">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <div className="flex flex-col gap-4">
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </Card>
          ))
        : projects?.map((project) => (
            <Card
              key={project.slug}
              className="flex-col md:flex-row items-center w-[80%] mx-auto justify-between gap-8 mb-16 p-6"
            >
              <Image
                src={asset(project.image)}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full md:w-60 h-72 md:h-96 object-cover"
              />
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <SectionTitle as="h1" accent>
                  {project.title}
                </SectionTitle>
                <div className="flex justify-between font-sans text-sm text-sage">
                  <span>{project.valueName}</span>
                  <span>{project.value}</span>
                </div>
                <div className="flex justify-between font-sans text-sm text-sage">
                  <span>{project.name}</span>
                  <span>{project.sector}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <SectionTitle as="h2">{project.secondTitle}</SectionTitle>
                  <p className="text-sm font-sans">{project.description}</p>
                  <Link href={`/project/${project.slug}`}>
                    <Button className="cursor-pointer">
                      {t("discoverMore")}
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
    </div>
  );
};

import { asset } from "@/lib/base-path";
import type { ProjectType } from "./project.model";
import { zProjectsSchema } from "./project.model";

export const fetchProjects = async (
  locale: string
): Promise<ProjectType[]> => {
  const res = await fetch(asset(`/projects-data/list.${locale}.json`));

  if (!res.ok) throw new Error("Failed to fetch projects");

  const json = await res.json();

  const parsed = zProjectsSchema.safeParse(json);
  if (!parsed.success) {
    throw new Error("Invalid project data format");
  }

  return parsed.data;
};

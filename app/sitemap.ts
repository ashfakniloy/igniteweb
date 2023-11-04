import { MetadataRoute } from "next";
import { BASE_URL } from "@/config";
import { projectsData } from "@/data/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "about-us",
    "features",
    "our-work",
    "pricing",
    "contact-us",
  ];

  const staticPages = paths.map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date().toISOString(),
  }));

  const projectPages = projectsData.map((project) => ({
    url: `${BASE_URL}/our-work/${project.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages, ...projectPages];
}

import { MetadataRoute } from "next";
import { BASE_URL } from "@/config";
import { getBlogs } from "@/utils/getBlogs";
import { projectsData } from "@/data/projectsData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();

  const staticPaths = [
    "",
    "about-us",
    "features",
    "our-work",
    "pricing",
    "blog",
    "contact-us",
  ];

  const staticPages = staticPaths.map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date().toISOString(),
  }));

  const projectPages = projectsData.map((project) => ({
    url: `${BASE_URL}/our-work/${project.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const blogPages = blogs
    ? blogs.map((blog) => ({
        // url: `${BASE_URL}/blog/${encodeURIComponent(blog.slug)}`,
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: blog.updatedAt,
      }))
    : [];

  return [...staticPages, ...projectPages, ...blogPages];
}

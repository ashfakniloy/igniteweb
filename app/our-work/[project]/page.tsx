import { notFound } from "next/navigation";
import Project from "./Project";
import { projectsData } from "@/data/projectsData";
import { Metadata } from "next";

type ProjectPageProps = {
  params: {
    project: string;
  };
};

export const dynamic = "force-static";

const getProject = (slug: string) => {
  return projectsData.find((project) => project.slug == slug);
};

// export function generateStaticParams() {
//   const projectsSlug = projectsData.map((project) => ({
//     project: project.slug,
//   }));

//   return projectsSlug;
// }

export function generateMetadata({
  params: { project },
}: ProjectPageProps): Metadata {
  const singleProject = getProject(project);

  if (!singleProject) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: singleProject.name,
    openGraph: {
      images: {
        url: singleProject.imagesrc,
        width: 1200,
        height: 630,
        alt: singleProject.name,
      },
    },
    description: singleProject.description,
  };
}

function ProjectPage({ params: { project } }: ProjectPageProps) {
  const projectData = getProject(project);

  if (!projectData) {
    notFound();
  }

  return (
    <>
      <Project project={projectData} />
    </>
  );
}

export default ProjectPage;

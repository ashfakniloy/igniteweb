"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/Wrapper/Section";
import ProjectCard from "@/components/Cards/ProjectCard";
import { projectsData } from "@/data/projectsData";
import { AnimateFade } from "@/components/Animations";

const projectsTypes = ["All", "UI Design", "Webflow Design", "Figma Design"];

const getProjects = (selectedType: string) => {
  if (selectedType === "All") {
    return projectsData;
  } else {
    const filteredProjects = projectsData.filter(
      (project) => project.type === selectedType
    );

    return filteredProjects;
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Projects() {
  const [selectedType, setSelectedType] = useState(projectsTypes[0]);

  const projects = getProjects(selectedType);

  return (
    <Section className="lg:py-[96px] bg-white">
      <AnimateFade>
        <div className="flex justify-between sm:justify-center overflow-x-auto whitespace-nowrap gap-3 sm:gap-8 lg:text-lg font-medium pb-2 lg:pb-0">
          {projectsTypes.map((projectType) => (
            <button
              key={projectType}
              type="button"
              aria-label={`select ${projectType}`}
              onClick={() => setSelectedType(projectType)}
              className={`relative px-4 lg:px-5 py-2 transition-colors duration-300 rounded-full ${
                projectType === selectedType
                  ? "text-white"
                  : "active:bg-tint-blue/10 lg:hover:bg-tint-blue/10"
              }`}
            >
              {projectType === selectedType && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-tint-blue/80"
                  style={{ borderRadius: 9999 }}
                ></motion.div>
              )}

              <span className={`relative z-10`}>{projectType}</span>
            </button>
          ))}
        </div>
      </AnimateFade>

      <motion.div
        layout
        className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16"
      >
        <AnimatePresence>
          {projects.map((project, i) => (
            <motion.div
              layout
              key={project.name}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProjectCard
                name={project.name}
                description={project.description}
                imageSrc={project.imagesrc}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

export default Projects;

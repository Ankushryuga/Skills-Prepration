// const ExperienceTimeLine:React.FC=()=>{
//     return (
//         <div>
//             Experience Timeline;;;
//         </div>
//     )
// }

// export default ExperienceTimeLine;

import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "AI Chat Assistant",
    date: "Mar 2025",
    description: "Built an AI-based assistant using OpenAI’s GPT API that helps users write and summarize content.",
    technologies: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/yourusername/ai-chat-assistant",
    demo: "https://ai-chat-app.example.com",
  },
  {
    title: "E-commerce Backend",
    date: "Dec 2024",
    description: "Designed and developed a scalable e-commerce backend using Spring Boot and PostgreSQL with REST APIs.",
    technologies: ["Spring Boot", "PostgreSQL", "Docker", "Kafka"],
    github: "https://github.com/yourusername/ecommerce-backend",
  },
  {
    title: "Portfolio Website",
    date: "Sep 2024",
    description: "Personal developer portfolio showcasing skills, projects, and blog articles. Fully responsive and animated.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://ankush.dev",
  },
];

// 👁️ Hook to detect if element is in view
const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible] as const;
};

const ProjectsTimeline: React.FC = () => {
  return (
    <section className="px-4 sm:px-10 text-gray-800 dark:text-gray-100 max-w-5xl mx-auto pt-30">
      <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-400 mb-12 text-center">
        🚀 Projects Timeline
      </h2>

      {/* Timeline container */}
      <div className="relative border-l border-purple-300 dark:border-purple-600 pl-6">
        {projects.map((project, idx) => {
          const [ref, isVisible] = useInView({ threshold: 0.1 });

          return (
            <div
              ref={ref}
              key={idx}
              className={`mb-12 relative group transition-opacity duration-700 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300" />

              {/* Project card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.date}</p>
                <p className="text-base mb-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 dark:text-purple-400 hover:underline text-sm flex items-center gap-1"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 dark:text-purple-400 hover:underline text-sm flex items-center gap-1"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsTimeline;

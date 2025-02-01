import React from 'react';
import clsx from 'clsx';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Divvy",
      description: `
        A social and financial app that allows bill splitting and group budgeting. 
        Features include event creation and management for tracking expenses, user authentication,
        real-time updates, and a full messaging system.
      `,
      tech: ["React", "TypeScript", "Node", "Tailwind CSS", "Vite"],
      link: "https://github.com/kristong123/Divvy"
    },
    {
      title: "USInflated",
      description: "A personal portfolio website built with React, TypeScript, and Tailwind CSS. Features include responsive design, dark theme, and API integration.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://cse442.pages.cs.washington.edu/24au/fp/USInflated/"
    },
  ];

  return (
    <section 
      id="projects"
      className={clsx(
        // Base styles
        'section'
      )}
    >
      <div>
        <h1>Projects</h1>
      </div>
      <div 
        className={clsx(
          // Layout
          'flex flex-wrap',
          // Spacing
          'gap-6'
        )}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className={clsx(
              // Base styles  
              'bg-dark1 rounded shadow-default bubble',
              // Spacing
              'p-6',
              // Sizing
              'w-[30%]'
            )}
          >
            <h2 
              className={clsx(
                // Base styles
                'text-shadow-DEFAULT',
                // Typography
                'text-light2 text-2xl font-bold',
                // Effects
                'text-shadow',
                // Spacing
                'mb-4'
              )}
            >
              {project.title}
            </h2>
            <p 
              className={clsx(
                // Typography
                'text-white',
                // Effects
                'text-shadow',
                // Spacing
                'mb-4'
              )}
            >
              {project.description}
            </p>
            <div 
              className={clsx(
                // Layout
                'flex flex-wrap',
                // Spacing
                'gap-2 mb-4'
              )}
            >
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className={clsx(
                    // Base styles
                    'bg-dark2 rounded-full shadow',
                    // Typography
                    'text-light1 text-sm',
                    // Spacing
                    'px-3 py-1'
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                // Layout
                'inline-flex items-center',
                // Typography
                'text-light2',
                // Interactive
                'hover:text-light1',
                'transition-colors duration-300'
              )}
            >
              View Project 
              <svg 
                className={clsx(
                  // Sizing
                  'w-4 h-4',
                  // Spacing
                  'ml-2'
                )}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
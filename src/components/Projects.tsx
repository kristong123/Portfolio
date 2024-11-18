import React from 'react';
import clsx from 'clsx';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React, TypeScript, and Tailwind CSS. Features include responsive design, dark theme, and API integration.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://github.com/yourusername/portfolio"
    }
  ];

  return (
    <section 
      id="projects"
      className={clsx(
        // Base styles
        'section',
        // Layout
        'flex flex-col',
        // Sizing
        'h-fit w-[70%]',
        // Spacing
        'mb-8'
      )}
    >
      <div 
        className={clsx(
          // Layout
          'flex items-center',
          // Sizing
          'h-32'
        )}
      >
        <h1 
          className={clsx(
            // Typography
            'text-light2 text-4xl',
            // Spacing
            'my-12 mx-12',
            // Effects
            'text-shadow'
          )}
        >
          Projects
        </h1>
      </div>
      <div 
        className={clsx(
          // Layout
          'grid grid-cols-1 md:grid-cols-2',
          // Spacing
          'gap-6'
        )}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className={clsx(
              // Base styles  
              'bg-dark1 rounded shadow-default',
              // Spacing
              'p-6'
            )}
          >
            <h2 
              className={clsx(
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
                    // Visual
                    'bg-dark2 rounded-full',
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
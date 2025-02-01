import React from 'react';
import clsx from 'clsx';
import pgaIcon from '@images/pga.png';
import divvyIcon from '@images/divvy.png';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Paul G. Allen Scholars Teaching Assistant',
      img: pgaIcon,
      description: `
        Teaching assistant at the Paul G. Allen School of Computer Science. Providing 1:1 
        mentoring with students while collaborating as a team to manage a first-year 
        computer science course.
      `
    },
    {
      title: 'Lead Developer, Divvy',
      img: divvyIcon,
      description: `
        Lead developer of a social and financial app that allows bill splitting and group budgeting. 
        Pitched the idea, recruited a team, and managed the project to create a minimum viable product.
        The process involved planning, design, development, testing, and deployment.
      `
    }
  ]

  return (
    <section 
      id='experience'
      className={clsx(
        // Layout
        'section'
      )}
    >
      <div 
        id='experience-title'
        className={clsx(
          // Layout
          'w-full'
        )}
      >
        <h1>Experience</h1>
      </div>
      <div 
        id='experience-content'
        className={clsx(
          // Layout
          'row flex-wrap w-full'
        )}
      >
        {experiences.map((experience, index) => (
          <div 
            key={index}
            className={clsx(
              // Base styles
              'bubble',
              // Layout
              'w-[30rem] h-fit',
              // Spacing  
              'ml-5 p-5',
              // Margins
              'mb-4'
            )}
          >
            <h2 
              className={clsx(
                // Typography
                'text-light2 text-xl',
                // Margins
                'm-0',
                // Effects
                'text-shadow-DEFAULT'
              )}
            >
              {experience.title}
            </h2>
            <div 
              className={clsx(
                // Layout
                'row',
                // Alignment
                'items-start'
              )}
            >
              <img 
                src={experience.img} 
                alt='Paul G. Allen School of Computer Science'
                className={clsx(
                  // Dimensions
                  'w-20 h-20',
                  // Margins
                  'm-5 ml-0',
                  // Effects
                  'shadow'
                )}
              />
              <p 
                className={clsx(
                  // Margins
                  'mt-4',
                  // Effects
                  'text-shadow',
                  // Layout
                  'flex-1'
                )}
              >
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
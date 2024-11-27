import React from 'react';
import clsx from 'clsx';
import pgaIcon from '@images/pga.png';

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
          'w-full'
        )}
      >
        {experiences.map((experience, index) => (
          <div 
            key={index}
            className={clsx(
              // Base styles
              'bg-dark1 rounded shadow',
              // Layout
              'w-[80vh]',
              // Spacing  
              'p-[3vh]',
              // Margins
              'mb-4'
            )}
          >
            <h2 
              className={clsx(
                // Typography
                'text-light2 text-[3vh]',
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
                'flex flex-row',
                // Alignment
                'items-start'
              )}
            >
              <img 
                src={experience.img} 
                alt='Paul G. Allen School of Computer Science'
                className={clsx(
                  // Dimensions
                  'w-[10vh] h-[10vh]',
                  // Margins
                  'm-[2vh] ml-0',
                  // Effects
                  'shadow'
                )}
              />
              <p 
                className={clsx(
                  // Typography
                  'text-[2.5vh]',
                  // Margins
                  'mt-[1.5vh]',
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
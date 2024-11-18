import React from 'react';
import clsx from 'clsx';
import Profile from './Profile';
import { scrollTo } from '../utils/interaction';
import { gebi } from '../utils/aliases';

const Sidebar: React.FC = () => {
  const sections = ['experience', 'projects', 'contact'];

  return (
    <div 
      id="sidebar" 
      className={clsx(
        // Layout
        'flex flex-col fixed',
        // Sizing
        'h-screen w-[20vh]'
      )}
    >
      <Profile/>
      {sections.map((section) => (
        <div 
          key={section}
          onClick={() => scrollTo(gebi(section)!)}
          className={clsx(
            // Interactive
            'cursor-pointer',
            'transition-all duration-300 ease-out',
            'group'
          )}
        >
          <p 
            className={clsx(
              // Typography
              'text-light2 text-[2vh] font-bold',
              // Effects
              'text-shadow',
              // Spacing
              'mt-[2vh] mb-[1vh] ml-[2vh]',
              // Transitions
              'transition-all duration-300 ease-out',
              // Hover
              'group-hover:text-light1'
            )}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </p>
          <div 
            className={clsx(
              // Visual
              'h-0.5 w-4/5',
              'bg-gradient-to-r from-dark1 via-dark1 to-transparent',
              // Transitions
              'transition-all duration-300 ease-out',
              // Hover
              'group-hover:w-full'
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
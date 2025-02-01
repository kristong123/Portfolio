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
        'col fixed',
        // Sizing
        'h-screen w-sidebar'
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
              'text-light2 text-[1vw] font-bold',
              // Effects
              'text-shadow-DEFAULT',
              // Spacing
              'm-[1vw] mb-[0.5vw]',
              // Transitions
              'transition-colors duration-300 ease-out',
              // Hover
              'group-hover:text-light1'
            )}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </p>
          <div 
            className={clsx(
              // Visual
              'h-[0.15vw] w-4/5',
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
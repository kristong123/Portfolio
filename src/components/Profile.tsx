import React from 'react';
import clsx from 'clsx';
import { scrollTo } from '@utils/interaction';
import { gebi } from '@utils/aliases';
import portrait from '@images/portrait.jpg';

const Profile: React.FC = () => {
  return (
    <div 
      id="profile-home"
      className={clsx(
        // Base styles
        'bubble rounded-[1.25vw]',
        // Layout
        'row items-center justify-center',
        // Sizing
        'h-[3vw] w-full',
        // Spacing
        'mt-[0.5vw]', 'ml-[0.5vw]',
        // Typography
        'text-white',
        // Interactive
        'cursor-pointer',
        'transition',
        // Hover
        'hover:shadow-lg'
      )}
      onClick={() => scrollTo(gebi('about')!)}
    >
      <img
        src={portrait}
        alt="Profile"
        className={clsx(
          // Sizing
          'h-[1.75vw]',
          // Visual
          'rounded-full shadow-default'
        )}
      />
      <p 
        className={clsx(
          // Typography
          'text-[1.2vw] font-bold',
          // Effects
          'text-shadow-DEFAULT',
          // Spacing
          'ml-[5%]'
        )}
      >
        Kris Tong
      </p>
    </div>
  );
};

export default Profile;
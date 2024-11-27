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
        'bubble',
        // Layout
        'flex flex-row items-center justify-center',
        // Sizing
        'h-[6%] w-full',
        // Spacing
        'mt-[1vh]', 'ml-[1vh]',
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
          'h-[60%]',
          // Visual
          'rounded-full shadow-default'
        )}
      />
      <p 
        className={clsx(
          // Typography
          'font-bold text[3vh]',
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
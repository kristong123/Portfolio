import React from 'react';
import clsx from 'clsx';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className={clsx(
        // Base styles
        'section'
      )}
    >
      <div>
        <h1>About</h1>
      </div>
      <div 
        id="about-content" 
        className={clsx(
          // Base styles
          'bubble',
          // Layout
          'w-[100vh]',
          // Spacing
          'p-[4vh]', 'pt-[2.5vh]'
        )}
      >
        <h2 
          className={clsx(
            // Typography
            'text-light2 text-[3.5vh]', 
            // Effects
            'text-shadow-DEFAULT'
          )}
        >
          Hey, I'm Kris!
        </h2>
        <p>
          Welcome to my portfolio! I'm an aspiring full-stack developer looking to build fun projects.
        </p>
        <p>
          I like spending time hanging out with friends, meeting new people, and experiencing new things.
        </p>
        <p>
          Hope you think my portfolio is cool! Feel free to reach out to me on social media or through email.
        </p>
      </div>
    </section>
  );
};

export default About;
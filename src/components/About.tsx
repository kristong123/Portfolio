import React from 'react';
import clsx from 'clsx';
import GithubContributions from './GithubContributions';

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
          'row flex-wrap w-[35rem]',
          // Spacing
          'p-5',
        )}
      >
        <h2 
          className={clsx(
            // Typography
            'text-light2 text-2xl', 
            // Effects
            'text-shadow-DEFAULT',
            // Spacing
            'mb-2'
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
          Feel free to reach out to me on social media or through email.
        </p>
      </div>
      <GithubContributions />
    </section>
  );
};

export default About;
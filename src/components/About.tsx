import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <div id="about-title">
        <h1>About</h1>
      </div>
      <div id="about-content">
        <p className="bubble">
          Hey! Im Kris, an aspiring full-stack developer looking to build something cool.
          I study Computer Science at the University of Washington.
        </p>
      </div>
    </section>
  );
};

export default About;
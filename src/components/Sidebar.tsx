import React from 'react';
import Profile from './Profile';

const Sidebar: React.FC = () => {
  const sections = ['experience', 'projects', 'api', 'node-api'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="sidebar">
      <Profile />
      {sections.map((section) => (
        <div key={section} className="section-button" onClick={() => scrollToSection(section)}>
          <p>{section.charAt(0).toUpperCase() + section.slice(1)}</p>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
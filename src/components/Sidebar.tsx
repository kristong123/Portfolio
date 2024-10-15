import React from 'react';
import Profile from './Profile';
import { gebi } from '../utils/aliases';
import { scrollTo } from '../utils/interaction';

const Sidebar: React.FC = () => {
  const sections = ['experience', 'projects', 'api', 'node-api'];

  return (
    <div id="sidebar">
      <Profile />
      {sections.map((section) => (
        <div key={section} className="section-button" onClick={() => scrollTo(gebi(section)!)}>
          <p>{section.charAt(0).toUpperCase() + section.slice(1)}</p>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
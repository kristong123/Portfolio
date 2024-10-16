import React from 'react';
import { scrollTo } from '../utils/interaction';
import { gebi } from '../utils/aliases';

const Profile: React.FC = () => {
  return (
    <div id="profile-home" className="profile bubble" onClick={(e: React.MouseEvent<HTMLDivElement>) => scrollTo(gebi('about')!)}>
      <img src="/images/portrait.jpg" alt="Profile" />
      <p>Kris Tong</p>
    </div>
  );
};

export default Profile;
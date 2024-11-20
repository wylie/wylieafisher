import React from 'react';
import './connect.css';
import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import goodreadsIcon from '../assets/goodreads.png';
import linkedinIcon from '../assets/linkedin.png';

const iconMap = {
  email: emailIcon,
  github: githubIcon,
  goodreads: goodreadsIcon,
  linkedin: linkedinIcon,
};

const Connect = ({ link, title, icon }) => {
  const IconComponent = <img src={iconMap[icon]} className="icon" alt="" />;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
      {IconComponent}
    </a>
  );
};

export default Connect;
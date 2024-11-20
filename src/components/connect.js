import React from 'react';
import './connect.css';
import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import goodreadsIcon from '../assets/goodreads.png';
import linkedinIcon from '../assets/linkedin.png';

const Connect = ({link, title, icon}) => {
  let IconComponent;
  if (icon === 'email') {
      IconComponent = <img src={emailIcon} className="icon" alt="" />;
    } else if (icon === 'github') {
      IconComponent = <img src={githubIcon} className="icon" alt="" />;
    } else if (icon === 'linkedin') {
      IconComponent = <img src={linkedinIcon} className="icon" alt="" />;
    } else if (icon === 'goodreads') {
      IconComponent = <img src={goodreadsIcon} className="icon" alt="" />;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
      {IconComponent}
    </a>
  );
};

export default Connect;
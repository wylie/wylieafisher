import React from 'react';
import './connect.css';
import { ReactComponent as EmailIcon } from '../assets/iconmonstr-email-11.svg';
import { ReactComponent as GithubIcon } from '../assets/iconmonstr-github-5.svg';
import { ReactComponent as LinkedinIcon } from '../assets/iconmonstr-linkedin-5.svg';

const Connect = ({link, title, icon}) => {
  let IconComponent;
  if (icon === 'email') {
      IconComponent = <EmailIcon className="icon" />;
  } else if (icon === 'github') {
      IconComponent = <GithubIcon className="icon" />;
  } else if (icon === 'linkedin') {
      IconComponent = <LinkedinIcon className="icon" />;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
      {IconComponent}
    </a>
  );
};

export default Connect;
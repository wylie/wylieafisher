import React from 'react';
import './project.css';

const Project = ({ title, description, link }) => {
  return (
    <article className="project">
      <a href={link} target="_blank" rel="noreferrer" title={title}>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </article>
  );
};

export default Project;
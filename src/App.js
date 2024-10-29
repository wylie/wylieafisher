import './App.css';
import clones from './clones.js';
import React from 'react';
import { ReactComponent as EmailIcon } from './assets/iconmonstr-email-11.svg';
import { ReactComponent as GithubIcon } from './assets/iconmonstr-github-5.svg';
import { ReactComponent as LinkedinIcon } from './assets/iconmonstr-linkedin-5.svg';

function getRandomClone() {
  const randomIndex = Math.floor(Math.random() * clones.clonesList.length);
  return clones.clonesList[randomIndex];
}

function App() {
  return (
    <div className="layout">
      <div className="section">
        <div className="masthead">
          <h1>Wylie Fisher</h1>
          <div className="links">
            <a href="mailto:me@wyliefisher.com" target="_blank" rel="noopener noreferrer"><EmailIcon className="icon" /></a>
            <a href="https://github.com/wylie" target="_blank" rel="noopener noreferrer"><GithubIcon className="icon" /></a>
            <a href="https://www.linkedin.com/in/wyliefisher/" target="_blank" rel="noopener noreferrer"><LinkedinIcon className="icon" /></a>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <p>I'm a UI Web Developer with 20+ years of experience, strong problem-solving and debugging skills, and a passion for standards and learning new technologies. Proficient in current web trends, with an interest in emerging ones. Committed to writing valid, hand-coded solutions and dedicated to continuous learning. A versatile multitasker who thrives in collaborative environments, adapts quickly, and excels in both oral and written communication.</p>
        </div>
      </div>
      <div className="section">
        <div className="footer">
          <p className="clones">{getRandomClone()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

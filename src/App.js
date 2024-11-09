import './App.css';
import clones from './clones.js';
import React from 'react';
import { ReactComponent as EmailIcon } from './assets/iconmonstr-email-11.svg';
import { ReactComponent as GithubIcon } from './assets/iconmonstr-github-5.svg';
import { ReactComponent as LinkedinIcon } from './assets/iconmonstr-linkedin-5.svg';
import Portrait from './assets/portrait-no-bg-color.png';

function getRandomClone() {
  const randomIndex = Math.floor(Math.random() * clones.clonesList.length);
  return clones.clonesList[randomIndex];
}

function App() {
  return (
    <div className="layout">
      <header>
        <h1>Wylie Fisher</h1>
        <h3>Front-End Web Developer</h3>
      </header>
      <main>
        <h2>About</h2>
        <section className="about">
          <p><img src={Portrait} alt="portrait" />Ahoy, I'm a UI Web Developer with extensive experience in front-end developement, strong problem-solving and debugging skills, and a passion for standards and learning new technologies. Proficient in current web trends, with an interest in emerging ones. Committed to writing valid, hand-coded solutions and dedicated to continuous learning. A versatile multitasker who thrives in collaborative environments, adapts quickly, and excels in both oral and written communication.</p>
        </section>
        <h2>Projects</h2>
        <section className="projects">
          <a href="https://wylie.github.io/ifeelblank/" target="_blank" rel="noreferrer" className="project">
            <h3>I Feel Blank</h3>
            <p>ifeelblank is a React app where users can anonymously share their current mood, contributing to a collective mosaic of emotions. Each submission adds to an evolving "mood board," offering a real-time snapshot of the community's shared feelings.</p>
          </a>
          <a href="https://wylie.github.io/SantaCommandsIt/" target="_blank" rel="noreferrer" className="project">
            <h3>Santa Commands It!</h3>
            <p>This is a playful React app where Santa has taken a commanding turn, granting (or denying) users' holiday wishes with a touch of humor and seasonal flair. Users submit their requests, and Santa, now a bit more "powerful," considers each one and delivers a dynamic, festive response. Enjoy making wishes, but beware—Santa's judgment may surprise you!</p>
          </a>
          <a href="https://wylie.github.io/wampastompa/#make-a-new" target="_blank" rel="noreferrer" className="project">
            <h3>Wampa Stompa</h3>
            <p>This lets you design your own Wampa Stompa mix image! The image is inspired by the Darth Punk video (https://www.youtube.com/watch?v=1qhbKGc5rVM). Customize the visuals to capture the spirit of Wampa Stompa and create your unique image remix!</p>
          </a>
          <a href="https://play.date/pulp/42320/play/" target="_blank" rel="noreferrer" className="project">
            <h3>Maze Game</h3>
            <p>This is a maze game developed with Playdate Pulp. You find your way around the maze and collect coins.</p>
          </a>
        </section>
        <h2>Connect</h2>
        <section className="connect">
          <a href="mailto:me@wyliefisher.com" target="_blank" rel="noopener noreferrer"><EmailIcon className="icon" /></a>
          <a href="https://github.com/wylie" target="_blank" rel="noopener noreferrer"><GithubIcon className="icon" /></a>
          <a href="https://www.linkedin.com/in/wyliefisher/" target="_blank" rel="noopener noreferrer"><LinkedinIcon className="icon" /></a>
        </section>
      </main>
      <footer>
        <p>{getRandomClone()}</p>
      </footer>
    </div>
  );
}

export default App;

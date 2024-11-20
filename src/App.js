import './App.css';
import clones from './clones.js';
import React, { useState } from 'react';
import Project from './components/project';
import About from './components/about';
import Connect from './components/connect';
import switchModeIcon from './assets/dark-mode.png';
import projects from './projects';

function getRandomClone() {
  const randomIndex = Math.floor(Math.random() * clones.clonesList.length);
  return clones.clonesList[randomIndex];
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="layout">
      <header>
        <h1>Wylie Fisher</h1>
        <h3>
          Front-End Web Developer
          <button title="switch color mode" onClick={toggleDarkMode}>
            <img src={switchModeIcon} alt="switch mode" className="icon" />
          </button>
        </h3>
      </header>
      <main>
        <About />
        <h2>Projects</h2>
        <section className="projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </section>
        <h2>Connect</h2>
        <section className="connect">
          <Connect link="mailto:me@wyliefisher.com" title="Email me!" icon="email" />
          <Connect link="https://github.com/wylie" title="More work on GitHub!" icon="github" />
          <Connect link="https://www.linkedin.com/in/wyliefisher/" title="Let's connect on Linkedin!" icon="linkedin" />
          <Connect link="https://www.goodreads.com/wyliefisher" title="Read with me on Goodreads!" icon="goodreads" />
        </section>
      </main>
      <footer>
        <p>{getRandomClone()}</p>
      </footer>
    </div>
  );
}

export default App;

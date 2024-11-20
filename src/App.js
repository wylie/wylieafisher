import './App.css';
import clones from './clones.js';
import React from 'react';
import Project from './components/project';
import About from './components/about';
import Connect from './components/connect';

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
        <About />
        <h2>Projects</h2>
        <section className="projects">
          <Project title="I Feel Blank" description={"ifeelblank is a React app where users can anonymously share their current mood, contributing to a collective mosaic of emotions. Each submission adds to an evolving 'mood board,' offering a real-time snapshot of the community's shared feelings."} link="https://wylie.github.io/ifeelblank/" />
          <Project title="Santa Commands It!" description="This is a playful React app where Santa has taken a commanding turn, granting (or denying) users' holiday wishes with a touch of humor and seasonal flair. Users submit their requests, and Santa, now a bit more 'powerful,' considers each one and delivers a dynamic, festive response. Enjoy making wishes, but beware—Santa's judgment may surprise you!" link="https://wylie.github.io/SantaCommandsIt/" />
          <Project title="Wampa Stompa" description="This lets you design your own Wampa Stompa mix image! The image is inspired by the Darth Punk video. Customize the visuals to capture the spirit of Wampa Stompa and create your unique image remix!" link="https://wylie.github.io/wampastompa/#make-a-new" />
          <Project title="Maze Game" description="This is a maze game developed in Lua in Pico-8. In this game, you navigate a little character through a dark maze, trying to find the exit. The maze is filled with twists and turns, and you'll need to use your wits and memory to avoid dead ends and find your way out. Good luck, and happy maze-solving!" link="https://wylie.github.io/pico-8/" />
        </section>
        <h2>Connect</h2>
        <section className="connect">
          <Connect link="mailto:me@wyliefisher.com" title="Email me!" icon="email" />
          <Connect link="https://github.com/wylie" title="More work on GitHub!" icon="github" />
          <Connect link="https://www.linkedin.com/in/wyliefisher/" title="Let's connect on Linkedin!" icon="linkedin" />
          <Connect link="https://www.goodreads.com/wyliefisher" title="Let's connect on Goodreads!" icon="goodreads" />
        </section>
      </main>
      <footer>
        <p>{getRandomClone()}</p>
      </footer>
    </div>
  );
}

export default App;

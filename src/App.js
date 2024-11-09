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
          <p><img src={Portrait} alt="portrait" />Ahoy! I’m a developer with extensive front-end experience, strong problem-solving skills, and a focus on clean, standards-based code. I try to stay current with web trends, am open to emerging technologies, and am committed to continuous learning.</p>
          <p>Outside of work, I’m a dad, partner, artist, and animal lover (with a dog, two cats, and a state-fair goldfish—and hopes of having chickens someday!). I’m happiest outdoors—reading, hiking, kayaking, or enjoying a campfire—and love to play with Lego and create art. Grounded by values of social justice, generosity, honesty, curiosity, and adaptability, I thrive in collaborative environments, bringing strong communication skills and adaptability to every project.</p>
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
            <p>This is a maze game developed with Playdate Pulp. In this game, you navigate a little character through a dark maze, trying to find the exit and collect all the coins scattered throughout. The maze is filled with twists and turns, and you'll need to use your wits and memory to avoid dead ends and find your way out. Each coin you collect adds to your score, and finding the exit completes the level. Good luck, and happy maze-solving!</p>
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

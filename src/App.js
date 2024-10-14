import './App.css';
import clones from './clones.js';

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
            <a href="mailto:me@wyliefisher.com" TARGET="_blank">email</a>
            <a href="https://github.com/wylie" TARGET="_blank">github</a>
            <a href="https://www.linkedin.com/in/wyliefisher/" TARGET="_blank">linkedin</a>
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

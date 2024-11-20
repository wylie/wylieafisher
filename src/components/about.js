import React, { useState, useEffect } from 'react';
import './about.css';
import Portrait from '../assets/portrait-no-bg-color.png';
import DarkPortrait from '../assets/portrait-dark-no-bg-color.png';

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about">
      <p><img src={isDarkMode ? DarkPortrait : Portrait} alt="portrait" />Ahoy! I’m a developer with extensive front-end experience, strong problem-solving skills, and a focus on clean, standards-based code. I try to stay current with web trends, am open to emerging technologies, and am committed to continuous learning.</p>
      <p>Outside of work, I’m a dad, partner, artist, and animal lover (with a dog, two cats, and a state-fair goldfish—and hopes of having chickens someday!). I’m happiest outdoors—reading, hiking, kayaking, or enjoying a campfire—and love to play with Lego and create art. Grounded by values of social justice, generosity, honesty, curiosity, and adaptability, I thrive in collaborative environments, bringing strong communication skills and adaptability to every project.</p>
    </section>
  );
};

export default About;
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Sadie Flick</h1>
        <h2>Software Engineer & Learning Designer</h2>
        <p>Specialized in Python, Java, and AI technology curriculum development</p>
      </div>
      
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a software engineer and curriculum developer with a passion for making 
          complex technical concepts accessible to learners at all levels. With extensive 
          experience in adult education and software development, I create engaging learning 
          experiences in Python, Java, and emerging AI technologies.
        </p>
      </section>
    </div>
  );
}

export default Home;

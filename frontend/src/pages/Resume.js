import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <div className="resume-content">
        <section className="resume-section">
          <h2>Experience</h2>
          
          <div className="job">
            <h3>Software Engineering Curriculum Developer, Java & Python</h3>
            <p className="job-details">Coding Dojo, Colorado Technical University | July 2021 - December 2023</p>
            <ul>
              <li>Improved the overall Java curriculum satisfaction (CSAT) average from 7.55 to 8.26</li>
              <li>Improved the overall Python CSAT average from 7.77 to 8.28</li>
            </ul>
          </div>
          
          <div className="job">
            <h3>Software Engineering Instructor</h3>
            <p className="job-details">Coding Dojo, Colorado Technical University | October 2018 - July 2021</p>
            <p>Mentored and supported hundreds of students in 5-15 learner cohorts through an intensive 14-week bootcamp.</p>
          </div>
        </section>
        
        <section className="resume-section">
          <h2>Education</h2>
          <div className="education">
            <h3>University of Maryland Baltimore County — Computer Science</h3>
            <p>Relevant coursework in Computer Science, including Calculus, Data Structures, and more</p>
          </div>
          <div className="education">
            <h3>University of California, Santa Cruz — B.A. Anthropology, Minor Jazz Music</h3>
            <p>Dean's List</p>
          </div>
        </section>
        
        <section className="resume-section">
          <h2>Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Working Languages</h3>
              <p>Java, Python, JavaScript, TypeScript, HTML/CSS</p>
            </div>
            <div className="skill-category">
              <h3>Platforms & Frameworks</h3>
              <p>Django, Flask, Spring, Angular, MERN, React Native</p>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <p>SQL, SQLite, MySQL, Supabase, MongoDB, Mongoose</p>
            </div>
          </div>
        </section>
      </div>
      
      <div className="resume-download">
        <a href="/resume.pdf" download>Download Full Resume (PDF)</a>
      </div>
    </div>
  );
}

export default Resume;

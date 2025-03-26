import React from 'react';
import '../styles/Tutorials.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: "Introduction to Python for AI Development",
      description: "Learn the fundamentals of Python programming with a focus on AI applications",
      videoUrl: "#",
      date: "March 2025"
    },
    {
      id: 2,
      title: "Working with LangChain and Vector Databases",
      description: "Hands-on tutorial for building LLM applications with LangChain and ChromaDB",
      videoUrl: "#",
      date: "March 2025"
    }
  ];

  return (
    <>

    <div className="tutorials-container">
      <h1>Video Tutorials</h1>
      <div className="tutorials-grid">
        {tutorials.map(tutorial => (
          <div className="tutorial-card" key={tutorial.id}>
            <div className="video-placeholder">Video Thumbnail</div>
            <div className="tutorial-content">
              <h2>{tutorial.title}</h2>
              <p className="date">{tutorial.date}</p>
              <p className="description">{tutorial.description}</p>
              <a href={tutorial.videoUrl} target="_blank" rel="noopener noreferrer">Watch Tutorial</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Tutorials;

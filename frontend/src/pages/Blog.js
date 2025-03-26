import React from 'react';
import '../styles/Blog.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function blogs() {
  const blogs = [
    {
      id: 1,
      title: "Are Companies Listening Through Your Phone?",
      content: `My skeptic instinct tells me its far-fetched to think that social media companies are 'constantly listening' to our spoken conversations to deliver relevant ads within minutes, but I've had that experience, and it's weird, right?

I'm sure you've had these conversations too. Where the subject was so unrelated to anything else in your life, and in such an isolated/private context, and then you got served an ad minutes later that was eerily specific to that conversation and unrelated to what you would assume was your historic consumer profile (for lack of a better term).

My creative brain tells me it's probably a phenomenon that just arises from suggestion algorithms and lived social-psychology, somehow having statistical modeling such that it predicts, in a way, stuff you're likely to talk about, kind of like how electrical signals for motor-control happen in your brain before your decide to move. Basically, math magic and existential absurdity.

But when I say "remember when we found that antique porcelain unicorn under grandma's stairs in third grade" and minutes later amazon shows me ads for antique mythical creature figurines, my gut says "who's been eves-dropping!?"`,
      tags: ["Python", "AI", "LLM"],
      github: "https://github.com/sadieflick/biomedical_graphrag"
    },
    {
      id: 2,
      title: "Portfolio Website",
      content: "This portfolio website built with React and Flask",
      tags: ["React", "Flask", "CSS"],
      github: "https://github.com/sadieflick/sadie-portfolio"
    }
  ];

  return (
    <div className="blogs-container">

      <h1>My blogs</h1>
      <div className="blogs-grid">
        {blogs.map(blog => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <div className="tags">
              {blog.tags.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a href={blog.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default blogs;

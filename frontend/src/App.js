import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Tutorials from './pages/Tutorials';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
      
        
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/tutorials" element={<Tutorials />} />

          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

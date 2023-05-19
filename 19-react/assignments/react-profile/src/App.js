import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1> Welcome to My Profile</h1>
      <nav>
        {/* <a>About me</a> 
        <a>Contact</a>
        <a>Projects</a> */}

<Link to="/contact"><button className="reactprofile-button">Contact</button></Link>
      <Link to="/aboutme"><button className="reactprofile-button">About Me</button></Link>
      <Link to="/projects"><button className="reactprofile-button">Projects</button></Link>
      <Link to="/resume"><button className="reactprofile-button">Resume</button></Link>
      </nav>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;

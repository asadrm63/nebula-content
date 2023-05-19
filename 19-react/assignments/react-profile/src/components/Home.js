import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <p>Welcome to my home page!

I'm a passionate web developer dedicated to creating exceptional digital experiences.

From front-end development using HTML, CSS, and JavaScript to back-end programming with frameworks like React and Node.js.

Take a moment to explore my portfolio and discover the projects I've worked on.
Thank you for visiting, and I look forward to the opportunity of working with you!
<br></br>
Best regards,
<br></br>
Asad</p>
      {/* <Link to="/contact"><button className="reactprofile-button">Contact</button></Link>
      <Link to="/aboutme"><button className="reactprofile-button">About Me</button></Link>
      <Link to="/projects"><button className="reactprofile-button">Projects</button></Link>
      <Link to="/resume"><button className="reactprofile-button">Resume</button></Link> */}
    </div>
  )
}

// className="reactprofile-button"

export default Home

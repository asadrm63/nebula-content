import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
    <Link to="/"><button className="reactprofile-button">Home</button></Link>
    <div className="projectst">
       <h1>Check out my projects!!</h1>
       <a href="https://asadrm63.github.io/Calculator/">Calculator</a>
       <br></br>
       <a href="https://asadrm63.github.io/game-project/">Ski Game</a>
    </div>
</>
  )
}

export default Projects

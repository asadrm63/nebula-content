import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
    <Link to="/"><button className="reactprofile-button">Home</button></Link>
    <div className="aboutme">
       <h1> This is the About me Page!!</h1>
        <p>
I'm an aspiring web developer based in NYC. My wife and son are my biggest inspirations. I'm passionate about creating immersive online experiences and constantly expanding my skills in web development. Let's connect and embark on this exciting journey together!</p>
    </div>
</>
  )
}

export default AboutMe

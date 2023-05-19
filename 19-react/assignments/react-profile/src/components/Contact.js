import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <Link to="/"><button className="reactprofile-button">Home</button></Link>
            <div className="contact">
                <h1>This is the Contact Page!!</h1>
                <p>email:asadrm63@gmail.com</p>

            </div>
        </>
    );
}

export default Contact;
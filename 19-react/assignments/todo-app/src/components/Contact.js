import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <Link to="/"><button className="todo-button">Back</button></Link>
            <div className="contact">
                This is the Contact Page!!
            </div>
        </>
    );
}

export default Contact;
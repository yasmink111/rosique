import "./page-css/Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div>
            <Header />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you</p>
                <form className="contact-form">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    <textarea
                        placeholder="Your Message..."
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button
                        type="button"
                        onClick={sendMessage}
                    >
                        Send Message
                    </button>

                </form>
                <div className="contact-info">
                    <p>Email: rosique@gmail.com</p>
                    <p>Phone: +961 71 786 4182</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
import "./page-css/Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Message sent successfully!");
    }

    return (
        <div>
            <Header />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you</p>
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        placeholder="Your Message..."
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit">
                        Send Message
                    </button>

                </form>

                <div className="contact-info">

                    <p> Email: rosique@gmail.com </p>

                    <p>Phone: +961 71 786 4182</p>

                </div>

            </div>

            <Footer />

        </div>

    );
}

export default Contact;
import "./page-css/AboutUs.css";
import AboutBox from "../components/About-box";
import Header from "../components/Header";
import Footer from "../components/Footer";  
const AboutUs = () => {
    return (
        <div>
            <Header />  
            <div className="about-container">
                <h1>About Us</h1>
                <p>
                    Welcome to our beauty store.<br />
                    We bring you the best products from top brands like Chanel, Dior, Huda Beauty, and more.<br />
                    Our goal is to make you feel confident, glowing, and beautiful every day.
                </p>
                <div className="about-section">
                    <h2>Why Choose Us?</h2>
                    <div className="about-boxes">
                        <AboutBox 
                            text={"💄 Authentic Products"} 
                            info={"We only sell 100% original beauty products."} 
                        />
                        <AboutBox 
                            text={"🚚 Fast Delivery"} 
                            info={"Quick and reliable delivery to your door."} 
                        />
                        <AboutBox 
                            text={"💸 Best Prices"} 
                            info={"Luxury beauty at affordable prices."} 
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
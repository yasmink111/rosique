import { useNavigate } from "react-router-dom";
import "./comp-css/Footer.css";

const Footer = () =>{
    const navigate= useNavigate();
    return(
        <footer className="footer">
            <p>&copy; 2026 Rosique. All rights reserved.</p>
            <div className="footer-links">
                <span onClick={()=> navigate("/AboutUs")}>About Us</span>
                <span onClick={()=> navigate("/Contact")}>Contact</span>
                <span onClick={()=> navigate("/MyAccount")}>My Account</span>
            </div>
        </footer>
    );
}
export default Footer;

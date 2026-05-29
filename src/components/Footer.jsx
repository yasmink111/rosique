import { Link, useNavigate } from "react-router-dom";
import "./comp-css/Footer.css";

const Footer = () =>{
    const navigate= useNavigate
    return(
        <footer className="footer">
            <p>&copy; 2026 Rosique. All rights reserved.</p>
            <div className="footer-links">
                <p onClick={()=> navigate("/AboutUs")}>About Us</p>
                <p onClick={()=> navigate("/Contact")}>Contact</p>
                <p onClick={()=> navigate("/MyAccount")}>My Account</p>
            </div>
        </footer>
    );
}
export default Footer;

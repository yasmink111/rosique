import "./comp-css/About-box.css";

const AboutBox = ({ text, info }) => {
    return (
        <div className="about-box">
            <h3>{text}</h3>
            <p>{info}</p>
        </div>
    );
};

export default AboutBox;
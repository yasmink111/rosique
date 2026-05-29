import "./comp-css/Button.css";
const Button = ({text,bgcolor,tcolor,onClick}) => {
    return (
        <button
            className="btn"
            style={{
                backgroundColor: bgcolor,
                color:tcolor
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
export default Button;
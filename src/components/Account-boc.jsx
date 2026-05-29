import "./comp-css/accountboc.css";
const AccountBox = ({text,info}) => {
    return(
        <div className="account-box">
            <h3>{text}</h3>
            <p>{info}</p>
        </div>
    );
}
export default AccountBox;
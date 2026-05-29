import Header from "../components/Header";
import Footer from "../components/Footer";

import "./page-css/MyAccount.css";

import AccountBox from "../components/Account-boc";

import { useNavigate } from "react-router-dom";

const MyAccount = () => {

    const navigate = useNavigate();

    const loggedInUser =
        JSON.parse(
            localStorage.getItem("loggedInUser")
        );

    function handleLogout() {

        localStorage.removeItem(
            "loggedInUser"
        );

        alert("Logged out successfully.");

        navigate("/login");
    }

    function goToCheckout() {

        if (!loggedInUser) {

            alert(
                "Please login before checkout."
            );

            navigate("/login");

            return;
        }

        navigate("/checkout");
    }

    return (

        <div>

            <Header />

            <div className="account-container">

                <h1>My Account</h1>

                <p className="welcome-text">

                    {loggedInUser

                        ? `Welcome back, ${loggedInUser.fullName} `

                        : "Welcome Guest "

                    }

                </p>

                {loggedInUser && (

                    <div className="account-details">

                        <p>

                            <strong>Name: </strong>

                            {loggedInUser.fullName}

                        </p>

                        <p>

                            <strong>Email: </strong>

                            {loggedInUser.email}

                        </p>

                    </div>

                )}

                <div className="account-boxes">

                    <div
                        onClick={goToCheckout}
                    >

                        <AccountBox
                            text="Checkout"
                            info="Complete your order"
                        />

                    </div>

                    <div
                        onClick={() =>
                            navigate("/")
                        }
                    >

                        <AccountBox
                            text="Continue Shopping"
                            info="Explore more products"
                        />

                    </div>

                    <div

                        onClick={() =>

                            loggedInUser

                            ? handleLogout()

                            : navigate("/login")
                        }

                    >

                        <AccountBox

                            text={
                                loggedInUser
                                ? "Logout"
                                : "Login"
                            }

                            info={
                                loggedInUser
                                ? "Sign out of your account"
                                : "Access your account"
                            }

                        />

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    );
}

export default MyAccount;
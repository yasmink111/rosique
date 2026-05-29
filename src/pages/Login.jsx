import "./page-css/Login.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {

        if (!email || !password) {

            alert("Please fill all fields.");

            return;
        }

        const users =
            JSON.parse(
                localStorage.getItem("users")
            ) || [];

        const foundUser =
            users.find(user =>

                user.email === email &&

                user.password === password
            );

        if (!foundUser) {

            alert("Account does not exist.");

            return;
        }

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(foundUser)
        );

        alert("Login successful ✨");

        navigate("/");
    }

    return (

        <div>

            <Header />

            <div className="login-container">

                <h1>Welcome Back</h1>

                <p>
                    Login to your account
                </p>

                <div className="login-form">

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <Button
                        text={"Login"}
                        bgcolor={"#800020"}
                        tcolor={"white"}
                        onClick={handleLogin}
                    />

                </div>

                <p className="option">

                    Don’t have an account?

                    <span
                        onClick={() =>
                            navigate("/register")
                        }
                    >
                        Register
                    </span>

                </p>

            </div>

            <Footer />

        </div>
    );
};

export default Login;
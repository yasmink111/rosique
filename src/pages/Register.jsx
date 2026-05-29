import "./page-css/Register.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleRegister() {

        if (
            !fullName ||
            !email ||
            !password ||
            !confirmPassword
        ) {

            alert("Please fill all fields.");

            return;
        }

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }

        const users =
            JSON.parse(
                localStorage.getItem("users")
            ) || [];

        const existingUser =
            users.find(user =>
                user.email === email
            );

        if (existingUser) {

            alert("Account already exists.");

            return;
        }

        const newUser = {
            fullName,
            email,
            password
        };

        users.push(newUser);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        alert("Account created successfully ✨");

        navigate("/login");
    }

    return (

        <div>

            <Header />

            <div className="signup-container">

                <h1>Create Account</h1>

                <p>
                    Join us today
                </p>

                <div className="signup-form">

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) =>
                            setFullName(e.target.value)
                        }
                    />

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

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                    />

                    <button onClick={handleRegister}>
                        Sign Up
                    </button>

                </div>

                <p className="extra">
                    Already have an account?
                    <span
                        onClick={() =>
                            navigate("/login")
                        }
                    >
                        Login
                    </span>

                </p>

            </div>

            <Footer />

        </div>
    );
};

export default Register;
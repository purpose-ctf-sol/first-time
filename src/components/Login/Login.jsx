import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function login() {
    console.log("login");
  }
  function signUp() {
    console.log("Sign up");
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="login-wrapper">
              <div className="title">
                <h2 className="home-title text-center">Welcome to Scamazon</h2>
                <h4 className="text-center">
                  {showSignup ? "Sign Up" : "Login"}{" "}
                </h4>
              </div>

              <div className="form">
                <div className="input-group">
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="form-control"
                    placeholder="username"
                    id="username"
                    autoComplete="off"
                    autoFocus
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="form-control"
                    placeholder="password"
                    id="password"
                    autoComplete="off"
                  />
                </div>
                {showSignup && (
                  <div className="input-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="form-control"
                      placeholder="e-mail"
                      id="email"
                      autoComplete="off"
                    />
                  </div>
                )}

                <div
                  className="signup-btn"
                  onClick={() => setShowSignup(!showSignup)}
                >
                  {showSignup
                    ? "Already have an account ? Login"
                    : "Dont have an account? sign up "}
                </div>

                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value={showSignup ? "Sign Up" : "Login"}
                    onClick={showSignup ? signUp : login}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

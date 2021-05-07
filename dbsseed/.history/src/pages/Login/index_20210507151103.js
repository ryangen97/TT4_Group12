import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'

const { loginAcc } = require('../../api.js');
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { setSession } = useAuth();
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        loginAcc("Group12s", "2q$bOC%uyST4fIR")
        .then(
            data => {
                console.log(data)
                setSession(data)
                history.push("/dashboard");
        })
        .catch(error => { 
            alert("Wrong Username and Password")
            console.log(error) })

        event.preventDefault();
    }



    return (
        <div className="Login col-md-6 offset-3">
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="Username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="User"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
        </Button>
            </Form>
        </div>
    );
}

export default Login;

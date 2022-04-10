import React, {Fragment, useState}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {useAuth} from "../../store/AuthContext";

import NavBar from '../../components/Layout/NavBar';
import Modal from "../../components/UI/Modal";
import styles from './LoginPage.module.css';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [registering, setRegistering] = useState(false);
    const [registerFailed, setRegisterFailed] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [hideCart, setHideCart] = useState(false);
    const {login} = useAuth();
    const navigate = useNavigate();

   async function onSubmit(event) {
        event.preventDefault();
        setHideCart(true);
        setRegistering(true);
        try {
            await login(userEmail, userPassword)
            setRegistering(false)
            setRegisterFailed(false);
            setRegisterSuccess(true);
            navigate("/");
            setUserEmail("");
            setUserPassword("");
            
        } catch (error) {
            console.log(error);
            setRegistering(false);
            setRegisterSuccess(false);
            setRegisterFailed(true);         
        }
        
        // const response = await fetch("/api/login", {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         email: userEmail,
        //         password: userPassword
        //     })
        // });

        // if(response.ok){
        //     setRegistering(false)
        //     setRegisterFailed(false);
        //     setRegisterSuccess(true);

        //     setUserEmail("");
        //     setUserPassword("");
        // } else{
        //     setRegistering(false);
        //     setRegisterSuccess(false);
        //     setRegisterFailed(true);       
        // }
    }

    function emailHandler(event) {
        let e = event.target.value;
        setUserEmail(e);
    }

    function passwordHandler(event) {
        let p = event.target.value;
        setUserPassword(p)

    }

    function hideCartHandler() {
        setHideCart(false);
    }


    const userIsRegistering = <p>Logging In...</p>;

    const errorWhileRegistering = 
        <Fragment>
            <p>Failed to Login.</p>
            <button type = "button" className={styles.buttonOutline} onClick={hideCartHandler}>Okay</button>
        </Fragment>

    const userIsRegistered = 
        <Fragment>
            <p>Logged In successfully.</p>
            <button type = "button" className={styles.buttonOutline} onClick={hideCartHandler}>Okay</button>
        </Fragment>




  return (
    <Fragment>
        <NavBar/>
        <div className={styles.loginContainer}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicHeader">
                        <h1>Login</h1>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={userEmail} onChange = {emailHandler} required />
                        <Form.Text className={`text-muted ${styles.inValid} `}>
                            
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={userPassword} onChange = {passwordHandler} required />
                        <Form.Text className={`text-muted ${styles.inValid} `}>
                            
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLoginLink">
                        <span>Don't have an account? </span>
                        <span>
                            <Link to="/register">
                                Register
                            </Link>
                        </span>
                    </Form.Group>

                    <Button variant="primary" className = {styles.Button} type="submit" onClick={onSubmit}>
                        Login
                    </Button>

                </Form>
        </div>

        {(registering && !registerFailed && !registerSuccess) && <Modal>{userIsRegistering}</Modal> }
        {(hideCart && (!registering && registerFailed && !registerSuccess)) && <Modal>{errorWhileRegistering}</Modal> }
        {(hideCart && (!registering && !registerFailed && registerSuccess)) && <Modal>{userIsRegistered}</Modal> }

    </Fragment>
  )
}



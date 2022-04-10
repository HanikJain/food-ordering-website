import React, {Fragment, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,  useNavigate } from 'react-router-dom';
import {useAuth} from "../../store/AuthContext";

import NavBar from '../../components/Layout/NavBar';
import Modal from "../../components/UI/Modal";
import styles from './RegisterPage.module.css';

export default function RegisterPage(props) {
    const [userName, setUserName] = useState({name: "", valid: true});
    const [userEmail, setUserEmail] = useState({email: "", valid: true});
    const [userPassword, setUserPassword] = useState({password: "", valid: true});
    const [registering, setRegistering] = useState(false);
    const [registerFailed, setRegisterFailed] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [hideCart, setHideCart] = useState(false);
    const {signup, currentUser} = useAuth();
    const navigate = useNavigate();



    async function onSubmit(event) {
        event.preventDefault();
        setHideCart(true);
        if(userEmail.email.trim().includes("@") && userPassword.password.trim().length >= 8){
            if(userName.valid){
                try {
                    await signup(userEmail.email, userPassword.password)
                    await fetch("/api/register", {
                                method: "POST",
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    name: userName.name,
                                    email: userEmail.email,
                                })
                            });
                    setRegistering(false)
                    setRegisterFailed(false);
                    setRegisterSuccess(true);
                    navigate("/");
                    setUserName({name: "", valid: true});
                    setUserEmail({email: "", valid: true});
                    setUserPassword({password: "", valid: true});
                    
                } catch (error) {
                    console.log("error", error);
                    setRegistering(false);
                    setRegisterSuccess(false);
                    setRegisterFailed(true);       
                }
            }
            // if(userName.valid){
            //     setRegistering(true);
            //     const response = await fetch("/api/register", {
            //         method: "POST",
            //         headers: { 'Content-Type': 'application/json' },
            //         body: JSON.stringify({
            //             name: userName.name,
            //             email: userEmail.email,
            //             password: userPassword.password
            //         })
            //     });

            //     if(response.ok){
            //         setRegistering(false)
            //         setRegisterFailed(false);
            //         setRegisterSuccess(true);

            //         setUserName({name: "", valid: true});
            //         setUserEmail({email: "", valid: true});
            //         setUserPassword({password: "", valid: true});
            //     } else{
            //         setRegistering(false);
            //         setRegisterSuccess(false);
            //         setRegisterFailed(true);       
            //     }

            // }
        }else{
            if(userPassword.password.trim().length < 8){
                setUserPassword({password: userPassword.password, valid:false});
            }
            if(!(userEmail.email.trim().includes("@"))){
                setUserEmail({email: userEmail.email, valid:false});
            }
        }
    }


    function nameHandler(event) {
        let n = event.target.value;
        if(n.trim() === ""){
            setUserName({name: n, valid: false});
        }else{
            setUserName({name: n, valid: true});
        }
    }

    function emailHandler(event) {
        let e = event.target.value;
        setUserEmail({email: e, valid: true});
    }

    function passwordHandler(event) {
        let p = event.target.value;
        setUserPassword({password: p, valid: true})

    }

    function hideCartHandler() {
        setHideCart(false);
    }


    const userIsRegistering = <p>Registering...</p>;

    const errorWhileRegistering = 
        <Fragment>
            <p>Registeration failed.</p>
            <button type = "button" className={styles.buttonOutline} onClick={hideCartHandler}>Okay</button>
        </Fragment>

    const userIsRegistered = 
        <Fragment>
            <p>Register successfully.</p>
            <button type = "button" className={styles.buttonOutline} onClick={hideCartHandler}>Okay</button>
        </Fragment>



  return (
      <Fragment>
          <NavBar />
        <div className={styles.registerContainer}>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicHeader">
                    <h1>Register</h1>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={userName.name} onChange = {nameHandler} required />
                    <Form.Text className={`text-muted ${styles.inValid} `}>
                        {!userName.valid && "Invalid Name"}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={userEmail.email} onChange = {emailHandler} required />
                    <Form.Text className={`text-muted ${styles.inValid} `}>
                        {!userEmail.valid && "Invalid Email"}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={userPassword.password} onChange = {passwordHandler} required />
                    <Form.Text className={`text-muted ${styles.inValid} `}>
                        {!userPassword.valid && "Weak Password"}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLoginLink">
                    <span>Have an account? </span>
                    <span>
                        <Link to="/login">
                            Login
                        </Link>
                    </span>
                </Form.Group>

                <Button variant="primary" className = {styles.Button} type="submit"  onClick={onSubmit} >
                    Register
                </Button>
            </Form>
        </div>
        
        {(registering && !registerFailed && !registerSuccess) && <Modal>{userIsRegistering}</Modal> }
        {(hideCart && (!registering && registerFailed && !registerSuccess)) && <Modal>{errorWhileRegistering}</Modal> }
        {(hideCart && (!registering && !registerFailed && registerSuccess)) && <Modal>{userIsRegistered}</Modal> }
      </Fragment>
  )
}

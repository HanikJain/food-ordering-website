import React, {useState, useEffect, Fragment} from 'react'
import {useAuth} from "../../store/AuthContext";
import { Link,  useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import NavBar from "../../components/Layout/NavBar";
import PastOrderCard from '../../components/UI/PastOrderCard';
import styles from './Dashboard.module.css';


export default function Dashboard(props) {
  const {currentUser, logout} = useAuth();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userOrder, setUserOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function onLogout(){
    logout();
    navigate("/login");
  }

  function login(){
    navigate("/login");
  }

  useEffect(() => {
    async function fetchDetails(){
      setIsLoading(true);
      const response = await fetch("/api/dashboard", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: currentUser.email,
        })
      });
      setIsLoading(false);
      if(response.ok){
        const results = await response.json();
        setUserName(results.name);
        setUserEmail(results.email);
        setUserOrder(results.order);
        console.log(results.order);
      }
    }

    if(currentUser){
      fetchDetails();
    }

  }, [currentUser])

  const notLoggedIn = 
  <Fragment>
        <div>
          <h1>Sign in to see details</h1>
        </div>
        <Button variant="primary" className = {styles.LoginButton} type="submit"  onClick={login} >
            login
        </Button>
  </Fragment>      

  const loggedIn = 
  <Fragment>
    <div className={styles.userContainer}>
        <div className={styles.userProfilePic}>
          {userName.slice(0,1).toUpperCase() + userName.slice(1, 2).toUpperCase()}
        </div>
        <div className={styles.userProfileName}>
          {userName}
        </div>
        <div className={styles.userOrders} >
            <div className={styles.userOrdersHeader}>
              Past Orders
            </div>
            <div className={styles.userOrdersList} >
              {userOrder.map(order => <PastOrderCard data={order}/>)}
            </div>
        </div>  
        <Button variant="primary" className = {styles.LogoutButton} type="submit"  onClick={onLogout} >
              Logout
        </Button>
    </div>
  </Fragment>


  return (
    <div>
      <NavBar />
      {isLoading && <h3 style={{textAlign: 'center'}}> Loading... </h3>}
      {!isLoading && (currentUser ? loggedIn : notLoggedIn)}
    </div>
  )
}

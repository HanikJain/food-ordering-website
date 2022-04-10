import React, {Fragment} from 'react'
import { Link, useNavigate } from "react-router-dom";

import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'
import {useAuth} from "../../store/AuthContext";

import {ReactComponent as RestaurantIcon} from "../../assets/icons/restaurant.svg"
import {ReactComponent as ProfileUserIcon} from "../../assets/icons/profile-user.svg"


export default function Header(props) {
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    return (
        <Fragment>
            <header className={classes.header} >
                <div>
                    <Link to = "/" className = {classes.title}> Meal Monkey </Link>
                </div>

                

                <div className = {classes.navLinks}>
                    <Link to = {currentUser ? "/dashboard"  : "/register"} > 
                        <div className = {classes.restaurants}><ProfileUserIcon /></div>
                    </Link>

                    <Link to = "/restaurants" > 
                        <div className = {classes.restaurants}><RestaurantIcon /></div>
                    </Link>
                    <HeaderCartButton onClick={props.onShowCart} />
                </div>
            </header>
        </Fragment>   
    )
}

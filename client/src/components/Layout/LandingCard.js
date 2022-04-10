


import classes from "./LandingCard.module.css"
import React from 'react'
import PizzaImage from "../../assets/pizza-3d-removebg-min-compress.png"


export default function LandingCard() {
    return (
        <div className={classes.landingcard} >
            <div className = {classes.content} >
                <div className = {classes.title}> 
                    <h2 className = {classes.h2 }>A chef in every tasty box</h2>
                </div>
                <div className = {classes.description} >
                    <h4 className = {classes.h4 } >Get tastie and healty food at your 
                        home with free delivery </h4>
                </div>
                {/* <button>Explore our work</button> */}
            </div>
            <div className = {classes.image} >
                <img className = {classes.img} src={PizzaImage} alt="Image of pizza" />
            </div>
        </div>
    )
}

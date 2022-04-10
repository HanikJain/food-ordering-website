import React from 'react'
import classes from './Meals.module.css';

import AvailableMeals from './AvailableMeals';

export default function Meals() {
    return (
        <div className={classes.meals} >
           <h1>Our top picks</h1> 
           <AvailableMeals />
        </div>
    )
}

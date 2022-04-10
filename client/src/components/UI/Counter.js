import React, {useState} from 'react'
import {ReactComponent as AddIcon} from "../../assets/icons/plus.svg";
import {ReactComponent as MinusIcon} from "../../assets/icons/minus.svg";

import classes from './Counter.module.css';

export default function Counter(props) {

    return (
        <div className = {classes.counter}>
            <button type="button" onClick = {props.onRemove} className = {classes.counterButton}> <MinusIcon /> </button>
            <h3 className = {classes.h3} >{props.amount}</h3>
            <button type="button" onClick = {props.onAdd} className = {classes.counterButton}> <AddIcon />  </button>
        </div>
    )
}

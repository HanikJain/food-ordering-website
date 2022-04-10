import React, {useState, useContext} from 'react'
import classes from "./CartItem.module.css";
import Counter from "../UI/Counter";



export default function CartItem(props) {
    const [itemTotalAmount, setItemTotalAmount ] = useState(0);

    function handleChange(data){
        setItemTotalAmount((data * props.price).toFixed(2));
    }
    
    return (
        <div className = {classes.cartItem} >

            <div className = {classes.item}>
                <img src={props.src} />
                <div className = {classes.itemDetails}>
                    <div className = {classes.itemName}>{props.name}</div>
                    <div className = {classes.itemPrice}>&#x20b9; {props.price}</div>
                </div> 
            </div>     
            
            <div className = {classes.quantity}>
                <Counter 
                defaultValue = {props.amount} 
                onChange = {handleChange}
                onAdd = {props.onAdd} 
                onRemove = {props.onRemove}
                amount = {props.amount}
                />
                <div className = {classes.itemAmount}> &#x20b9; {(props.amount * props.price).toFixed(2)}</div>
            </div>
        </div>
    )
}

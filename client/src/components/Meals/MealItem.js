import React, {useState, useContext} from 'react'
import classes from './MealItem.module.css'
import Counter from "../UI/Counter";
import MealItemForm from './MealItemForm';
import CartContext from "../../store/cart-context"


export default function MealItem(props) {
    const [count, setCount] = useState(0);
    const [isValid, setIsValid] = useState(true);
    const cartCtx = useContext(CartContext);

    function handleChange(data) {
        setCount(data);
        if(count>0) {
            setIsValid(true);
        }
    }

    function addToCartHandler(amount){
        cartCtx.addItem({
            id : props.id,
            name : props.name,
            amount : amount,
            price : props.price,
            src : props.src
        })
    }

    return (
        <div className={classes.mealItem}> 
            <div className={classes.image}>
                <img className = {classes.img} src={props.src} alt={props.alt} />
            </div>
            <div className={classes.name}>
                <h2>{props.name}</h2>
            </div>
            <div className={classes.description}>
                <h5>{props.description}</h5>
            </div>
            <div className={classes.quantity}>
                    <div className={classes.price}>&#x20b9; {props.price}</div>
                    <MealItemForm id={props.id} onAddToCart={addToCartHandler} />

            </div>
            <p className={`${classes.errorMsg} ${!isValid && classes.error} `}>
                Empty Cart, Enter an item.
            </p>
        </div>
    )
}

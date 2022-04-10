import React, {useContext, useState, useEffect, Fragment} from 'react'
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import Checkout from "./Checkout"
import {useAuth} from "../../store/AuthContext"
import { useNavigate } from "react-router-dom";

export default function Cart(props) {
    const d = new Date();
    const cartItems = useContext(CartContext);
    const cartMeals = cartItems.items;
    const [cartTotalAmount, setCartTotalAmount] = useState({cartEmpty : true, totalAmount:0});
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const [errorSubmiting, setErrorSubmiting] = useState(false);
    const {currentUser} = useAuth();
    const navigate = useNavigate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        let amount = 0;
        function cartItem(item) {
            amount += item.amount * item.price;
        }

        cartMeals.map(cartItem);
        if (cartMeals.length  !== 0){
        setCartTotalAmount({
            cartEmpty: false,
            totalAmount : amount.toFixed(2)
        }); 
        }else{
            setCartTotalAmount({
                cartEmpty: true,
                totalAmount : 0
            });
        }

    }, [cartMeals]);


    const cartItemRemoveHandler = (id) => {
        cartItems.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartItems.addItem({ ...item, amount: 1 });
      };
      

    function cartItem(item) {
        return <CartItem 
        key = {item.id } 
        amount = {item.amount} 
        src = {item.src} 
        name = {item.name} 
        price = {item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
        />
    } 

    function orderHandler(event) {
        event.preventDefault();
        if(!currentUser){
            navigate("/login");
        }else{
            setIsCheckout(true);
        }

    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        const response = await fetch("/api/order", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userData: userData,
                orderItems: cartMeals,
                email: currentUser.email,
                amount: cartTotalAmount.totalAmount,
                month: months[d.getMonth()],
                day:d.getDate(),

            })
        });


        if(response.ok) {
            setIsCheckout(false);
            setIsSubmitting(false);
            setDidSubmit(true);
            cartItems.clearCart();
            navigate("/dashboard");
        }
        else{
            setErrorSubmiting(true);
            setIsSubmitting(false);
            setDidSubmit(false);
        }
    }

    const modalActions = 
        <div className = {classes.order}>
            <button type = "button" className={classes.buttonOutline} onClick={props.onHideCart}>Close</button>
            {!cartTotalAmount.cartEmpty && 
            <button 
            type = "button" 
            className={classes.button} 
            onClick = {orderHandler} 
            >Checkout</button>}
        </div>

    const orderIsSubmitting = <p>Confirming order...</p>;
    const errorWhileConfirmingOrder = 
        <Fragment>
            <p>Something went wrong, order failed.</p>
            <button type = "button" className={classes.buttonOutline} onClick={props.onHideCart}>Okay</button>
        </Fragment>


    const orderIsSubmitted = 
        <Fragment>
            <p>Order is placed successfully.</p>
            <button type = "button" className={classes.buttonOutline} onClick={props.onHideCart}>Okay</button>
        </Fragment>
     
    return (
        <Fragment>
        {!isCheckout && !isSubmitting && !didSubmit && <Modal onClick={props.onHideCart} >
            <h2>Your Cart</h2>
            {cartMeals.map(cartItem)}
            {!cartTotalAmount.cartEmpty && <div className = {classes.TotalAmount}>
                <span>Total Amount:</span>
                <span> &#x20b9; {cartTotalAmount.totalAmount}</span>
            </div>}
            {!isCheckout && modalActions}  
        </Modal>}

        {isCheckout && !isSubmitting && !didSubmit && <Modal><Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} payAmount={cartTotalAmount.totalAmount} /></Modal>}

        {isSubmitting && !didSubmit && !errorSubmiting &&<Modal>{orderIsSubmitting} </Modal>}
        {didSubmit && !isSubmitting && !errorSubmiting && <Modal>{orderIsSubmitted } </Modal>}
        {errorSubmiting && !isSubmitting && !didSubmit &&  <Modal>{errorWhileConfirmingOrder } </Modal>}
        
        </Fragment>
    )
}

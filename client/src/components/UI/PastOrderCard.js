import React from 'react'
import styles from "./PastOrderCard.module.css"


function CartItem(props) {
    return (
    <div className = {styles.cartItem} >

        <div className = {styles.item}>
            <img src={props.order.src} />
            <div className = {styles.itemDetails}>
                <div className = {styles.itemName}>{props.order.name}</div>
                <div className = {styles.itemPrice}>&#x20b9; {props.order.price} x {props.order.amount} </div>
            </div> 
        </div>     

        <div className = {styles.quantity}>
            <div className = {styles.itemAmount}>&#x20b9; {(props.order.amount * props.order.price).toFixed(2)}</div>
        </div>

    </div>
    );
}


export default function PastOrderCard(props) {
  return (
    <div className={styles.userOrdersCard}>
        <div className = {styles.itemHeader}>
            <div className = {styles.itemTime}>
                    <span>{props.data.day} </span> <span> {props.data.month} </span> 
            </div>
            <div className = {styles.itemOrder}>
                Total &#x20b9; {props.data.amount}
            </div>
        </div>
        {props.data.orderItems.map((orderItem) => <CartItem order={orderItem}/>)}
    </div>
  )
}

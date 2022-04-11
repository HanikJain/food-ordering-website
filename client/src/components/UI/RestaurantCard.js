import React from 'react'
import { Link } from "react-router-dom";
  
import { ReactComponent as RedHeart } from '../../assets/icons/red-heart.svg';

import styles from './RestaurantCard.module.css'


export default function RestaurantCard(props) {
    let cuisine = "";
    cuisine+= props.cuisine.map((cuisine) => (" " + cuisine.name)  )

  return (
    <div className={styles.restaurantCard}>
        {/* Image Card */}

        <div 
        className={styles.restaurantImage} 
        style={{background : `url(${props.imageUrl}) no-repeat`, backgroundSize: "100%"}}
        >
            <div className={styles.restaurantImageContent}  >

                <div className={styles.ratings}>
                    <span> <RedHeart /> </span>
                    <span>{props.ranking}</span>
                </div> 

                <div className={styles.priceRange} >{props.price}</div>
            </div>
        </div>

        <div className={styles.restaurantCardBody}>
            <div className={styles.col1}>
                {/* title description cuisine */}
                <div className={styles.restaurantCardName} >
                    {props.name.length >= 26 ? (props.name.slice(0,23) + "..." ) : props.name}
                </div>
                <div className={styles.restaurantCardCuisine} >
                    {cuisine.length > 80 ? (cuisine.slice(0,75) + "..." ) : cuisine}
                </div>
            </div>
            {/* <div className={styles.col2}>
                <div>
                    {props.isClosed ? "Closed" : "Open"}
                </div>
            </div> */}
        </div>
        <Link to={`/restaurants/${props.id}`} className={styles.btn}>
            Check Details
        </Link>
       
    </div>
  )
}

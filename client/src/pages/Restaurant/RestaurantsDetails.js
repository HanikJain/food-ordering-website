import React, {useState, useEffect, useContext} from 'react'
import {useSelector} from "react-redux"
import { useParams } from "react-router-dom";

import MealItem from '../../components/Meals/MealItem';
import CartContext from '../../store/cart-context';
import NavBar from "../../components/Layout/NavBar";
import Layout from '../../components/UI/bootstrap/Layout';
import CarouselComponent from '../../components/UI/bootstrap/Carousel';
import CardCompnent, {CardQuote} from '../../components/UI/bootstrap/Card'

import styles from "./RestaurantsDetails.module.css";

export default function RestaurantsDetails() {
  const restaurantList = useSelector((state) => state.restaurant.restaurants)
  const cartItems = useContext(CartContext);
  const params = useParams();

  const [cuisine, setCuisine] = useState([]);
  const [cuisineData, setCuisineData] = useState()
  let restaurant;

  useEffect(() => {
    async function fetchCuisine(){
      const resposne = await fetch("/api/cuisine");
      if(resposne.ok){
        const results = await resposne.json();
        setCuisine(results);
      }
    }

    fetchCuisine();


  }, []);

    

  for (let res of restaurantList) {
    if(res.location_id === params.id )
    restaurant = res;
  } 

  useEffect(() => {
    let c = [];
    if(cuisine.length > 0){
      for( let res of restaurant.cuisine){
        for( let cui of cuisine){
          if(cui.key === res.key){
            c.push(cui.items);
          }
        }
      }
      setCuisineData(c);
    }
  }, [cuisine, restaurant]);


    const cartItemRemoveHandler = (id) => {
      cartItems.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      cartItems.addItem({ ...item, amount: 1 });
    };

    function oneMeal(meal) {
      return <MealItem 
      src = {meal.src} 
      alt = {meal.name} 
      key = {meal.id}
      id = {meal.id}
      name = {meal.name}
      description = {meal.description} 
      price = {meal.price}
      amount = {meal.amount}
      onRemove={cartItemRemoveHandler.bind(null, meal.id)}
      onAdd={cartItemAddHandler.bind(null, meal)}
      />     
    }

    function mealItems (meals){
      return Object.keys(meals).map((key) => {
        let meal = meals[key];
        return <MealItem 
        src = {meal.src} 
        alt = {meal.name} 
        key = {meal.id}
        id = {meal.id}
        name = {meal.name}
        description = {meal.description} 
        price = {meal.price}
        amount = {meal.amount}
        onRemove={cartItemRemoveHandler.bind(null, meal.id)}
        onAdd={cartItemAddHandler.bind(null, meal)}
        />     
      })
    }
    


    return (
      <div className={styles.restaurantsDetails}>
          <NavBar />
            <div className={styles.restaurantsDetailsBody}>
              <div className={styles.name}>
                {restaurant.name}
              </div>
              <CardQuote description={restaurant.description}/>
              <CarouselComponent />
              <div className={styles.availableMeals} >
                {cuisineData && cuisineData.map(mealItems)} 
              </div>
              <Layout res={restaurant}/>
            </div>
  
      </div>
    ) 

}

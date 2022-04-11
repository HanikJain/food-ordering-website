
import React, {useContext, useEffect, useState} from 'react'


import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import CartContext from '../../store/cart-context';

  
  export default function AvailableMeals() {
    const cartItems = useContext(CartContext);
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchMealsError, setFetchMealsError] = useState(null);

    useEffect(() => {
      async function fetchMeals() {
        const response = await fetch("/api/meals");
      

        if(!response.ok){
          throw new Error("Unable to fetch Meals");
        }

        const data = await response.json();
        
        let meals = [];

        for(const key in data) {
            meals.push({
                id: key,
                name: data[key].name,
                description: data[key].description,
                price: data[key].price,
                src: data[key].src,
            });
        }

        setIsLoading(false);
        setMeals(meals);
      }

      fetchMeals().catch((err) => {
        setIsLoading(false);  
        setFetchMealsError(err.message);
      });

    }, []);

    const cartItemRemoveHandler = (id) => {
        cartItems.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartItems.addItem({ ...item, amount: 1 });
      };

      function mealItem (meal){
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
      
      if(isLoading)
      return (<p className={classes.MealsLoading}> Loading... </p>);

      if(fetchMealsError)
      return (<p className={classes.MealsError}> {fetchMealsError} </p>);

      return (
          <div className={classes.availableMeals} >
              {meals.map(mealItem)} 
          </div>
      )
  }
  
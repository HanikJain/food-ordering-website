import React, {useState, Fragment} from "react";
import {useDispatch} from "react-redux"


import SearchInput from "../../components/UI/SearchInput";
import RestaurantCard from "../../components/UI/RestaurantCard";
import { restaurantActions } from "../../store/restaurants";
import NavBar from "../../components/Layout/NavBar";

import useFetchRestaurants from '../../hooks/use-fetchRestaurants'
import styles from "./Restaurants.module.css"



export default function Restaurants() {
    const dispatch = useDispatch();
    const {isFetching, isError, data} = useFetchRestaurants();
    const [inValid, setInValid] = useState({isValid:false, msg: ""})    
    const [searchData, setSearchData] = useState({exists:false, data: [], msg:"", active:false, searchString: ""});
    let searchDataArray = [];




    function inputChangeHandler(data){
      if(data.trim() === ''){
        setInValid({isValid: true, msg: "Invalid input!"});
      } else{
        setInValid({isValid:false, msg: ""});
      }
    }

    function inputClickHanlder(d){

      let searchStr = d.trim().length > 0 ? d[0].toUpperCase() + d.slice(1): '';
    
      for (let a of data){
        if(a.name !== undefined && a.name.trim().includes(searchStr)){
          searchDataArray.push(a);
        } 
      }

      if(searchDataArray.length > 0){
        setSearchData({exists:true, data: searchDataArray, msg: "", active: true, searchString: searchStr});
      } else {
        setSearchData({exists:false, data: searchDataArray, msg: "Not restaurant found!", active: true, searchString: searchStr});
      }
    }

         
    function dispatchRes(){
      dispatch(restaurantActions.setRestaurant(data));
    }

    dispatchRes();
    
    function restaurantList(res){
      if(res.location_id !== undefined  && res.cuisine !== undefined && res.price  !== undefined && res.name !== undefined && res.description !== undefined && res.raw_ranking && res.is_closed !== undefined &&  res.photo.images.medium.url !== undefined){
        return (
        <div className={styles.restaurant}>
                <RestaurantCard
                  key = {res.location_id}
                  id = {res.location_id}
                  cuisine= {res.cuisine}
                  price= {res.price}
                  name= {res.name}
                  description= {res.description}
                  ranking= {parseFloat(res.raw_ranking).toFixed(1)}
                  isClosed= {res.is_closed}
                  imageUrl= {res.photo.images.medium.url}
                  />
        </div>           
      );
      }
    }


    const noResult = 
    <Fragment>
        <p className= {styles.noResultsMatch} >{searchData.msg}</p>
    </Fragment>; 

  return (
    <Fragment>
        <NavBar />

        <div className={styles.body}>
            <h1>Our top restaurants</h1>

            {/* search */}
            <SearchInput 
            inputChangeHandler = {inputChangeHandler} 
            inputClickHanlder = {inputClickHanlder}
            inValid = {inValid.isValid}
            msg = {inValid.msg} 
            />

            {/* Fetching Restaurants */}
            {(isFetching && !isError) && <p className= {styles.fetch} >Fetching Restaurants... Wait for few seconds</p>}
            {(isError) && <p className= {styles.error} >Something went wrong</p>}
            { (!searchData.exists && searchData.active) &&   noResult}
            {(searchData.exists && searchData.active && searchData.searchString !== "") && <p className= {styles.noResultsMatch} > Results found for  <i className={styles.ResultsMatchKeyword}>" {searchData.searchString} "</i></p>}

            {(!isFetching && !isError) && 
            <div className={styles.restaurants}>
                {(data.length > 0 && !searchData.exists )&& (data.map(restaurantList)) }  
                {(searchData.exists && searchData.active) && searchData.data.map(restaurantList)}      
            </div>
            }


        </div>


    </Fragment>
  )
}

import React, {useState, useEffect} from 'react'

export default function useFetchRestaurants() {
    const [isFetching, setIsFetching] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setdata] = useState([]);
    
    useEffect(() => { 
        async function fetchRestaurants(){
            const response = await fetch("/api/restaurants");
            setIsFetching(false);
    
            if(!response.ok){
              setIsError(true);
            } else {
              const results = await response.json();
      
              localStorage.setItem("restaurants", JSON.stringify(results.data));
              setdata(results.data);    
            }      
          }
    
          if(!localStorage.getItem("restaurants")){
            fetchRestaurants();
          } else{
            let rest = JSON.parse(localStorage.getItem("restaurants"))
            setIsFetching(false);
            setdata(rest);
          }

    }, [])

    window.onbeforeunload = () => {
        localStorage.clear();
      };

    return {isFetching, isError, data};
}

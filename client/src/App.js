import React from "react";
import {Routes,Route, useNavigate} from "react-router-dom";



import LandingPage from "./pages/Landing/LandingPage";
import RegisterPage from "./pages/User/RegisterPage";
import LoginPage from "./pages/User/LoginPage";
import Restaurants from "./pages/Restaurant/Restaurants";
import Dashboard from "./pages/User/Dashboard";
import CartProvider from "./store/CartProvider";
import {AuthProvider} from "./store/AuthContext";
import RestaurantsDetails from "./pages/Restaurant/RestaurantsDetails"


function App() {

    return (
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path = "/" element = {<LandingPage/>} />
            <Route path="/register" element = {<RegisterPage/>} />
            <Route path="/login" element = {<LoginPage/>} />
            <Route path="/dashboard" element = {<Dashboard />} />
            <Route path = "/restaurants" element = {<Restaurants />} />
            <Route path="/restaurants/:id" element = {<RestaurantsDetails />}/>
          </Routes>
        </CartProvider>
      </AuthProvider>
    );
}

export default App;

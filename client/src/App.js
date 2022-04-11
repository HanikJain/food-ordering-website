import React, {Suspense} from "react";
import {Routes,Route} from "react-router-dom";

import CartProvider from "./store/CartProvider";
import {AuthProvider} from "./store/AuthContext";
import LoadingSpinner from "./components/UI/LoadingSpinner"

const LandingPage = React.lazy(() => import('./pages/Landing/LandingPage'));
const RegisterPage = React.lazy(() => import('./pages/User/RegisterPage'));
const LoginPage = React.lazy(() => import('./pages/User/LoginPage'));
const Restaurants = React.lazy(() => import('./pages/Restaurant/Restaurants'));
const Dashboard = React.lazy(() => import('./pages/User/Dashboard'));
const RestaurantsDetails = React.lazy(() => import('./pages/Restaurant/RestaurantsDetails'));



function App() {

    return (
      <AuthProvider>
        <CartProvider>
          <Suspense   fallback={<div className="centered"><LoadingSpinner /></div>}>
            <Routes>
              <Route path = "/" element = {<LandingPage/>} />
              <Route path="/register" element = {<RegisterPage/>} />
              <Route path="/login" element = {<LoginPage/>} />
              <Route path="/dashboard" element = {<Dashboard />} />
              <Route path = "/restaurants" element = {<Restaurants />} />
              <Route path="/restaurants/:id" element = {<RestaurantsDetails />}/>
            </Routes>
          </Suspense>
        </CartProvider>
      </AuthProvider>
    );
}

export default App;

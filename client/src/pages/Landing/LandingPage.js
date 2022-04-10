import React, {Fragment} from "react";
import LandingCard from "../../components/Layout/LandingCard";
import Meals from "../../components/Meals/Meals";
import NavBar from "../../components/Layout/NavBar";


export default function LandingPAge () {  
    return (
      <Fragment>
        <NavBar />
        <LandingCard />
        <Meals />
      </Fragment>
    );
}

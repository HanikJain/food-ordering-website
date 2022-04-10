import React, {useState, Fragment} from "react";
import Header from "./Header";
import Cart from "../Cart/Cart";

export default function NavBar() {
    const [cartIsShown, setCartIsShown] = useState(false);
  
    const showCartHandler = () => {
      setCartIsShown(true);
    }
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    }
  
    return (
      <Fragment>
        {cartIsShown && <Cart onHideCart = {hideCartHandler}/>}
        <Header onShowCart={showCartHandler} />
      </Fragment>
    );
}

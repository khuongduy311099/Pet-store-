import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";

import TotalCartItem from "./totalCartItem";
import "./cartIcon.scss";
import { useState, useContext } from "react";
import { ItemContext } from "../../itemContext/itemContext";

function CartIcon() {
  const cartContext = useContext(ItemContext);
  return (
    <Tippy
      render={(attr) => <TotalCartItem />}
      interactive
      offset={[0, 60]}
      animation={false}
      delay={[200, 800]}
    >
      <div className="cart-wrapper">
        <div className="cart-items">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div
          className="cart-quantity"
          style={
            cartContext.currentQuantity > 0
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          {cartContext.currentQuantity ? cartContext.currentQuantity : ""}
        </div>
      </div>
    </Tippy>
  );
}

export default CartIcon;

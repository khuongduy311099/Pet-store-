import { useState } from "react";
import "./cartIcon.scss";

function Quantity({ cartItem, onChange }) {
  const [quantity, setQuantity] = useState(
    parseInt(
      JSON.parse(localStorage.getItem("currentCart"))
        .filter((item) => item.name === cartItem.name)
        .map((item) => item.quantity)
    )
  );

  const handleItemCartIncrease = (price, item) => {
    setQuantity(quantity + 1);
    onChange(price * (quantity + 1), { ...cartItem, quantity: quantity + 1 });
  };
  const handleItemCartDecrease = (price) => {
    if (cartItem.quantity > 1) {
      setQuantity(quantity - 1);
      onChange(price * (quantity - 1), {
        ...cartItem,
        quantity: quantity - 1,
      });
    } else if (cartItem.quantity === 1) {
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <ul className="quantity">
        <li
          onClick={() => handleItemCartIncrease(cartItem.price, cartItem)}
          className="quantity-btn"
        >
          +
        </li>
        <li>{quantity}</li>
        <li
          onClick={() => handleItemCartDecrease(cartItem.price, cartItem)}
          className="quantity-btn"
        >
          -
        </li>
      </ul>
    </div>
  );
}

export default Quantity;

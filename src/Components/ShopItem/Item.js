import styles from "./shopItem.scss";

function Item({ age = 3, color = "Brown", typeDog = "Chow Chow" }) {
  return (
    <div className="item-wrapper">
      <div className="item-image">
        <img
          className="item-1st-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPk38AexmE0nbQiert5FQi1-adh5A_D_QMTg&usqp=CAU"
          alt="product"
        />
        <img
          className="item-2nd-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2LN7wCin9HFDRJDxY0Tsf_azBeGVAOapvQ&usqp=CAU"
          alt="product"
        />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">Age: {`${age} months`}</div>
        <div className="item-info">Color: {`${color}`}</div>
        <div className="item-info">Type of Dog: {`${typeDog}`}</div>
      </div>
    </div>
  );
}

export default Item;

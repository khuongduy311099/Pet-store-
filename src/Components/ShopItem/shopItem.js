import { faDog } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "antd";
import { useState } from "react";
import styles from "./shopItem.scss";
import Item from "./Item";
function ShopItem() {
  const typesDog = [
    "Pug",
    "Pitbull",
    "Golden",
    "Labrador",
    "Rotweiller",
    "Pom",
    "Damatian",
    "Corgi",
    "Bull Dog",
  ];
  const [types, setTypes] = useState(typesDog.slice(0, 3));
  const [lessBtn, setLessBtn] = useState(false)
  const handleSeeMore = () => {
    setLessBtn(prev => !prev)
    setTypes(typesDog);
  };
  const handleSeeLess = () => {
    setLessBtn(prev => !prev)
    setTypes(typesDog.slice(0, 3))
  }
  return (
    <div className="shopItem-wrapper">
      <div className="shopItem-header">
        <img 
          className="header-pic"
          src="https://img.freepik.com/premium-vector/cartoon-cute-dogs-with-big-bone_52569-1318.jpg?w=2000"
          alt="header"
        />
        <div className="alt-text">Check out our puppies!!!!</div>
      </div>
      <div className="shopItem-sidebar">
        <ul>
          {types.map((type, index) => (
            <li className="shopItem-sidebar-Item" key={index}>
              {type}
            </li>
          ))}
        </ul>
        <div style={lessBtn ? {display: "none"} : {display:"flex"}} className="shopItem-sidebar-Item enableType" onClick={handleSeeMore}>
          See More
        </div>
        <div style={lessBtn ? {display:"flex"} : {display: "none"}} className="shopItem-sidebar-Item enableType" onClick={handleSeeLess}>
          See Less
        </div>
      </div>
      <div className="item-container">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default ShopItem;

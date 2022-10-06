import { faDog } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./shopItem.scss";
import Item from "./Item";
import { Col, Row } from "antd";
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
    "Chow Chow",
  ];
  const [types, setTypes] = useState(typesDog.slice(0, 3));
  const [lessBtn, setLessBtn] = useState(false);
  const handleSeeMore = () => {
    setLessBtn((prev) => !prev);
    setTypes(typesDog);
  };
  const handleSeeLess = () => {
    setLessBtn((prev) => !prev);
    setTypes(typesDog.slice(0, 3));
  };
  return (
    <div className="shopItem-wrapper">
      <div className="shopItem-sidebar">
        <ul>
          {types.map((type, index) => (
            <li className="shopItem-sidebar-Item" key={index}>
              {type}
            </li>
          ))}
        </ul>
        <div
          style={lessBtn ? { display: "none" } : { display: "flex" }}
          className="shopItem-sidebar-Item enableType"
          onClick={handleSeeMore}
        >
          See More
        </div>
        <div
          style={lessBtn ? { display: "flex" } : { display: "none" }}
          className="shopItem-sidebar-Item enableType"
          onClick={handleSeeLess}
        >
          See Less
        </div>
      </div>
      <header className="header">Puppies</header>
      <Row className="item-container">
        <Col span={8}>
          <Item />
        </Col>
        <Col span={8}>
          <Item />
        </Col>
        <Col span={8}>
          <Item />
        </Col><Col span={8}>
          <Item />
        </Col><Col span={8}>
          <Item />
        </Col><Col span={8}>
          <Item />
        </Col>
      </Row>
    </div>
  );
}

export default ShopItem;

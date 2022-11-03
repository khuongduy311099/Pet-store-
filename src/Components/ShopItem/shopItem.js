import { faDog } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styles from "./shopItem.scss";
import Item from "./Item";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
// itemContext
import { useContext } from "react";
import { ItemContext } from "../../itemContext/itemContext";

// translation
import { useTranslation } from "react-i18next";
import i18n from "../../translation/i18n";
function ShopItem() {
  const [t] = useTranslation();
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
  const itemContext = useContext(ItemContext);
  return (
    <div id="product">
      <Row className="shopItem-title">
        <Row>
          <Col span={12} offset={6}>
            <header className="header">Puppies</header>
          </Col>
        </Row>
      </Row>
      <Row className="shopItem-wrapper">
        <Col span={6} className="shopItem-sidebar">
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
            {t("See more")}
          </div>
          <div
            style={lessBtn ? { display: "flex" } : { display: "none" }}
            className="shopItem-sidebar-Item enableType"
            onClick={handleSeeLess}
          >
            {t("See less")}
          </div>
        </Col>
        <Col span={18} className="item-container">
          {itemContext.listItem.map((item, index) => (
            <Col sm={12} xxl={8}>
              <Link
                to="/product"
                onClick={() => {
                  localStorage.setItem("currentItem", JSON.stringify(item));
                }}
              >
                <Item name={item.name} key={index} items={item} />
              </Link>
            </Col>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default ShopItem;

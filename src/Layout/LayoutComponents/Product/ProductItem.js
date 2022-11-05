import { Button, Col, Row } from "antd";
import React from "react";
import "./product.scss";
import Sidebar from "../Sidebar/sidebar";
import LayoutHeader from "../Header/header";
// itemContext
import { useContext } from "react";
import { ItemContext } from "../../../../src/itemContext/itemContext";
// translation
import i18n from "../../../translation/i18n";
import { useTranslation } from "react-i18next";
function ProductItem() {
  const [t] = useTranslation();
  const itemContext = JSON.parse(localStorage.getItem("currentItem"));
  const cartContext = useContext(ItemContext);
  return (
    <div className="layout-wrapper">
      <Col span={24} className="product-wrapper">
        <Row align="middle" justify="center">
          <div className="product-title">{itemContext.type}</div>
        </Row>
        <Row>
          <Col span={2} className="product-sidebar">
            <Sidebar />
          </Col>
          <Col className="product-content" span={9} offset={4}>
            <Row className="product-img-container">
              <img
                className="product-img"
                src={itemContext?.img1}
                alt={itemContext?.name}
              />
            </Row>
          </Col>
          <Col className="product-desc" span={9}>
            <Row className="product-detail">
              <div
                className="details-wrapper"
                style={{
                  borderBottom: "1px solid black",
                }}
              >
                <label className="details-label">{t("Details")}</label>
                <ul>
                  <li className="desc-detail">
                    {t("Color")}: {t(itemContext?.color)}
                  </li>
                  <li className="desc-detail">
                    {t(itemContext?.age)} {t("months")}
                  </li>
                  <li className="desc-detail">
                    {t("Vaccination Status")}: {itemContext?.vaccinationStatus}
                  </li>
                </ul>
              </div>
            </Row>
            <Row className="product-description">
              {t(itemContext?.description)}
            </Row>
            <Row align="center" justify="center">
              <div>
                <Button
                  size="large"
                  type="primary"
                  shape="round"
                  onClick={() => {
                    cartContext.handleAddToCart(itemContext);
                    cartContext.handleLocalCart(itemContext);
                  }}
                >
                  {t("Add to Cart")}
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default ProductItem;

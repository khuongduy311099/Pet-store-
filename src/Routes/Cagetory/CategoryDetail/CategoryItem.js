import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import "../category.scss";
import "../../../translation/i18n";
import { useTranslation } from "react-i18next";

import { GlobalContext } from "../../../Context/globalContext";
import { useContext } from "react";
function CategoryDetailItem({ item }) {
  const [t] = useTranslation();
  const globalContext = useContext(GlobalContext);
  return (
    <Col
      span={5}
      offset={1}
      className={
        !globalContext.darkmode
          ? "category-detail-item-wrapper"
          : "category-detail-item-wrapper-dark-mode"
      }
      style={{ marginBottom: "20px" }}
    >
      <Link to={`/product/${item?.name}`}>
        <Row align="center" justify="center">
          <img
            className="category-img"
            src={item?.img?.img1}
            alt={item?.name}
          ></img>
        </Row>
        <Row
          className={
            !globalContext.darkmode
              ? "category-detail-name"
              : "category-detail-name-dark-mode"
          }
        >
          {t(item?.name)} {!!item.id ? item.id : ""}
        </Row>
        <Row
          className={
            !globalContext.darkmode
              ? "category-detail-price"
              : "category-detail-price-dark-mode"
          }
        >
          {item?.price} VND
        </Row>
      </Link>
    </Col>
  );
}

export default CategoryDetailItem;

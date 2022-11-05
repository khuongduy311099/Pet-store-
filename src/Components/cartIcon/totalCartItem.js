import {Button, Col, Row} from "antd";
import "./cartIcon.scss";

//translation
import i18n from "../../translation/i18n";
import {useTranslation} from "react-i18next";
//items Context
import {useContext, useEffect} from "react";
import {ItemContext} from "../../itemContext/itemContext";
import Quantity from "./quantity";

function TotalCartItem() {
    const cartContext = useContext(ItemContext);
    const [t] = useTranslation();

    useEffect(() => {
        cartContext.setTotal(cartContext.totalCart(cartContext.localCart));
    }, [cartContext.localCart]);

    return cartContext.localCart.length > 0 ? (
        <div className="total-cart">
            <label className="cart-label">{t("Your Cart")}</label>
            <ul>
                {cartContext.localCart.map((item, index) => {
                    const totalItemPrice = item.quantity
                        ? item.price * item.quantity
                        : item.price;
                    return (
                        <li className="cart-item-wrapper">
                            <Row className="item-name">{item.name}</Row>
                            <Row style={{marginBottom: "12px"}}>
                                <Col className="item-img-wrapper" span={11}>
                                    <img
                                        className="item-img"
                                        src={item.img1}
                                        alt={item.name}
                                    />
                                </Col>
                                <Col span={11} offset={2}>
                                    <ul>
                                        <li className="item-detail">
                                            {t("Color")}: {t(item.color)}
                                        </li>
                                        <li className="item-detail">
                                            {t("Age")}: {t(item.age)}
                                        </li>
                                        <li className="item-detail">
                                            {t("Price")} : {t(item.price)} VND
                                        </li>
                                        <li className="item-detail">
                                            {t("totalPrice")} : {totalItemPrice}{" "}
                                            VND
                                        </li>
                                    </ul>
                                    <Quantity
                                        onChange={cartContext.handleChange}
                                        cartItem={item}
                                    />
                                </Col>
                            </Row>
                        </li>
                    );
                })}
            </ul>
            <div className="total-price-cart">
                {t("Total")}: {cartContext.total} VND
            </div>
        </div>
    ) : (
        <div className="empty-cart">
            {t("You don't have any items in your cart")}
        </div>
    );
}

export default TotalCartItem;

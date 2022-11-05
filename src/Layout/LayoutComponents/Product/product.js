import {Button, Col, Row} from "antd";
import React, {useState} from "react";
import "./product.scss";

//itemContext

// translation
import "../../../translation/i18n";
import {useTranslation} from "react-i18next";
import Privilege from "./privilegeBox";
function ProductItem({item}) {
    const [t] = useTranslation();
    let listImg = Object.values(item?.img);

    const [currentItemImage, setCurrentItemImage] = useState(listImg[0]);
    const handleCarousel = (i) => {
        setCurrentItemImage(listImg[i]);
    };
    return (
        <Row align="center" justify="center" style={{marginTop: "5%"}}>
            <Col
                span={24}
                style={{
                    display: "flex",
                    maxWidth: "1500px",
                    marginLeft: "4%",
                }}
            >
                <Col style={{alignItems: "right"}} span={12}>
                    <Row>
                        <Col span={12} offset={6}>
                            <img
                                className="main-img"
                                src={currentItemImage}
                                alt={item?.name}
                            />
                        </Col>
                    </Row>
                    <Row
                        align="center"
                        justify="space-between"
                        className="carousel"
                    >
                        {listImg.map((item, i) => {
                            let active;
                            if (item === currentItemImage) {
                                active = true;
                            } else active = false;
                            return (
                                <Col
                                    className="sub-img-wrapper"
                                    onClick={() => handleCarousel(i)}
                                    span={4}
                                >
                                    <img
                                        style={
                                            active
                                                ? {border: "2px solid red"}
                                                : {border: "2px solid white"}
                                        }
                                        className="sub-img"
                                        src={item}
                                        alt="demo"
                                    ></img>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col style={{width: "700px", marginTop: "3%"}} span={12}>
                    <Row className="product-title">
                        <h1>{t(item.name)}</h1>
                    </Row>
                    <Row className="product-price">{t(item.price)} Vnd</Row>
                    <Row style={{width: "fit-content", alignItems: "right"}}>
                        <Privilege />
                    </Row>
                    <Row>
                        <Button
                            style={{
                                width: "30%",
                                height: "46px",
                                marginLeft: "82px",
                                marginTop: "20px",
                                borderRadius: "16px",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                        >
                            {t("Add to Cart")}
                        </Button>
                    </Row>
                </Col>
            </Col>
        </Row>
    );
}

export default ProductItem;

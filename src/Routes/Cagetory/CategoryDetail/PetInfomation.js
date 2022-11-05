import {isContentEditable} from "@testing-library/user-event/dist/utils";
import {Button, Col, Row} from "antd";
import {t} from "i18next";
import {useState} from "react";
import {Link} from "react-router-dom";

import "../category.scss";
function PetInformation({information}) {
    const [moreContent, setMoreContent] = useState(false);
    const handleShowMore = () => {
        setMoreContent(!moreContent);
    };
    return (
        <div>
            <Row
                style={{marginTop: "50px", marginLeft: "50px"}}
                align="center"
                justify="center"
            >
                <Col className="content-inner" span={14}>
                    <Row
                        id={information[0]?.title}
                        className="information-title"
                    >
                        <h2>{information[0]?.title}</h2>
                    </Row>
                    {!!information[0]?.content.desc1 ? (
                        <Row
                            className={`information-desc ${
                                moreContent ? null : "breakpoint-show-content"
                            }`}
                        >
                            {information[0]?.content?.desc1}
                        </Row>
                    ) : (
                        <div style={{display: "none"}}></div>
                    )}
                    {!!information[0]?.content.desc2 ? (
                        <Row className="information-desc">
                            {information[0]?.content?.desc2}
                        </Row>
                    ) : (
                        <div style={{display: "none"}}></div>
                    )}
                    {!!information[0]?.content.desc3 ? (
                        <Row className="information-desc">
                            {information[0]?.content?.desc3}
                        </Row>
                    ) : (
                        <div style={{display: "none"}}></div>
                    )}
                    {moreContent ? (
                        <Row className="information-img-wrapper">
                            {information[0]?.content?.img1 ? (
                                <img
                                    className="information-img"
                                    src={information[0]?.content?.img1}
                                    alt={information[0]?.title}
                                ></img>
                            ) : (
                                <div style={{display: "none"}}></div>
                            )}
                        </Row>
                    ) : (
                        <div style={{display: "none"}}></div>
                    )}
                    {moreContent &&
                        information.map((item, index) =>
                            index === 0 ? (
                                <div style={{display: "none"}}></div>
                            ) : (
                                <div style={{marginBottom: "10px"}}>
                                    <Row
                                        id={item?.title}
                                        className="information-title"
                                    >
                                        <h2>{item?.title}</h2>
                                    </Row>
                                    {!!item?.content?.feature1 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature1}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc1 ? (
                                        <Row className="information-desc">
                                            - {item?.content.desc1}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img1 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img1}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.feature2 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature2}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc2 ? (
                                        <Row className="information-desc">
                                            - {item?.content.desc2}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img2 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img2}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.feature3 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature3}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc3 ? (
                                        <Row className="information-desc">
                                            - {item?.content.desc3}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img3 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img3}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.feature4 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature4}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc4 ? (
                                        <Row className="information-desc">
                                            - {item?.content.desc4}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img4 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img4}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.feature5 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature5}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc5 ? (
                                        <Row className="information-desc">
                                            - {item?.content.desc5}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img5 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img5}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                </div>
                            )
                        )}
                </Col>
                <Col className="appendix" span={5} offset={3}>
                    <Row className="appendix-title">Phụ lục</Row>
                    {information.map((item, i) => (
                        <Row>
                            <a
                                className="appendix-inner"
                                href={`${"#" + item.title}`}
                            >
                                {i + 1}. {item.title}
                            </a>
                        </Row>
                    ))}
                </Col>
            </Row>
            <Row align="center" justify="center">
                <Button
                    size="large"
                    style={{
                        fontSize: "22px",
                        width: "fit-content",
                        height: "fit-content",
                        borderRadius: "10px",
                        backgroundColor: "#b90000",
                        color: "white",
                    }}
                    onClick={handleShowMore}
                >
                    {!moreContent ? t("See more") : t("See less")}
                </Button>
            </Row>
        </div>
    );
}

export default PetInformation;

import {Card, Col, Row, Typography} from "antd";
import Carousel from "react-grid-carousel";
import {Link} from "react-router-dom";
import "./index.scss";

const {Meta} = Card;
const {Text} = Typography;

function ImageSlider({slides}) {
    return (
        <Carousel
            cols={5}
            rows={1}
            gap={20}
            loop={true}
            // showDots
            containerStyle={{width: "100%"}}
        >
            {slides &&
                slides.map((item, index) => (
                    <Carousel.Item key={index}>
                        <Row justify={"center"}>
                            <Link to={`/product/${item.name}`}>
                                <Col span={24}>
                                    <img
                                        className="img"
                                        src={item?.img?.img1}
                                        alt={item?.name}
                                    />
                                </Col>
                                <Col>
                                    <Text style={{color: "#b90000"}} strong>
                                        {item?.price}
                                    </Text>
                                </Col>
                            </Link>
                        </Row>
                    </Carousel.Item>
                ))}
        </Carousel>
    );
}

export default ImageSlider;

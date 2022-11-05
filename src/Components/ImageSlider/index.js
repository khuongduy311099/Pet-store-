import { Card, Col, Row, Typography } from "antd";
import Carousel from "react-grid-carousel";
import "./index.scss";

const { Meta } = Card;
const { Text } = Typography;

function ImageSlider({ slides }) {
  return (
    <Carousel
      cols={5}
      rows={1}
      gap={20}
      loop={true}
      // showDots
      containerStyle={{ width: "100%" }}
    >
      {slides &&
        slides.map((item, index) => (
          <Carousel.Item>
            <Row justify={"center"}>
              <Col span={24}>
                <img className="img" src={item?.url} />
              </Col>
              <Col>
                <Text style={{ color: "#b90000" }} strong>
                  0 đ
                </Text>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default ImageSlider;

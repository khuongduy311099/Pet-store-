import { Card, Col, Row, Typography } from "antd";
import Carousel from "react-grid-carousel";
import "./image-slider.scss";

const { Meta } = Card;
const { Text } = Typography;

function ImageSlider({ slides }) {
  return (
    <Carousel
      cols={5}
      rows={1}
      gap={10}
      loop={true}
      showDots
      containerStyle={{ width: "100%" }}
    >
      {slides &&
        slides.map((item, index) => (
          <Carousel.Item>
            <Row justify={"center"}>
              <Col span={24}>
                <img
                  className="img"
                  src="https://picsum.photos/800/600?random=1"
                />
              </Col>
              <Col span={24}>
                <Text>Hello</Text>
              </Col>
            </Row>
            {/* <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card> */}
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default ImageSlider;

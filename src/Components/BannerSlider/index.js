import { Card, Carousel, Col, Row, Typography } from "antd";
import "./index.scss";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const { Meta } = Card;
const { Text } = Typography;

function BannerSlider({ slides }) {
  return (
    <Carousel className="banner">
      {slides &&
        slides.map((item, index) => {
          return <img src={item.url} />;
        })}
    </Carousel>
  );
}

export default BannerSlider;

import { Card, Carousel, Col, Row, Typography } from "antd";
import "./index.scss";

function DogTab({ slides }) {
  return (
    <div className="container">
      <Row>
        <Col span={4}>
          <h2>
            <span className="h2-header"></span>
            hello
          </h2>
        </Col>
        <Col span={20}>hello</Col>
      </Row>
    </div>
  );
}

export default DogTab;

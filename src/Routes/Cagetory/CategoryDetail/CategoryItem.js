import {Col, Row} from "antd";
import "../category.scss";
function CategoryDetailItem({item}) {
    return (
        <Col
            className="category-detail-item-wrapper"
            style={{marginBottom: "20px"}}
            span={5}
            offset={1}
        >
            <Row>
                <img
                    className="category-img"
                    src={item.img}
                    alt={item.name}
                ></img>
            </Row>
            <Row className="category-detail-name">{item.name}</Row>
            <Row className="category-detail-price">{item.price} VND</Row>
        </Col>
    );
}

export default CategoryDetailItem;

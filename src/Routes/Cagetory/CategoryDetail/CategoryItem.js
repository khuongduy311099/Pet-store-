import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import "../category.scss";
function CategoryDetailItem({item}) {
    return (
        <Col
            className="category-detail-item-wrapper"
            style={{marginBottom: "20px"}}
            span={5}
            offset={1}
        >
            <Link to={`/product/${item.name}`}>
                <Row>
                    <img
                        className="category-img"
                        src={item?.img?.img1}
                        alt={item?.name}
                    ></img>
                </Row>
                <Row className="category-detail-name">{item?.name}</Row>
                <Row className="category-detail-price">{item?.price} VND</Row>
            </Link>
        </Col>
    );
}

export default CategoryDetailItem;

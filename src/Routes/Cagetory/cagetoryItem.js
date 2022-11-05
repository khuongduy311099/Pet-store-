import {Col, Row} from "antd";
import {Link} from "react-router-dom";

function CagetoryItem({item}) {
    return (
        <Col className="category-item-wrapper" span={5} offset={1}>
            <Link to={`/dog-category/${item.name}`}>
                <Row align="center">
                    <img className="item-img" src={item.img} alt={item.name} />
                </Row>
                <Row align="center" className="category-item-name">
                    {item.name}
                </Row>
            </Link>
        </Col>
    );
}

export default CagetoryItem;

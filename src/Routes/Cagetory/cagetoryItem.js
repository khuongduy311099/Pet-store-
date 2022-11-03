import {Col, Row} from "antd";

function CagetoryItem({item}) {
    return (
        <Col className="category-item-wrapper" span={5} offset={1}>
            <Row align="center">
                <img className="item-img" src={item.img} alt={item.name} />
            </Row>
            <Row align="center" className="category-item-name">
                {item.name}
            </Row>
        </Col>
    );
}

export default CagetoryItem;

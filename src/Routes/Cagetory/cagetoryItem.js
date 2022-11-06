import {Col, Row} from "antd";
import {Link} from "react-router-dom";

//trans
import "../../translation/i18n";
import {useTranslation} from "react-i18next";

function CagetoryItem({item}) {
    const [t] = useTranslation();
    return (
        <Col className="category-item-wrapper" span={5} offset={1}>
            <Link to={`/${encodeURI(item?.name)}`}>
                <Row align="center">
                    <img className="item-img" src={item.img} alt={item.name} />
                </Row>
                <Row align="center" className="category-item-name">
                    {t(item.name)}
                </Row>
            </Link>
        </Col>
    );
}

export default CagetoryItem;

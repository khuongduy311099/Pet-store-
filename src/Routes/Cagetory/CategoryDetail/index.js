import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import CategoryDetailItem from "./CategoryItem";
import PetInformation from "./PetInfomation";

function CategoryDetailItems({item}) {
    return (
        <Col span={24}>
            <Row
                align="center"
                justify="center"
                style={{
                    borderBottom: "10px solid #f2f2f2",
                    paddingBottom: "20px",
                }}
            >
                {!!item.listProduct ? (
                    item.listProduct.map((item) => (
                        <CategoryDetailItem item={item} />
                    ))
                ) : (
                    <Row
                        style={{
                            height: "200px",
                            fontSize: "30px",
                            color: "#999",
                            lineHeight: "200px",
                        }}
                    >
                        This Type Currently Don't Have Any Product
                    </Row>
                )}
            </Row>
            <PetInformation information={item.information} />
        </Col>
    );
}

export default CategoryDetailItems;

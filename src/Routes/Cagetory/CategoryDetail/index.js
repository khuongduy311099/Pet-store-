import {Col, Row} from "antd";
import CategoryDetailItem from "./CategoryItem";
import PetInformation from "./PetInfomation";
import PetInfomation from "./PetInfomation";

function CategoryDetailItems({listItem}) {
    listItem = [
        {
            name: "Pug 1",
            price: "5.000.000",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/07/Pug-Vang-Kim-C12243-1.jpg",
        },
        {
            name: "Pug 2",
            price: "5.000.000",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/07/Pug-Vang-Kim-C12242-1.jpg",
        },
        {
            name: "Pug 3",
            price: "5.000.000",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/C12136-1.jpg",
        },
        {
            name: "Pug 4",
            price: "5.000.000",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/C12137-1.jpg",
        },
        {
            name: "Pug 5",
            price: "5.000.000",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/C12135-0.jpg",
        },
        {
            name: "Pug 6",
            price: "5.000.000",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/C12134-1.jpg",
        },
    ];
    return (
        <Col span={24}>
            <Row
                style={{
                    borderBottom: "10px solid #f2f2f2",
                    paddingBottom: "20px",
                }}
            >
                {listItem.map((item) => (
                    <CategoryDetailItem item={item} />
                ))}
            </Row>
            <PetInformation />
        </Col>
    );
}

export default CategoryDetailItems;

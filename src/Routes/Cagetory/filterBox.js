import {Row, Col} from "antd";
import "./category.scss";

function FilterBox() {
    return (
        <Col span={18} className="filter-box-wrapper">
            <Row style={{marginTop: "10px"}}>
                <Col className="select-wrapper" span={8}>
                    <select className="filter-box-select">
                        <option>Chọn Kiểu Lông</option>
                        <option>Dài</option>
                        <option>Ngắn</option>
                        <option>Nhỡ</option>
                    </select>
                </Col>
                <Col className="select-wrapper" span={8}>
                    <select className="filter-box-select">
                        <option>Chọn Kích Thước</option>
                        <option>Nhỏ</option>
                        <option>Trung</option>
                        <option>Lớn</option>
                    </select>
                </Col>
                <Col className="select-wrapper" span={8}>
                    <select className="filter-box-select">
                        <option>Chọn Mục Đích Nuôi</option>
                        <option>Làm Cảnh & Bầu Bạn</option>
                        <option>Canh Gác & Bảo vệ</option>
                    </select>
                </Col>
            </Row>
            <Row style={{marginBottom: "10px"}}>
                <Col className="select-wrapper" span={8}>
                    <select className="filter-box-select">
                        <option>Chọn Mức Độ Phổ Biến</option>
                        <option>Hot</option>
                        <option>Trung Bình</option>
                        <option>Độc hiếm</option>
                    </select>
                </Col>
                <Col className="select-wrapper" span={8}>
                    <select className="filter-box-select">
                        <option>Chọn Nhu Cầu Vận Động</option>
                        <option>Thấp</option>
                        <option>Trung Bình</option>
                        <option>Cao</option>
                    </select>
                </Col>
                <Col className="select-wrapper" span={8}>
                    <select className="filter-box-select">
                        <option>Chọn Nhóm Chó</option>
                        {/* map qua các giống chó */}
                    </select>
                </Col>
            </Row>
        </Col>
    );
}

export default FilterBox;

import {Button, Col, Row} from "antd";
import CagetoryItem from "./cagetoryItem";
import {Select} from "antd";
import {useState} from "react";

import {dogData} from "../../Data";
import {Link} from "react-router-dom";

//icon
import {ReloadOutline} from "@ant-design/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateBack, faRotateForward} from "@fortawesome/free-solid-svg-icons";
function Cagetory({listItem = dogData}) {
    const filterValue = {
        hair: "0",
        size: "0",
        purpose: "0",
        popularity: "0",
        activity: "0",
        pattern: "0",
    };
    const [renderList, setRenderList] = useState(listItem);
    const handleChangeHair = (value, option) => {
        Object.keys(filterValue).map((item) => {
            if (item === "hair") {
                filterValue[item] = option.value;
            }
        });

        setRenderList(
            renderList.filter((item, index) => item.hair === filterValue.hair)
        );
    };
    const handleChangeSize = (value, option) => {
        Object.keys(filterValue).map((item) => {
            if (item === "size") {
                filterValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter((item, index) => item.size === filterValue.size)
        );
    };
    const handleChangePurpose = (value, option) => {
        Object.keys(filterValue).map((item) => {
            if (item === "purpose") {
                filterValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.purpose === filterValue.purpose
            )
        );
    };
    const handleChangePopularity = (value, option) => {
        Object.keys(filterValue).map((item) => {
            if (item === "popularity") {
                filterValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.popularity === filterValue.popularity
            )
        );
    };
    const handleChangeActivity = (value, option) => {
        Object.keys(filterValue).map((item) => {
            if (item === "activity") {
                filterValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.activity === filterValue.activity
            )
        );
    };
    const handleChangePattern = (value, option) => {
        Object.keys(filterValue).map((item) => {
            if (item === "pattern") {
                filterValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.pattern === filterValue.pattern
            )
        );
    };

    const handleResetFilter = () => {
        setRenderList(listItem);
    };
    return (
        <Col span={24}>
            <Row align="center" justify="center">
                <Col span={18} className="filter-box-wrapper">
                    <Row style={{marginTop: "26px"}}>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                bordered
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: "Chọn Kiểu Lông",
                                }}
                                className="filter-box-select"
                                onChange={handleChangeHair}
                                options={[
                                    {
                                        value: "Long",
                                        label: "Dài",
                                    },
                                    {
                                        value: "Short",
                                        label: "Ngắn",
                                    },
                                    {
                                        value: "Medium",
                                        label: "Trung bình",
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: "Chọn Kích Thước",
                                }}
                                className="filter-box-select"
                                onChange={handleChangeSize}
                                options={[
                                    {
                                        value: "Small",
                                        label: "Nhỏ",
                                    },
                                    {
                                        value: "Medium",
                                        label: "Trung bình",
                                    },
                                    {
                                        value: "Big",
                                        label: "Lớn",
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: "Chọn Mục Đích Nuôi",
                                }}
                                className="filter-box-select"
                                onChange={handleChangePurpose}
                                options={[
                                    {
                                        value: "Make friends",
                                        label: "Làm cảnh và bầu bạn",
                                    },
                                    {
                                        value: "Guardian",
                                        label: "Canh gác và bảo vệ",
                                    },
                                ]}
                            />
                        </Col>
                    </Row>
                    <Row style={{marginBottom: "10px"}}>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: "Chọn Độ Phổ Biến",
                                }}
                                className="filter-box-select"
                                onChange={handleChangePopularity}
                                options={[
                                    {
                                        value: "Hot",
                                        label: "Hot",
                                    },
                                    {
                                        value: "Medium",
                                        label: "Trung bình",
                                    },
                                    {
                                        value: "Rare",
                                        label: "Hiếm",
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: "Chọn Nhu Cầu Vận Động",
                                }}
                                className="filter-box-select"
                                onChange={handleChangeActivity}
                                options={[
                                    {
                                        value: "Low",
                                        label: "Thấp",
                                    },
                                    {
                                        value: "Medium",
                                        label: "Trung bình",
                                    },
                                    {
                                        value: "High",
                                        label: "Cao",
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: "Chọn Nhóm Chó",
                                }}
                                className="filter-box-select"
                                onChange={handleChangePattern}
                                options={[
                                    {
                                        value: "Bull Dog",
                                        label: "Bull Dog",
                                    },
                                    {
                                        value: "Long Hair Dog",
                                        label: "Long Hair Dog",
                                    },
                                    {
                                        value: "Japanese Dog",
                                        label: "Japanese Dog",
                                    },
                                    {
                                        value: "Sheep Dog",
                                        label: "Sheep Dog",
                                    },
                                    {
                                        value: "Sled Dog",
                                        label: "Sled Dog",
                                    },
                                    {
                                        value: "Terrier",
                                        label: "Terrier",
                                    },
                                    {
                                        value: "Shepherd",
                                        label: "Shepherd",
                                    },
                                    {
                                        value: "Vietnamese Dog",
                                        label: "Vietnamese Dog",
                                    },
                                    {
                                        value: "Chinese Dog",
                                        label: "Chinese Dog",
                                    },
                                    {
                                        value: "Hungting Dog",
                                        label: "Hungting Dog",
                                    },
                                    {
                                        value: "Hound",
                                        label: "Hound",
                                    },
                                    {
                                        value: "Becgie",
                                        label: "Becgie",
                                    },
                                    {
                                        value: "Bichon",
                                        label: "Bichon",
                                    },
                                    {
                                        value: "Family Dog",
                                        label: "Family Dog",
                                    },
                                ]}
                            />
                        </Col>
                    </Row>
                    <Button
                        className="btn-reset-filter"
                        type="primary"
                        shape="circle"
                        size="small"
                        onClick={handleResetFilter}
                    >
                        <FontAwesomeIcon icon={faRotateForward} />
                    </Button>
                </Col>
            </Row>
            <Row
                style={{
                    alignItem: "center",
                    display: "flex",
                    justifyContent: "center",
                }}
            ></Row>
            <Row
                style={{
                    alignItem: "center",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1%",
                }}
            >
                <Row align="center" style={{width: "86%", marginTop: "10px"}}>
                    {renderList.map((item) => (
                        <CagetoryItem item={item} />
                    ))}
                </Row>
            </Row>
        </Col>
    );
}

export default Cagetory;

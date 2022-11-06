import {Button, Col, Row} from "antd";
import CagetoryItem from "./cagetoryItem";
import {Select} from "antd";
import {useState} from "react";

import {dogData, catData} from "../../Data";
import {Link} from "react-router-dom";

//icon
import {ReloadOutline} from "@ant-design/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateBack, faRotateForward} from "@fortawesome/free-solid-svg-icons";

//translation
import "../../translation/i18n";
import {useTranslation} from "react-i18next";
function Cagetory({listItem}) {
    const [t] = useTranslation();

    //Dog filter
    const filterDogValue = {
        hair: "0",
        size: "0",
        purpose: "0",
        popularity: "0",
        activity: "0",
        pattern: "0",
    };
    const [renderList, setRenderList] = useState(listItem);
    const handleChangeDogHair = (value, option) => {
        Object.keys(filterDogValue).map((item) => {
            if (item === "hair") {
                filterDogValue[item] = option.value;
            }
        });

        setRenderList(
            renderList.filter(
                (item, index) => item.hair === filterDogValue.hair
            )
        );
    };
    const handleChangeDogSize = (value, option) => {
        Object.keys(filterDogValue).map((item) => {
            if (item === "size") {
                filterDogValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.size === filterDogValue.size
            )
        );
    };
    const handleChangeDogPurpose = (value, option) => {
        Object.keys(filterDogValue).map((item) => {
            if (item === "purpose") {
                filterDogValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.purpose === filterDogValue.purpose
            )
        );
    };
    const handleChangeDogPopularity = (value, option) => {
        Object.keys(filterDogValue).map((item) => {
            if (item === "popularity") {
                filterDogValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.popularity === filterDogValue.popularity
            )
        );
    };
    const handleChangeDogActivity = (value, option) => {
        Object.keys(filterDogValue).map((item) => {
            if (item === "activity") {
                filterDogValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.activity === filterDogValue.activity
            )
        );
    };
    const handleChangeDogPattern = (value, option) => {
        Object.keys(filterDogValue).map((item) => {
            if (item === "pattern") {
                filterDogValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.pattern === filterDogValue.pattern
            )
        );
    };

    const handleResetFilter = () => {
        setRenderList(listItem);
    };

    //Cat filter

    const filterCatValue = {
        hair: "0",
        color: "0",
        popularity: "0",
        hairFall: "0",
        outLook: "0",
    };
    const handleChangeCatHair = (value, option) => {
        Object.keys(filterCatValue).map((item) => {
            if (item === "hair") {
                filterCatValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.hair === filterCatValue.hair
            )
        );
    };
    const handleChangeCatColor = (value, option) => {
        Object.keys(filterCatValue).map((item) => {
            if (item === "color") {
                filterCatValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.color === filterCatValue.color
            )
        );
    };
    const handleChangeCatPopularity = (value, option) => {
        Object.keys(filterCatValue).map((item) => {
            if (item === "popularity") {
                filterCatValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.popularity === filterCatValue.popularity
            )
        );
    };
    const handleChangeCatHairFall = (value, option) => {
        Object.keys(filterCatValue).map((item) => {
            if (item === "hairFall") {
                filterCatValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.hairFall === filterCatValue.hairFall
            )
        );
    };
    const handleChangeCatOutLook = (value, option) => {
        Object.keys(filterCatValue).map((item) => {
            if (item === "outLook") {
                filterCatValue[item] = option.value;
            }
        });
        setRenderList(
            renderList.filter(
                (item, index) => item.outLook === filterCatValue.outLook
            )
        );
    };
    return listItem === dogData ? ( // Dog category
        <Col span={24}>
            <Row align="center" justify="center">
                <Col span={18} className="filter-box-wrapper">
                    <Row style={{marginTop: "22px"}}>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                bordered
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: t("Filter By Hair Type"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeDogHair}
                                options={[
                                    {
                                        value: "Long",
                                        label: t("Long Hair"),
                                    },
                                    {
                                        value: "Short",
                                        label: t("Short Hair"),
                                    },
                                    {
                                        value: "Medium",
                                        label: t("Medium Hair"),
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: t("Filter By Size"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeDogSize}
                                options={[
                                    {
                                        value: "Small",
                                        label: t("Small"),
                                    },
                                    {
                                        value: "Medium",
                                        label: t("Medium"),
                                    },
                                    {
                                        value: "Big",
                                        label: t("Large"),
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: t("Filter By Purpose"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeDogPurpose}
                                options={[
                                    {
                                        value: "Make friends",
                                        label: t("Make friends"),
                                    },
                                    {
                                        value: "Guardian",
                                        label: t("Guardian"),
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
                                    label: t("Filter By Popularity"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeDogPopularity}
                                options={[
                                    {
                                        value: "Hot",
                                        label: t("Hot"),
                                    },
                                    {
                                        value: "Medium",
                                        label: t("Medium"),
                                    },
                                    {
                                        value: "Rare",
                                        label: t("Rare"),
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: t("Filter By Activity"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeDogActivity}
                                options={[
                                    {
                                        value: "Low",
                                        label: t("Low"),
                                    },
                                    {
                                        value: "Medium",
                                        label: t("Medium"),
                                    },
                                    {
                                        value: "High",
                                        label: t("High"),
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: t("Filter By Dog Pattern"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeDogPattern}
                                options={[
                                    {
                                        value: "Bull Dog",
                                        label: t("Bull Dog"),
                                    },
                                    {
                                        value: "Long Hair Dog",
                                        label: t("Long Hair Dog"),
                                    },
                                    {
                                        value: "Japanese Dog",
                                        label: t("Japanese Dog"),
                                    },
                                    {
                                        value: "Sheep Dog",
                                        label: t("Sheep Dog"),
                                    },
                                    {
                                        value: "Sled Dog",
                                        label: t("Sled Dog"),
                                    },
                                    {
                                        value: "Terrier",
                                        label: t("Terrier"),
                                    },
                                    {
                                        value: "Shepherd",
                                        label: t("Shepherd"),
                                    },
                                    {
                                        value: "Vietnamese Dog",
                                        label: t("Vietnamese Dog"),
                                    },
                                    {
                                        value: "Chinese Dog",
                                        label: t("Chinese Dog"),
                                    },
                                    {
                                        value: "Hungting Dog",
                                        label: t("Hunting Dog"),
                                    },
                                    {
                                        value: "Becgie",
                                        label: t("Becgie"),
                                    },
                                    {
                                        value: "Bichon",
                                        label: t("Bichon"),
                                    },
                                    {
                                        value: "Family Dog",
                                        label: t("Family Dog"),
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
    ) : (
        // Cat category list
        <Col span={24}>
            <Row align="center" justify="center">
                <Col span={18} className="filter-box-wrapper">
                    <Row
                        style={{marginTop: "22px"}}
                        align="center"
                        justify="center"
                    >
                        <Col className="select-wrapper" span={8}>
                            <Select
                                bordered
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: t("Filter By Hair Type"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeCatHair}
                                options={[
                                    {
                                        value: "Long",
                                        label: t("Long Hair"),
                                    },
                                    {
                                        value: "Short",
                                        label: t("Short Hair"),
                                    },
                                    {
                                        value: "Medium",
                                        label: t("Medium Hair"),
                                    },
                                ]}
                            />
                        </Col>

                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: t("Filter By Color"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeCatColor}
                                options={[
                                    {
                                        value: "Single",
                                        label: "Single Color",
                                    },
                                    {
                                        value: "Multi",
                                        label: "Multiple Color",
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
                                    label: t("Filter By Popularity"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeCatPopularity}
                                options={[
                                    {
                                        value: "Hot",
                                        label: t("Hot"),
                                    },
                                    {
                                        value: "Medium",
                                        label: t("Medium"),
                                    },
                                    {
                                        value: "Rare",
                                        label: t("Rare"),
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: t("Filter By Hair Fall"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeCatHairFall}
                                options={[
                                    {
                                        value: "Low",
                                        label: t("Low"),
                                    },
                                    {
                                        value: "Medium",
                                        label: t("Medium"),
                                    },
                                    {
                                        value: "High",
                                        label: t("High"),
                                    },
                                ]}
                            />
                        </Col>
                        <Col className="select-wrapper" span={8}>
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: "0",
                                    label: t("Filter By Outlook"),
                                }}
                                className="filter-box-select"
                                onChange={handleChangeCatOutLook}
                                options={[
                                    {
                                        value: "Luxury",
                                        label: t("Luxury"),
                                    },
                                    {
                                        value: "Cute",
                                        label: t("Cute"),
                                    },
                                    {
                                        value: "Unique",
                                        label: t("Unique"),
                                    },
                                ]}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={1}>
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

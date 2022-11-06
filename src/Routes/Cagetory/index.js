import { Button, Col, Row } from "antd";
import CagetoryItem from "./cagetoryItem";
import { Select } from "antd";
import { useState } from "react";

import { dogData, catData } from "../../Data";
import { Link } from "react-router-dom";

//icon
import { ReloadOutline } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateBack,
  faRotateForward,
} from "@fortawesome/free-solid-svg-icons";

//translation
import "../../translation/i18n";
import { useTranslation } from "react-i18next";
import ContentContainer from "../../Layout/LayoutComponents/ContentContainer/footer";

const initialDogValue = {
  hair: "0",
  size: "0",
  purpose: "0",
  popularity: "0",
  activity: "0",
  pattern: "0",
};

const initialCatValue = {
  hair: "0",
  color: "0",
  popularity: "0",
  hairFall: "0",
  outLook: "0",
};

function Cagetory({ listItem }) {
  const [t] = useTranslation();
  const [dogFilter, setDogFilter] = useState(initialDogValue);
  const [catFilter, setCatFilter] = useState(initialCatValue);

  //Dog filter

  const [renderList, setRenderList] = useState(listItem);

  const handleFilterDog = (value, type) => {
    let dogFilter1 = dogFilter;
    switch (type) {
      case "hair":
        dogFilter1.hair = value.value;
        break;
      case "size":
        dogFilter1.size = value.value;
        break;
      case "purpose":
        dogFilter1.purpose = value.value;
        break;
      case "activity":
        dogFilter1.activity = value.value;
        break;
      case "popularity":
        dogFilter1.popularity = value.value;
        break;
      case "pattern":
        dogFilter1.pattern = value.value;
        break;
      default:
        break;
    }
    setDogFilter(dogFilter1);

    let list = dogData;

    if (dogFilter1.hair !== "0") {
      list = list.filter((item) => item.hair === dogFilter1.hair);
      console.log(list);
    }
    if (dogFilter1.size !== "0") {
      list = list.filter((item) => item.size === dogFilter1.size);
    }
    if (dogFilter1.purpose !== "0") {
      list = list.filter((item) => item.purpose === dogFilter1.purpose);
    }
    if (dogFilter1.activity !== "0") {
      list = list.filter((item) => item.activity === dogFilter1.activity);
    }
    if (dogFilter1.popularity !== "0") {
      list = list.filter((item) => item.popularity === dogFilter1.popularity);
    }
    if (dogFilter1.pattern !== "0") {
      list = list.filter((item) => item.pattern === dogFilter1.pattern);
    }

    setRenderList(list);
  };

  const handleResetDogFilter = () => {
    setRenderList(listItem);
    setDogFilter({
      hair: "0",
      size: "0",
      purpose: "0",
      popularity: "0",
      activity: "0",
      pattern: "0",
    });
  };

  //Cat filter

  const handleFilterCat = (value, type) => {
    let catFilter1 = catFilter;
    switch (type) {
      case "hair":
        catFilter1.hair = value.value;
        break;
      case "color":
        catFilter1.color = value.value;
        break;
      case "popularity":
        catFilter1.popularity = value.value;
        break;
      case "hairFall":
        catFilter1.hairFall = value.value;
        break;
      case "outLook":
        catFilter1.outLook = value.value;
        break;
      default:
        break;
    }
    setCatFilter(catFilter1);

    let list = catData;

    if (catFilter1.hair !== "0") {
      list = list.filter((item) => item.hair === catFilter1.hair);
    }
    if (catFilter1.color !== "0") {
      list = list.filter((item) => item.color === catFilter1.color);
    }
    if (catFilter1.popularity !== "0") {
      list = list.filter((item) => item.popularity === catFilter1.popularity);
    }
    if (catFilter1.hairFall !== "0") {
      list = list.filter((item) => item.hairFall === catFilter1.hairFall);
    }
    if (catFilter1.outLook !== "0") {
      list = list.filter((item) => item.outLook === catFilter1.outLook);
    }

    setRenderList(list);
  };

  const handleResetCatFilter = () => {
    setRenderList(listItem);
    setCatFilter({
      hair: "0",
      color: "0",
      popularity: "0",
      hairFall: "0",
      outLook: "0",
    });
  };

  return (
    <ContentContainer>
      {listItem === dogData ? ( // Dog category
        <Col span={24}>
          <Row align="center" justify="center">
            <Col span={18} className="filter-box-wrapper">
              <Row style={{ marginTop: "22px" }}>
                <Col className="select-wrapper" span={8}>
                  <Select
                    bordered
                    labelInValue
                    defaultValue={{
                      value: "0",
                      label: t("Filter By Hair Type"),
                    }}
                    value={
                      dogFilter.hair === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Hair Type"),
                          }
                        : dogFilter.hair
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterDog(value, "hair")}
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
                    value={
                      dogFilter.size === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Size"),
                          }
                        : dogFilter.size
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterDog(value, "size")}
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
                    value={
                      dogFilter.purpose === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Purpose"),
                          }
                        : dogFilter.purpose
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterDog(value, "purpose")}
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
              <Row style={{ marginBottom: "10px" }}>
                <Col className="select-wrapper" span={8}>
                  <Select
                    labelInValue
                    defaultValue={{
                      value: "0",
                      label: t("Filter By Popularity"),
                    }}
                    value={
                      dogFilter.popularity === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Popularity"),
                          }
                        : dogFilter.popularity
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterDog(value, "popularity")}
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
                    value={
                      dogFilter.activity === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Activity"),
                          }
                        : dogFilter.activity
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterDog(value, "activity")}
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
                    value={
                      dogFilter.pattern === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Dog Pattern"),
                          }
                        : dogFilter.pattern
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterDog(value, "pattern")}
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
            </Col>
            <Col span={1}>
              <Button
                className="btn-reset-filter"
                type="danger"
                shape="circle"
                onClick={handleResetDogFilter}
              >
                <FontAwesomeIcon icon={faRotateForward} size="lg" />
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
            <Row align="center" style={{ width: "86%", marginTop: "10px" }}>
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
                style={{ marginTop: "22px" }}
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
                    value={
                      catFilter.hair === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Hair Type"),
                          }
                        : catFilter.hair
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterCat(value, "hair")}
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
                    value={
                      catFilter.color === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Color"),
                          }
                        : catFilter.color
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterCat(value, "color")}
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
              <Row style={{ marginBottom: "10px" }}>
                <Col className="select-wrapper" span={8}>
                  <Select
                    labelInValue
                    defaultValue={{
                      value: "0",
                      label: t("Filter By Popularity"),
                    }}
                    value={
                      catFilter.popularity === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Popularity"),
                          }
                        : catFilter.popularity
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterCat(value, "popularity")}
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
                    value={
                      catFilter.hairFall === "0"
                        ? {
                            value: "0",
                            label: t("Filter By Hair Fall"),
                          }
                        : catFilter.hairFall
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterCat(value, "hairFall")}
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
                    labelInValues
                    defaultValue={{
                      value: "0",
                      label: t("Filter By Outlook"),
                    }}
                    value={
                      catFilter.outLook === "0"
                        ? {
                            value: "0",
                            label: t("Filter By By Outlook"),
                          }
                        : catFilter.outLook
                    }
                    className="filter-box-select"
                    onChange={(value) => handleFilterCat(value, "outLook")}
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
                type="danger"
                shape="circle"
                onClick={handleResetCatFilter}
              >
                <FontAwesomeIcon icon={faRotateForward} size="lg" />
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
            <Row align="center" style={{ width: "86%", marginTop: "10px" }}>
              {renderList.map((item) => (
                <CagetoryItem item={item} />
              ))}
            </Row>
          </Row>
        </Col>
      )}
    </ContentContainer>
  );
}

export default Cagetory;

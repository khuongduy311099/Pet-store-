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
function Cagetory({ listItem }) {
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
      renderList.filter((item, index) => item.hair === filterDogValue.hair)
    );
  };
  const handleChangeDogSize = (value, option) => {
    Object.keys(filterDogValue).map((item) => {
      if (item === "size") {
        filterDogValue[item] = option.value;
      }
    });
    setRenderList(
      renderList.filter((item, index) => item.size === filterDogValue.size)
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
      renderList.filter((item, index) => item.hair === filterCatValue.hair)
    );
  };
  const handleChangeCatColor = (value, option) => {
    Object.keys(filterCatValue).map((item) => {
      if (item === "color") {
        filterCatValue[item] = option.value;
      }
    });
    setRenderList(
      renderList.filter((item, index) => item.color === filterCatValue.color)
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
          <Row style={{ marginTop: "22px" }}>
            <Col className="select-wrapper" span={8}>
              <Select
                bordered
                labelInValue
                defaultValue={{
                  value: "0",
                  label: "Ch???n Ki???u L??ng",
                }}
                className="filter-box-select"
                onChange={handleChangeDogHair}
                options={[
                  {
                    value: "Long",
                    label: "D??i",
                  },
                  {
                    value: "Short",
                    label: "Ng???n",
                  },
                  {
                    value: "Medium",
                    label: "Trung b??nh",
                  },
                ]}
              />
            </Col>
            <Col className="select-wrapper" span={8}>
              <Select
                labelInValue
                defaultValue={{
                  value: "0",
                  label: "Ch???n K??ch Th?????c",
                }}
                className="filter-box-select"
                onChange={handleChangeDogSize}
                options={[
                  {
                    value: "Small",
                    label: "Nh???",
                  },
                  {
                    value: "Medium",
                    label: "Trung b??nh",
                  },
                  {
                    value: "Big",
                    label: "L???n",
                  },
                ]}
              />
            </Col>
            <Col className="select-wrapper" span={8}>
              <Select
                labelInValue
                defaultValue={{
                  value: "0",
                  label: "Ch???n M???c ????ch Nu??i",
                }}
                className="filter-box-select"
                onChange={handleChangeDogPurpose}
                options={[
                  {
                    value: "Make friends",
                    label: "L??m c???nh v?? b???u b???n",
                  },
                  {
                    value: "Guardian",
                    label: "Canh g??c v?? b???o v???",
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
                  label: "Ch???n ????? Ph??? Bi???n",
                }}
                className="filter-box-select"
                onChange={handleChangeDogPopularity}
                options={[
                  {
                    value: "Hot",
                    label: "Hot",
                  },
                  {
                    value: "Medium",
                    label: "Trung b??nh",
                  },
                  {
                    value: "Rare",
                    label: "Hi???m",
                  },
                ]}
              />
            </Col>
            <Col className="select-wrapper" span={8}>
              <Select
                labelInValue
                defaultValue={{
                  value: "0",
                  label: "Ch???n Nhu C???u V???n ?????ng",
                }}
                className="filter-box-select"
                onChange={handleChangeDogActivity}
                options={[
                  {
                    value: "Low",
                    label: "Th???p",
                  },
                  {
                    value: "Medium",
                    label: "Trung b??nh",
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
                  label: "Ch???n Nh??m Ch??",
                }}
                className="filter-box-select"
                onChange={handleChangeDogPattern}
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
          <Row style={{ marginTop: "22px" }} align="center" justify="center">
            <Col className="select-wrapper" span={8}>
              <Select
                bordered
                labelInValue
                defaultValue={{
                  value: "0",
                  label: "Ch???n Ki???u L??ng",
                }}
                className="filter-box-select"
                onChange={handleChangeCatHair}
                options={[
                  {
                    value: "Long",
                    label: "D??i",
                  },
                  {
                    value: "Short",
                    label: "Ng???n",
                  },
                  {
                    value: "Medium",
                    label: "Trung b??nh",
                  },
                ]}
              />
            </Col>

            <Col className="select-wrapper" span={8}>
              <Select
                labelInValue
                defaultValue={{
                  value: "0",
                  label: "Ch???n M??u S???c",
                }}
                className="filter-box-select"
                onChange={handleChangeCatColor}
                options={[
                  {
                    value: "Single",
                    label: "M???t M??u",
                  },
                  {
                    value: "Multi",
                    label: "Nhi???u m??u",
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
                  label: "Ch???n ????? Ph??? Bi???n",
                }}
                className="filter-box-select"
                onChange={handleChangeCatPopularity}
                options={[
                  {
                    value: "Hot",
                    label: "Hot",
                  },
                  {
                    value: "Medium",
                    label: "Trung b??nh",
                  },
                  {
                    value: "Rare",
                    label: "Hi???m",
                  },
                ]}
              />
            </Col>
            <Col className="select-wrapper" span={8}>
              <Select
                labelInValue
                defaultValue={{
                  value: "0",
                  label: "Ch???n M???c ????? R???ng L??ng",
                }}
                className="filter-box-select"
                onChange={handleChangeCatHairFall}
                options={[
                  {
                    value: "Low",
                    label: "Th???p",
                  },
                  {
                    value: "Medium",
                    label: "Trung b??nh",
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
                  label: "Ch???n Ngo???i H??nh",
                }}
                className="filter-box-select"
                onChange={handleChangeCatOutLook}
                options={[
                  {
                    value: "Luxury",
                    label: "Qu?? T???c",
                  },
                  {
                    value: "Cute",
                    label: "????ng Y??u",
                  },
                  {
                    value: "Unique",
                    label: "?????c L???",
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
        <Row align="center" style={{ width: "86%", marginTop: "10px" }}>
          {renderList.map((item) => (
            <CagetoryItem item={item} />
          ))}
        </Row>
      </Row>
    </Col>
  );
}

export default Cagetory;

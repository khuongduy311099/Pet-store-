import { Card, Carousel, Col, Row, Typography } from "antd";
import { styled } from "@mui/material/styles";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./index.scss";
import React, { useState } from "react";

const { Text } = Typography;

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  width: "100%",
  "& .MuiTabs-indicator": {
    backgroundColor: "#9b0000",
    height: 3,
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      color: "#9b0000",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#9b0000",
      fontWeight: "bold",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

function BreedTab({ type, breedBanner, breedData, breedPattern, title }) {
  const [value, setValue] = useState("all");
  const [tabList, setTabList] = useState(breedData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "all") {
      setTabList(breedData);
    } else {
      let tabList;
      if (type === "cat")
        tabList = breedData.filter((item) => item.outLook === newValue);
      else tabList = breedData.filter((item) => item.pattern === newValue);
      setTabList(tabList);
    }
  };

  return (
    <div className="container">
      <Row>
        <Col span={4}>
          <Row className="h2-header"></Row>
          <Row className="tab-title">
            <h2 className="tab-left-title">{title}</h2>
          </Row>
          <Row>
            <img className="tab-background-img" src={breedBanner} />
          </Row>
        </Col>
        <Col span={20}>
          <Row>
            <AntTabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              aria-label="visible arrows tabs example"
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
              }}
            >
              <AntTab value={"all"} label={"All"} />
              {breedPattern &&
                breedPattern.map((item, index) => (
                  <AntTab key={index} value={item.value} label={item.label} />
                ))}
            </AntTabs>
          </Row>
          <Row className="breed-container">
            {tabList &&
              tabList.map((item, index) => (
                <Col key={index} className="tab-items">
                  <div className="tab-item">
                    <div style={{ width: "100%" }}>
                      <img src={item.img}></img>
                    </div>
                    <Text className="title">{item.name}</Text>
                  </div>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default BreedTab;

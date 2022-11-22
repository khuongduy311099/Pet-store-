import { Card, Carousel, Col, Row, Typography } from "antd";
import { styled } from "@mui/material/styles";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./index.scss";
import React, { useState, useContext } from "react";

import "../../translation/i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../Context/globalContext";
const { Text } = Typography;

function BreedTab({ type, breedBanner, breedData, breedPattern, title }) {
  const [t] = useTranslation();
  const [value, setValue] = useState(t("All"));
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
  const globalContext = useContext(GlobalContext);
  const AntTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    width: "100%",
    "& .MuiTabs-indicator": {
      backgroundColor: !globalContext.darkmode ? "#9b0000" : "rgb(204, 61, 61)",
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
      color: !globalContext.darkmode ? "rgba(0, 0, 0, 0.85)" : "white",
      "&:hover": {
        color: !globalContext.darkmode ? "#9b0000" : "rgb(204, 61, 61)",
        opacity: 1,
      },
      "&.Mui-selected": {
        color: !globalContext.darkmode ? "#9b0000" : "rgb(204, 61, 61)",
        fontWeight: "bold",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#d1eaff",
      },
    })
  );
  return (
    <div
      className={!globalContext.darkmode ? "container" : "container-dark-mode"}
    >
      <Row>
        <Col span={4}>
          <Row className="h2-header"></Row>
          <Row className="tab-title">
            <h2 className="tab-left-title">{t(title)}</h2>
          </Row>
          <Row>
            <img
              className="tab-background-img"
              src={breedBanner}
              alt="breed-banner"
            />
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
              <AntTab value={"all"} label={t("All")} />
              {breedPattern &&
                breedPattern.map((item, index) => (
                  <AntTab
                    key={index}
                    value={item.value}
                    label={t(item.label)}
                  />
                ))}
            </AntTabs>
          </Row>
          <Row className="breed-container">
            {tabList &&
              tabList.map((item, index) => (
                <Col
                  key={index}
                  className={
                    !globalContext?.darkmode
                      ? "tab-items"
                      : "tab-items-dark-mode"
                  }
                >
                  <Link to={`/${encodeURI(item?.name)}`}>
                    <div className="tab-item">
                      <div style={{ width: "100%" }}>
                        <img src={item.img} alt={item.name}></img>
                      </div>
                      <Text className="title">{t(item.name)}</Text>
                    </div>
                  </Link>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default BreedTab;

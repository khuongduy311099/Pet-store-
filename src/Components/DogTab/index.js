import { Card, Carousel, Col, Row, Typography } from "antd";
import { styled } from "@mui/material/styles";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./index.scss";
import React, { useState } from "react";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#9b0000",
    height: 3,
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    //textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      color: "red",
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

function DogTab({ slides }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container">
      <Row>
        <Col span={4}>
          <Row className="h2-header"></Row>
          <Row className="tab-title">
            <h2 className="tab-left-title">GIỐNG CHÓ CẢNH</h2>
          </Row>
          <Row>
            <img
              className="tab-background-img"
              src="https://azpet.b-cdn.net/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg"
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
              <AntTab label="Item One" />
              <AntTab label="Item Two" />
              <AntTab label="Item Three" />
              <AntTab label="Item Four" />
              <AntTab label="Item Five" />
              <AntTab label="Item Six" />
              <AntTab label="Item Seven" />
              <AntTab label="Item One" />
              <AntTab label="Item Two" />
              <AntTab label="Item Three" />
              <AntTab label="Item Four" />
              <AntTab label="Item Five" />
              <AntTab label="Item Six" />
              <AntTab label="Item Seven" />
            </AntTabs>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DogTab;

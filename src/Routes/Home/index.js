import React from "react";
import "antd/dist/antd.css";
import {
  Avatar,
  Button,
  Card,
  Carousel,
  Col,
  Layout,
  List,
  Row,
  Space,
  Typography,
  Divider,
} from "antd";

import LayoutHeader from "../../Layout/LayoutComponents/Header/header";
import ImageSlider from "../../Components/ImageSlider";
import Sidebar from "../../Layout/LayoutComponents/Sidebar/sidebar";
import ShopItem from "../../Components/ShopItem/shopItem";
import LayoutFooter from "../../Layout/LayoutComponents/Footer/footer";
import CartIcon from "../../Components/cartIcon/cartIcon";
import ContentContainer from "../../Layout/LayoutComponents/ContentContainer/footer";
import "./index.scss";
import BannerSlider from "../../Components/BannerSlider";
import BreedTab from "../../Components/BreedTab";
import { Link } from "react-router-dom";
import { catData, catPattern, dogData, dogPattern } from "../../Data";
import pawPrintLogo from "../../assets/Logo/pawprint.png";
const { Header, Footer, Sider, Content } = Layout;
const { Text, Title } = Typography;

const slides = [
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2022/04/C2066-C12855-1.jpg",
    name: "Rot",
  },
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2022/01/M12279-1.jpg",
    name: "Rot",
  },
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/C12108-1-1.jpg",
    name: "Rot",
  },
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2022/06/C2286-C12956-1.jpg",
    name: "Rot",
  },
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2022/05/C2243-C12926-1.jpg",
    name: "Rot",
  },
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2021/08/Phoc-Soc-Cream-C12370-1.jpg",
    name: "Rot",
  },
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2022/04/C2066-C12855-1.jpg",
    name: "Rot",
  },
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2022/01/M12279-1.jpg",
    name: "Rot",
  },
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/C12108-1-1.jpg",
    name: "Rot",
  },
  {
    url: "https://azpet.b-cdn.net/wp-content/uploads/2022/06/C2286-C12956-1.jpg",
    name: "Rot",
  },
];

function MainLayout() {
  return (
    <>
      <ContentContainer>
        <Row gutter={[0, 30]}>
          <Row gutter={[8, 0]} type="flex">
            <Col span={6}>
              <List
                className="list-button"
                bordered
                dataSource={[
                  {
                    title: "GIỐNG CHÓ CẢNH",
                    thumb:
                      "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-canh-1.png",
                  },
                  {
                    title: "GIỐNG MÈO CẢNH",
                    thumb:
                      "https://azpet.b-cdn.net/wp-content/uploads/2021/06/meo-canh-1.png",
                  },
                  {
                    title: "SPA AND GROOMING",
                    thumb:
                      "https://azpet.b-cdn.net/wp-content/uploads/2021/06/spa-cho-meo-1.png",
                  },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <Space size={"middle"}>
                      <Avatar size={60} src={item.thumb} />
                      <Title level={5}>{item?.title}</Title>
                    </Space>
                  </List.Item>
                )}
              />
            </Col>
            <Col span={12} className="center-col">
              <img
                alt="example"
                src="https://azpet.b-cdn.net/wp-content/uploads/2022/03/azpet-banner-desktop-1.jpg"
              />
            </Col>
            <Col span={6} className="right-col">
              <Row gutter={[0, 8]}>
                <Col span={24}>
                  <img
                    alt="example"
                    src="https://azpet.b-cdn.net/wp-content/uploads/2022/03/banner-desktop-1.jpg"
                  />
                </Col>
                <Col span={24}>
                  <img
                    alt="example"
                    src="https://azpet.b-cdn.net/wp-content/uploads/2022/03/banner-desktop-2.jpg"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          {/* <Row>
            <Col span={24}>
              <BannerSlider slides={slides} />
            </Col>
          </Row> */}

          <Row>
            <Col span={24} className="container">
              <Title style={{ color: "#b90000" }} level={3}>
                Giá sốc
              </Title>
              <ImageSlider slides={slides} />
            </Col>
          </Row>

          <BreedTab
            breedBanner={
              "https://azpet.b-cdn.net/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg"
            }
            breedData={dogData}
            breedPattern={dogPattern}
            title={"GIỐNG CHÓ CẢNH"}
            type="dog"
          />
          <img
            src="https://azpet.b-cdn.net/wp-content/uploads/2021/07/hop-tac-nhan-giong-cho-canh.jpg"
            width={"100%"}
          ></img>

          <BreedTab
            breedBanner={
              "https://azpet.b-cdn.net/wp-content/uploads/2021/07/azpet-banner-meo-canh-desktop-1.jpg"
            }
            breedData={catData}
            breedPattern={catPattern}
            title={"GIỐNG MÈO CẢNH"}
            type="cat"
          />
        </Row>

        <Row justify={"center"} className="exclusive-right-container">
          <Col span={24}>
            <Text className="title">ĐẶC QUYỀN CHỈ CÓ TẠI PET STORE</Text>
          </Col>

          <Col span={24}>
            <span className="line-header-line" />
            <img className="paw-logo" src={pawPrintLogo}></img>
            <span className="line-header-line"></span>
          </Col>
        </Row>
        <Row gutter={[30, 0]} className="exclusive-right-container">
          <Col span={6}>
            <div className="exclusive-right-list-container">
              <img src="https://azpet.b-cdn.net/wp-content/uploads/2021/07/mua-thu-cung-tra-gop-12-thang.gif"></img>
              <Divider className="divider" />
              <Text className="title">Trả góp lãi suất 0% trong 12 tháng</Text>
            </div>
          </Col>
          <Col span={6}>
            <div className="exclusive-right-list-container">
              <img src="https://azpet.b-cdn.net/wp-content/uploads/2021/07/bao-hanh-365-ngay.gif"></img>
              <Divider className="divider" />
              <Text className="title">Bảo hành toàn diện 365 ngày</Text>
            </div>
          </Col>
          <Col span={6}>
            <div className="exclusive-right-list-container">
              <img src="https://azpet.b-cdn.net/wp-content/uploads/2021/07/ho-tro-chi-phi-kham-chua-benh.gif"></img>
              <Divider className="divider" />
              <Text className="title">
                Bảo hiểm sức khỏe lên tới 1,000,000đ
              </Text>
            </div>
          </Col>
          <Col span={6}>
            <div className="exclusive-right-list-container">
              <img src="https://azpet.b-cdn.net/wp-content/uploads/2021/07/mien-phi-van-chuyen.gif"></img>
              <Divider className="divider" />
              <Text className="title">Miễn phí vận chuyển toàn quốc</Text>
            </div>
          </Col>
        </Row>
      </ContentContainer>
    </>
  );
}

export default MainLayout;

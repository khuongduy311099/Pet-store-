import React from "react";
import "antd/dist/antd.css";
import {
  Avatar,
  Button,
  Card,
  Col,
  Layout,
  List,
  Row,
  Space,
  Typography,
} from "antd";

import LayoutHeader from "../../Layout/LayoutComponents/Header/header";
import ImageSlider from "../../Components/ImageSlider/image-slider";
import Sidebar from "../../Layout/LayoutComponents/Sidebar/sidebar";
import ShopItem from "../../Components/ShopItem/shopItem";
import LayoutFooter from "../../Layout/LayoutComponents/Footer/footer";
import CartIcon from "../../Components/cartIcon/cartIcon";
import ContentContainer from "../../Layout/LayoutComponents/ContentContainer/footer";
import Carousel from "react-grid-carousel";
import "./index.scss";
const { Header, Footer, Sider, Content } = Layout;
const { Text, Link, Title } = Typography;

const slides = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhx5TnyzqfPwC5ODl66x1vbtLpwBEoTrO2w&usqp=CAU",
    name: "Golden",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT046VpJuuvwwgYOINo2f0fBZCKgFM0Gk5iuw&usqp=CAU",
    name: "Pug",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokLuwN9T-snQrGWXdiMs_adqsQsNuE1KRqA&usqp=CAU",
    name: "Pitbull",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-sREt67CNicoQ4B2wLzFEZHqBNL1KkGBYw&usqp=CAU",
    name: "Rot",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhx5TnyzqfPwC5ODl66x1vbtLpwBEoTrO2w&usqp=CAU",
    name: "Golden",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT046VpJuuvwwgYOINo2f0fBZCKgFM0Gk5iuw&usqp=CAU",
    name: "Pug",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokLuwN9T-snQrGWXdiMs_adqsQsNuE1KRqA&usqp=CAU",
    name: "Pitbull",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-sREt67CNicoQ4B2wLzFEZHqBNL1KkGBYw&usqp=CAU",
    name: "Rot",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhx5TnyzqfPwC5ODl66x1vbtLpwBEoTrO2w&usqp=CAU",
    name: "Golden",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT046VpJuuvwwgYOINo2f0fBZCKgFM0Gk5iuw&usqp=CAU",
    name: "Pug",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokLuwN9T-snQrGWXdiMs_adqsQsNuE1KRqA&usqp=CAU",
    name: "Pitbull",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-sREt67CNicoQ4B2wLzFEZHqBNL1KkGBYw&usqp=CAU",
    name: "Rot",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhx5TnyzqfPwC5ODl66x1vbtLpwBEoTrO2w&usqp=CAU",
    name: "Golden",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT046VpJuuvwwgYOINo2f0fBZCKgFM0Gk5iuw&usqp=CAU",
    name: "Pug",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokLuwN9T-snQrGWXdiMs_adqsQsNuE1KRqA&usqp=CAU",
    name: "Pitbull",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-sREt67CNicoQ4B2wLzFEZHqBNL1KkGBYw&usqp=CAU",
    name: "Rot",
  },
];

function MainLayout() {
  const user = {
    name: "Khương Duy",
    avatar:
      "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/185188939_2885221165066292_6106096938833222997_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=WMAltXsmAxcAX_nh7lc&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfBRorrMS81-kgKzNWUgQ9jD8kramXUd-bVd0B8VyqBzCg&oe=637F4366",
  };

  return (
    <>
      <ContentContainer>
        <Row gutter={[0, 60]}>
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
          <Row>
            <ImageSlider slides={slides} />
          </Row>
        </Row>
      </ContentContainer>
    </>
  );
}

export default MainLayout;

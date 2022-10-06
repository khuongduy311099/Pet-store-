import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

import LayoutHeader from "../LayoutComponents/Header/header";
import ImageSlider from "../../Components/ImageSlider/image-slider";
import Sidebar from "../LayoutComponents/Sidebar/sidebar";
import ShopItem from "../../Components/ShopItem/shopItem";
const { Header, Footer, Sider, Content } = Layout;

const slides = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhx5TnyzqfPwC5ODl66x1vbtLpwBEoTrO2w&usqp=CAU",
    name: "Golden"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT046VpJuuvwwgYOINo2f0fBZCKgFM0Gk5iuw&usqp=CAU",
    name: "Pug"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokLuwN9T-snQrGWXdiMs_adqsQsNuE1KRqA&usqp=CAU",
    name: "Pitbull"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-sREt67CNicoQ4B2wLzFEZHqBNL1KkGBYw&usqp=CAU",
    name: "Rot"
  }
]
function MainLayout() {
  return (
    <>
      <Layout>
          <LayoutHeader />
      </Layout>
      <Layout style={{marginTop: '40px', backgroundColor: 'white'}}>
        <Sider style={ {backgroundColor: "white"}}>
          <Sidebar />
        </Sider>
        <ImageSlider slides={slides}/>
      </Layout>
        <ShopItem />
    </>
  );
}

export default MainLayout;

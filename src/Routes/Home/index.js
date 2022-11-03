import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

import LayoutHeader from "../../Layout/LayoutComponents/Header/header";
import ImageSlider from "../../Components/ImageSlider/image-slider";
import Sidebar from "../../Layout/LayoutComponents/Sidebar/sidebar";
import ShopItem from "../../Components/ShopItem/shopItem";
import LayoutFooter from "../../Layout/LayoutComponents/Footer/footer";
import CartIcon from "../../Components/cartIcon/cartIcon";
const { Header, Footer, Sider, Content } = Layout;

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
];
function MainLayout() {
  const user = {
    name: "Khương Duy",
    avatar:
      "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/185188939_2885221165066292_6106096938833222997_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=WMAltXsmAxcAX_nh7lc&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfBRorrMS81-kgKzNWUgQ9jD8kramXUd-bVd0B8VyqBzCg&oe=637F4366",
  };

  return (
    <>
      <ImageSlider slides={slides} />
      <ShopItem />
      <ShopItem />
    </>
  );
}

export default MainLayout;

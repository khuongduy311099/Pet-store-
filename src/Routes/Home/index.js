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
import DogTab from "../../Components/DogTab";
import {Link} from "react-router-dom";
const {Header, Footer, Sider, Content} = Layout;
const {Text, Title} = Typography;

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
    const user = {
        name: "Khương Duy",
        avatar: "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/185188939_2885221165066292_6106096938833222997_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=WMAltXsmAxcAX_nh7lc&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfBRorrMS81-kgKzNWUgQ9jD8kramXUd-bVd0B8VyqBzCg&oe=637F4366",
    };

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
                                        link: "dog-category",
                                        thumb: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-canh-1.png",
                                    },
                                    {
                                        title: "GIỐNG MÈO CẢNH",
                                        link: "cat-category",

                                        thumb: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/meo-canh-1.png",
                                    },
                                    {
                                        title: "SPA AND GROOMING",
                                        link: "services",
                                        thumb: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/spa-cho-meo-1.png",
                                    },
                                ]}
                                renderItem={(item) => (
                                    <Link to={`/${item?.link}`}>
                                        <List.Item>
                                            <Space size={"middle"}>
                                                <Avatar
                                                    size={60}
                                                    src={item.thumb}
                                                />
                                                <Title level={5}>
                                                    {item?.title}
                                                </Title>
                                            </Space>
                                        </List.Item>
                                    </Link>
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
                            <Title style={{color: "#b90000"}} level={3}>
                                Giá sốc
                            </Title>
                            <ImageSlider slides={slides} />
                        </Col>
                    </Row>

                    <DogTab />
                </Row>
            </ContentContainer>
        </>
    );
}

export default MainLayout;

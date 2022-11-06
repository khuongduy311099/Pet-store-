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
import {Link} from "react-router-dom";
import {catData, catPattern, dogData, dogPattern} from "../../Data";
import pawPrintLogo from "../../assets/Logo/pawprint.png";
import "../../translation/i18n";
import {useTranslation} from "react-i18next";
const {Header, Footer, Sider, Content} = Layout;
const {Text, Title} = Typography;

const allDogListProduct = dogData.map((item) => item.listProduct);
const allCatListProduct = catData.map((item) => item.listProduct);

const hotDogList = allDogListProduct?.map((item) =>
    item?.filter((product) => product?.sale === true)
);
const hotCatList = allCatListProduct?.map((item) =>
    item?.filter((product) => product?.sale === true)
);

const dogSlides = hotDogList.flat(1).filter((item) => !!item === true);
const catSlides = hotCatList.flat(1).filter((item) => !!item === true);

const slides = [...dogSlides, ...catSlides];
console.log(slides);
function MainLayout() {
    const [t] = useTranslation();
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
                                        title: t("DOG CATEGORY"),
                                        link: "dog-category",
                                        thumb: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-canh-1.png",
                                    },
                                    {
                                        title: t("CAT CATEGORY"),
                                        link: "cat-category",

                                        thumb: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/meo-canh-1.png",
                                    },
                                    {
                                        title: t("SPA AND GROOMING"),
                                        link: "upcoming",
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
                                {t("Hot Deal")}
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
                        title={t("DOG CATEGORY")}
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
                        title={t("CAT CATEGORY")}
                        type="cat"
                    />
                </Row>

                <Row justify={"center"} className="exclusive-right-container">
                    <Col span={24}>
                        <Text className="title">
                            {t("EXCLUSIVE ONLY IN PET STORE")}
                        </Text>
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
                            <Text className="title">
                                {t("Warranty up to up to 365 days")}
                            </Text>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="exclusive-right-list-container">
                            <img src="https://azpet.b-cdn.net/wp-content/uploads/2021/07/bao-hanh-365-ngay.gif"></img>
                            <Divider className="divider" />
                            <Text className="title">
                                {t("Warranty up to up to 365 days")}
                            </Text>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="exclusive-right-list-container">
                            <img src="https://azpet.b-cdn.net/wp-content/uploads/2021/07/ho-tro-chi-phi-kham-chua-benh.gif"></img>
                            <Divider className="divider" />
                            <Text className="title">
                                {t("Pet health insurance up to 1.000.000 VND")}
                            </Text>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="exclusive-right-list-container">
                            <img src="https://azpet.b-cdn.net/wp-content/uploads/2021/07/mien-phi-van-chuyen.gif"></img>
                            <Divider className="divider" />
                            <Text className="title">
                                {t("Free shipping nationally")}
                            </Text>
                        </div>
                    </Col>
                </Row>
            </ContentContainer>
        </>
    );
}

export default MainLayout;

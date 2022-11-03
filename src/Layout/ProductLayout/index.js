import React from "react";
import "antd/dist/antd.css";
import {Layout} from "antd";

import LayoutHeader from "../LayoutComponents/Header/header";
import LayoutFooter from "../LayoutComponents/Footer/footer";
import Product from "../LayoutComponents/Product/product";
import TotalCartItem from "../../Components/cartIcon/totalCartItem";
import CartIcon from "../../Components/cartIcon/cartIcon";
const {Header, Footer, Sider, Content} = Layout;

const slides = [
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG52UFI63gRQMII6BaBEx8zFpVrjBOtDoNGA&usqp=CAU",
        name: "Product 1",
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeM1-6HcSpCn6HoKUKIUSfqe3B8Ko-rjFDbQ&usqp=CAU",
        name: "Product 2",
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsba8hJgeOPVJ2H7ryTLktaZFXC0jOE73R6A&usqp=CAU",
        name: "Product 3",
    },
];
function ProductLayout() {
    return (
        <div>
            <Content>
                <Product />
            </Content>
        </div>
    );
}

export default ProductLayout;

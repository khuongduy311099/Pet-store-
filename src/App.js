import Layout, {Content} from "antd/lib/layout/layout";
import {Route, Routes} from "react-router-dom";
import TotalCartItem from "./Components/cartIcon/totalCartItem";
import LayoutFooter from "./Layout/LayoutComponents/Footer/footer";
import LayoutHeader from "./Layout/LayoutComponents/Header/header";
import Product from "./Layout/LayoutComponents/Product/product";
import LoginLayout from "./Layout/LoginLayout/Login";
import MainLayout from "./Routes/Home";
import RegisterLayout from "./Layout/RegisterLayout/RegisterLayout";
import Cagetory from "./Routes/Cagetory";
import CategoryDetailItem from "./Routes/Cagetory/CategoryDetail";
import CategoryDetailItems from "./Routes/Cagetory/CategoryDetail";

function App() {
    return (
        <Layout>
            <LayoutHeader />
            <Content style={{padding: "150px 50px", backgroundColor: "white"}}>
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="/login" element={<LoginLayout />} />
                    <Route path="/register" element={<RegisterLayout />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/dog-category" element={<Cagetory />}></Route>
                    <Route
                        path="/dog-category/pug"
                        element={<CategoryDetailItems />}
                    ></Route>
                </Routes>
            </Content>

            <LayoutFooter />
        </Layout>
    );
}

export default App;

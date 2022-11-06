import Layout, {Content, Footer} from "antd/lib/layout/layout";
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
import {dogData, catData} from "./Data";
import ProductItem from "./Layout/LayoutComponents/Product/product";
import UpcomingPage from "./Routes/upcomingFeature";
function App() {
    const allDogListProduct = dogData.map((item) => item.listProduct);

    return (
        <Layout>
            <LayoutHeader />
            <Content
                style={{
                    padding: "50px 50px",
                    backgroundColor: "#f2f2f2",
                }}
            >
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="/login" element={<LoginLayout />} />
                    <Route path="/register" element={<RegisterLayout />} />
                    <Route
                        path="/dog-category"
                        element={<Cagetory listItem={dogData} />}
                    ></Route>
                    <Route
                        path="/cat-category"
                        element={<Cagetory listItem={catData} />}
                    ></Route>
                    {dogData.map((item, i) => (
                        <Route
                            path={`dog-category/${encodeURI(item.name)}`}
                            element={<CategoryDetailItems item={item} />}
                        ></Route>
                    ))}

                    {allDogListProduct?.map((item) =>
                        item?.map((product) => (
                            <Route
                                path={`/product/${product.name}`}
                                element={<ProductItem item={product} />}
                            ></Route>
                        ))
                    )}
                    <Route path="/upcoming" element={<UpcomingPage />}></Route>
                </Routes>
            </Content>

            <Footer style={{textAlign: "center"}}>
                ©2022 Created by KhuongDuy
            </Footer>
        </Layout>
    );
}

export default App;

import Layout, { Content, Footer } from "antd/lib/layout/layout";
import { Route, Routes } from "react-router-dom";
import TotalCartItem from "./Components/cartIcon/totalCartItem";
import LayoutFooter from "./Layout/LayoutComponents/Footer/footer";
import LayoutHeader from "./Layout/LayoutComponents/Header/header";
import Product from "./Layout/LayoutComponents/Product/product";
import LoginLayout from "./Layout/LoginLayout/Login";
import MainLayout from "./Routes/Home";
import RegisterLayout from "./Layout/RegisterLayout/RegisterLayout";

function App() {
  return (
    <Layout>
      <LayoutHeader />
      <Content
        style={{
          padding: "150px 50px",
          backgroundColor: "white",
        }}
      >
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/register" element={<RegisterLayout />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Content>

      {/* <LayoutFooter /> */}
      <Footer style={{ textAlign: "center" }}>
        ©2022 Created by KhuongDuy
      </Footer>
    </Layout>
  );
}

export default App;

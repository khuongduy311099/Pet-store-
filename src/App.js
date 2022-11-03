import Layout from "antd/lib/layout/layout";
import { Route, Routes } from "react-router-dom";
import TotalCartItem from "./Components/cartIcon/totalCartItem";
import LayoutFooter from "./Layout/LayoutComponents/Footer/footer";
import LayoutHeader from "./Layout/LayoutComponents/Header/header";
import Product from "./Layout/LayoutComponents/Product/product";
import LoginLayout from "./Layout/LoginLayout/Login";
import MainLayout from "./Layout/MainLayout";
import RegisterLayout from "./Layout/RegisterLayout/RegisterLayout";

function App() {
  return (
    <div>
      <LayoutHeader />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/register" element={<RegisterLayout />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <LayoutFooter />
    </div>
  );
}

export default App;

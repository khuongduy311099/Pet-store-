import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Checkbox, Form, Input} from "antd";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import LayoutHeader from "..//LayoutComponents/Header/header";
import LayoutFooter from "..//LayoutComponents/Footer/footer";
import "./Login.scss";
const App = () => {
    const navigate = useNavigate();
    const adminUser = {
        username: "admin",
        password: "admin123",
    };

    const [currentUser, setCurrentUser] = useState({
        username: "",
        password: "",
    });

    const onFinish = (values) => {
        if (
            adminUser.username === values.username &&
            adminUser.password === values.password
        ) {
            navigate("/");
        } else alert("Username or Password incorrect");
    };

    const handleForm = (currentValue, allValue) => {
        setCurrentUser({
            ...currentUser,
            username: allValue.username,
            password: allValue.password,
        });
    };

    return (
        <div className="login-layout">
            <div className="login-layout-header">
                <LayoutHeader main={false} />
            </div>
            <div className="form-wrapper">
                <Form
                    className="login-form"
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onValuesChange={handleForm}
                >
                    <Form.Item
                        name="username"
                        className="login-input"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        className="login-input"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>{" "}
                        <div> </div>
                        Or <Link to="/register">register now!</Link>
                    </Form.Item>
                </Form>
            </div>
            <LayoutFooter product={false} />
        </div>
    );
};
export default App;

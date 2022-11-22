import React, { useContext, useState } from "react";
import "tippy.js/animations/scale.css";
import { Link } from "react-router-dom";
import { Avatar, Button, Dropdown, Menu, Space, Switch } from "antd";
import EnFlag from "../../../assets/Logo/united-kingdom.png";
import VnFlag from "../../../assets/Logo/vietnam.png";
import KorFlag from "../../../assets/Logo/south-korea.png";
import dogIcon from "../../../assets/Logo/dog.png";
import dogIconDarkmode from "../../../assets/Logo/dog-dark-mode.png";
import catIcon from "../../../assets/Logo/cat.png";
import catIconDarkmode from "../../../assets/Logo/cat-dark-mode.png";

import homeIcon from "../../../assets/Logo/pets-hotel-house-sign-with-a-paw.png";
import homeIconDarkmode from "../../../assets/Logo/home-dark-mode.png";
import groomIcon from "../../../assets/Logo/grooming.png";
import groomingIconDarkmode from "../../../assets/Logo/grooming-dark-mode.png";

import paw from "../../../assets/Logo/pawprint.png";
import pawDarkmode from "../../../assets/Logo/paw-dark-mode.png";
import { GlobalContext } from "../../../Context/globalContext";

// translation
import "./header.scss";
import i18n from "../../../translation/i18n";

function LayoutHeader({ main }) {
  const currentUser = {
    name: "Khương Duy",
    avatar:
      "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/185188939_2885221165066292_6106096938833222997_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=WMAltXsmAxcAX_nh7lc&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfBRorrMS81-kgKzNWUgQ9jD8kramXUd-bVd0B8VyqBzCg&oe=637F4366",
  };
  const globalContext = useContext(GlobalContext);
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: (
        <img
          className={
            !globalContext.darkmode
              ? "header-menu-icon"
              : "header-menu-icon-dark-mode"
          }
          src={!globalContext.darkmode ? homeIcon : homeIconDarkmode}
          alt="home"
        />
      ),
    },
    {
      label: <Link to="/dog-category">Dog Breed</Link>,
      key: "dog",
      icon: (
        <img
          className={
            !globalContext.darkmode
              ? "header-menu-icon"
              : "header-menu-icon-dark-mode"
          }
          src={!globalContext.darkmode ? dogIcon : dogIconDarkmode}
          alt="dog"
        />
      ),
    },
    {
      label: <Link to="/cat-category">Cat Breed</Link>,
      key: "cat",
      icon: (
        <img
          className={
            !globalContext.darkmode
              ? "header-menu-icon"
              : "header-menu-icon-dark-mode"
          }
          src={!globalContext.darkmode ? catIcon : catIconDarkmode}
          alt="cat"
        />
      ),
    },
    {
      label: <Link to="/upcoming">Services</Link>,
      key: "services",
      icon: (
        <img
          className="header-menu-icon"
          src={!globalContext.darkmode ? groomIcon : groomingIconDarkmode}
          alt="services"
        />
      ),
    },
  ];

  const onClick = (e) => {
    globalContext.setRoute(e.key);
  };
  const handleDarkmode = (checked) => {
    globalContext.setDarkmode(checked);
  };
  const menu = (
    <Menu
      onClick={(e) => {
        globalContext.handleChangeLanguage(e.key);
      }}
      items={[
        {
          key: "en",
          label: "English",
          icon: <Avatar size={20} src={EnFlag} />,
        },
        {
          key: "vi",
          label: "Vietnam",
          icon: <Avatar size={20} src={VnFlag} />,
        },
        {
          key: "kr",
          label: "Korean",
          icon: <Avatar size={20} src={KorFlag} />,
        },
      ]}
    />
  );

  return (
    <div className={!globalContext.darkmode ? "wrapper" : "wrapper-dark-mode"}>
      <Link to="/">
        <img
          src={!globalContext.darkmode ? paw : pawDarkmode}
          alt="logo"
          className={!globalContext.darkmode ? "logo" : "logo-dark-mode"}
        />
      </Link>
      <Space style={{ marginBottom: "10px" }}>
        <Menu
          className={
            !globalContext.darkmode ? "header-menu" : "header-menu-dark-mode"
          }
          onClick={onClick}
          selectedKeys={[globalContext.route]}
          mode="horizontal"
          items={items}
        />
      </Space>
      <div className="header-icon">
        <Space>
          <Switch
            size="smalle"
            checkedChildren="Dark"
            unCheckedChildren="Light"
            onChange={handleDarkmode}
          />
          <Dropdown
            overlayClassName="language-dropdown"
            overlay={menu}
            placement="bottom"
            arrow={{
              pointAtCenter: true,
            }}
          >
            {globalContext.languageIcon(i18n.language)}
          </Dropdown>
          {currentUser ? (
            <Avatar size={30} src={currentUser.avatar} />
          ) : (
            <Link to="/login">
              <Button style={{ borderRadius: 20 }} size="medium">
                Login
              </Button>
            </Link>
          )}
        </Space>
      </div>
    </div>
  );
}

export default LayoutHeader;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia, faSearch } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import SearchPopper from "../../../Components/Popper/searchPopper";
import "tippy.js/animations/scale.css";
import LanguagePopper from "../../../Components/Popper/languagePopper";
import { Link } from "react-router-dom";
import { Avatar, Button, Dropdown, Menu, message, Select, Space } from "antd";
import EnFlag from "../../../assets/Logo/united-kingdom.png";
// translation
import { useTranslation } from "react-i18next";
import "./header.scss";

function LayoutHeader({ main }) {
  const currentUser = {
    name: "Khương Duy",
    avatar:
      "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/185188939_2885221165066292_6106096938833222997_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=WMAltXsmAxcAX_nh7lc&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfBRorrMS81-kgKzNWUgQ9jD8kramXUd-bVd0B8VyqBzCg&oe=637F4366",
  };
  const [t] = useTranslation();

  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <Avatar src={EnFlag} />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <Avatar src={EnFlag} />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <Avatar src={EnFlag} />,
    },
  ];

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="wrapper">
      <Link to="/">
        <img
          src="data:image/png;base64,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"
          alt="logo"
          className="logo"
        />
      </Link>
      <div className="header-icon">
        {/* <SearchPopper>
          <FontAwesomeIcon className="icon" icon={faSearch} />
        </SearchPopper> */}
        {/* <LanguagePopper>
          <FontAwesomeIcon className="icon" icon={faEarthAsia} />
        </LanguagePopper> */}

        <Dropdown.Button
          icon={<Avatar src={EnFlag} />}
          menu={menuProps}
        ></Dropdown.Button>

        {currentUser ? (
          <div className="user">
            <Tippy
              render={(attr) => (
                <div className="username">{currentUser.name}</div>
              )}
              animation={false}
              offset={[30, 10]}
              placement="bottom-end"
              delay={[50, 500]}
            >
              <img
                src={currentUser.avatar}
                className="avatar"
                alt={currentUser.name}
              />
            </Tippy>
          </div>
        ) : (
          <Link to="/login">
            <Button
              style={{ borderRadius: "20px", marginLeft: "10px" }}
              size="large"
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default LayoutHeader;

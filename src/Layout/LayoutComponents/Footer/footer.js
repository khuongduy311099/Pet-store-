import styles from "./footer.scss";
import React from "react";
import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Tippy from "@tippyjs/react";
import CartIcon from "../../../Components/cartIcon/cartIcon";

// translation
import i18n from "../../../../src/translation/i18n";
import { useTranslation } from "react-i18next";
function LayoutFooter({ product }) {
  const [t] = useTranslation();
  return (
    <Row id="contact" className="footer-wrapper">
      <Col className="footer-item" span={8}>
        <div className=" footer-header">{t("Customer Services")}</div>
        <div className="footer-text">{t("Returns")}</div>
        <div className="footer-text">{t("Shipping Info")}</div>
        <div className="footer-text">{t("Recall and Advisories")}</div>
        <div className="footer-text">{t("Pet store Locator")}</div>
        <div className="footer-text">{t("Help")}</div>
        <div className="footer-text">{t("Contact us")}</div>
        <div className="footer-text">{t("Website Accessibility Policy")}</div>
      </Col>
      <Col className="footer-item" span={8}>
        <div className=" footer-header">{t("Services")}</div>
        <div className="footer-text">{t("Vital Care")}</div>
        <div className="footer-text">{t("Dog Grooming")}</div>
        <div className="footer-text">{t("Self-Serve Dog Wash")}</div>
        <div className="footer-text">{t("Positive Dog Training")}</div>
        <div className="footer-text">{t("Dog Breed Information")}</div>
        <div className="footer-text">{t("Resource Center")}</div>
        <div className="footer-text">{t("Pet Adoption")}</div>
      </Col>
      <Col className="footer-item" span={8}>
        <div className=" footer-header">{t("Follow us on")}</div>
        <div className="footer-icon">
          <Tippy
            render={(attr) => <div className="footer-media">Facebook</div>}
            animation={false}
            placement={"right-start"}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100007353100902"
            >
              <FontAwesomeIcon className="media-icon" icon={faFacebook} />
            </a>
          </Tippy>
        </div>
        <div className="footer-icon">
          <Tippy
            render={(attr) => <div className="footer-media">Instagram</div>}
            animation={false}
            placement={"right-start"}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/"
            >
              <FontAwesomeIcon className="media-icon" icon={faInstagram} />
            </a>
          </Tippy>
        </div>
        <div className="footer-icon">
          <Tippy
            render={(attr) => <div className="footer-media">Twitter</div>}
            animation={false}
            placement={"right-start"}
          >
            <FontAwesomeIcon className="media-icon" icon={faTwitter} />
          </Tippy>
        </div>
        <div className="footer-icon">
          <Tippy
            render={(attr) => <div className="footer-media">Youtube</div>}
            animation={false}
            placement={"right-start"}
          >
            <FontAwesomeIcon className="media-icon" icon={faYoutube} />
          </Tippy>
        </div>
        <div className="footer-icon">
          <Tippy
            render={(attr) => <div className="footer-media">TikTok</div>}
            animation={false}
            placement={"right-start"}
          >
            <FontAwesomeIcon className="media-icon" icon={faTiktok} />
          </Tippy>
        </div>
      </Col>
      <CartIcon />
    </Row>
  );
}

export default LayoutFooter;

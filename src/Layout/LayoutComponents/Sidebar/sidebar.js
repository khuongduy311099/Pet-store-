import Tippy from "@tippyjs/react/headless";
import styles from "./sidebar.scss";
import TypePopper from "./type-popper";
import React from "react";

// translation
import { useTranslation } from "react-i18next";
import i18n from "../../../translation/i18n";
function Sidebar({ styles }) {
  const [t] = useTranslation();
  return (
    <div style={styles} className="sidebar">
      <div className="sidebar-menu-lv1">{t("Accessories")}</div>
      <div className="sidebar-menu-lv1">{t("Pet care")}</div>
      <div className="sidebar-menu-lv1">{t("Food")}</div>
      <Tippy
        zIndex={10}
        delay={[250, 800]}
        offset={[220, -55]}
        hideOnClick={false}
        render={(attr) => <TypePopper />}
        interactive
        placement="bottom-end"
      >
        <li className="sidebar-menu-lv1 type-list">{t("Pet type")}</li>
      </Tippy>
    </div>
  );
}

export default Sidebar;

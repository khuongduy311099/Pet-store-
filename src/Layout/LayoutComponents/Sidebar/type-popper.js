import { faCat, faDog, faFish, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./sidebar.scss";

//translation
import { useTranslation } from "react-i18next";
import i18n from "../../../translation/i18n";
function TypePopper() {
  const [t] = useTranslation();
  return (
    <ul className="menu-lv2">
      <li className="menu-lv2-item">
        {t("Dog")} <FontAwesomeIcon icon={faDog} className="menu-icon" />
      </li>
      <li className="menu-lv2-item">
        {t("Cat")} <FontAwesomeIcon icon={faCat} className="menu-icon" />
      </li>
      <li className="menu-lv2-item">
        {t("Fish")} <FontAwesomeIcon icon={faFish} className="menu-icon" />
      </li>
      <li className="menu-lv2-item">
        {t("Others")} <FontAwesomeIcon icon={faPaw} className="menu-icon" />
      </li>
    </ul>
  );
}

export default TypePopper;

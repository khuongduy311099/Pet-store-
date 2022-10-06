import { faCat, faDog, faFish, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './sidebar.scss'

function TypePopper() {
  return (
    <ul className="menu-lv2">
      <li className="menu-lv2-item">
        Dog <FontAwesomeIcon icon={faDog} className="menu-icon" />
      </li>
      <li className="menu-lv2-item">
        Cat <FontAwesomeIcon icon={faCat} className="menu-icon" />
      </li>
      <li className="menu-lv2-item">
        Fish <FontAwesomeIcon icon={faFish} className="menu-icon" />
      </li>
      <li className="menu-lv2-item">
        Others <FontAwesomeIcon icon={faPaw} className="menu-icon" />
      </li>
    </ul>
  );
}

export default TypePopper;

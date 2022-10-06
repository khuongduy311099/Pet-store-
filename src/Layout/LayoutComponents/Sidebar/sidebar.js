import Tippy from "@tippyjs/react/headless";
import styles from "./sidebar.scss";
import TypePopper from "./type-popper";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-menu-lv1">ACCESSORIES</li>
        <li className="sidebar-menu-lv1">PET CARE</li>
        <li className="sidebar-menu-lv1">FOOD / PET SNACK</li>
        <Tippy
          zIndex={10}
          delay={[250, 800]}
          offset={[180, -55]}
          hideOnClick={false}
          render={(attr) => <TypePopper />}
          interactive
          placement="bottom-end"
        >
          <li className="sidebar-menu-lv1 type-list"> PET TYPE</li>
        </Tippy>
      </ul>
    </div>
  );
}

export default Sidebar;

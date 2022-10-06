import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Popper.scss";
import Tippy from "@tippyjs/react";
import {useState}from 'react'
function SearchPopper({ children }) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Tippy
      render={(attr) => (
        <div className="search-wrapper">
          <div className="search">
            <input
              className="search-input"
              placeholder="Search your favorite pet!!!"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
      )}
      onHidden={() => setSearchValue('')}
      interactive
      delay={[300, 300]}
      animation= {false}
    >
      {children}
    </Tippy>
  );
}

export default SearchPopper;

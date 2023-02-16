import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Styles/Style.css";

const Header = () => {
  return (
    <header>
      <div className="filter--wrapper">
        <div className="filter--container">
          <div className="filter">
            <span>Frontend</span>
            <div className="remove--btn">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="filter">
            <span>CSS</span>
            <div className="remove--btn">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="filter">
            <span>Backend</span>
            <div className="remove--btn">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
        <div className="clear--btn">clear</div>
      </div>
    </header>
  );
};

export default Header;

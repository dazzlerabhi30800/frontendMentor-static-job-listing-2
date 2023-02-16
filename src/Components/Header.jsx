import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Styles/Style.css";

const Header = ({ filterTags, removeTag, handleClear }) => {
  // console.log(filterTags.length);
  return (
    <header>
      <div
        className={
          filterTags.length > 0 ? "filter--wrapper show" : "filter--wrapper"
        }
      >
        <div className="filter--container">
          {filterTags &&
            filterTags.map((tag, i) => {
              return (
                <div className="filter" key={i}>
                  <span>{tag}</span>
                  <div className="remove--btn" onClick={() => removeTag(tag)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                </div>
              );
            })}
        </div>
        <div onClick={handleClear} className="clear--btn">
          clear
        </div>
      </div>
    </header>
  );
};

export default Header;

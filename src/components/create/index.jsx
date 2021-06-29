import React from "react";
import FilterOverlay from "./FilterOverlay";
import Suggestions from "../suggestion";
import plusIcon from "../../assets/icons/plus-icon.png";
import { useStoreActions } from "easy-peasy";

function Create({ label, extra }) {
  const createBucket = useStoreActions((actions) => actions.bucketModel.create);

  return (
    <div className="section add-item __shadow--sm">
      <div className="add-item__relative">
        <div className="add-item__input">
          <img className="add-item__icon" src={plusIcon} alt={label} />
          <input
            className="add-item__input-field"
            type="text"
            placeholder={label}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                createBucket(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
        {/* Filter Overlay */}
        {extra && <FilterOverlay />}
      </div>
      <div className="horizontal-line"></div>
      {/* Suggestion Chips */}
      {extra && <Suggestions />}
    </div>
  );
}

export default Create;

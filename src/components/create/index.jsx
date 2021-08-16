import React from "react";
import FilterOverlay from "./FilterOverlay";
import Suggestions from "../suggestion";
import plusIcon from "../../assets/icons/plus-icon.png";
import { useStoreActions } from "easy-peasy";
import shortid from "shortid";
import { useParams } from "@reach/router";

function Create({ label, extra }) {
  const createBucket = useStoreActions((actions) => actions.bucketModel.create);
  const suggestionModelAction = useStoreActions(
    (actions) => actions.suggestionModel
  );
  const createItem = useStoreActions((actions) => actions.itemModel.create);
  const addItem = useStoreActions((actions) => actions.bucketModel.addItem);
  const params = useParams();

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
                if (extra) {
                  const id = shortid.generate();
                  createItem({
                    name: e.target.value,
                    id: id,
                    bucketID: params.bucketID,
                  });
                  addItem({ bucketID: params.bucketID, itemID: id });
                  suggestionModelAction.add({ text: e.target.value });
                  suggestionModelAction.changeSearchTerm("");
                  e.target.value = "";
                } else {
                  createBucket(e.target.value);
                  e.target.value = "";
                }
              }
            }}
            onChange={(event) => {
              if (extra) {
                suggestionModelAction.changeSearchTerm(event.target.value);
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

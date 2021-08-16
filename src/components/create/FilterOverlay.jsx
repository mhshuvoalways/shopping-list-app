import plusIcon from "../../assets/icons/plus-icon.png";
import { useStoreState, useStoreActions } from "easy-peasy";
import shortid from "shortid";
import { useParams } from "@reach/router";

function FilterOverlay() {
  const suggestionModel = useStoreState((state) => state.suggestionModel);
  const createItem = useStoreActions((actions) => actions.itemModel.create);
  const addItem = useStoreActions((actions) => actions.bucketModel.addItem);
  const suggestionModelAction = useStoreActions(
    (actions) => actions.suggestionModel
  );
  const params = useParams();

  return (
    <div
      className={
        suggestionModel.search.length > 0
          ? "add-item__filter-overlay"
          : "add-item__filter-overlay hide"
      }
    >
      <ul className="add-item__filter-list">
        {suggestionModel.search.map((item) => (
          <li
          key={item.id}
            onClick={() => {
              suggestionModelAction.changeSearchTerm("");
              suggestionModelAction.add({ id: item.id });
              const id = shortid.generate();
              createItem({
                name: item.text,
                id: id,
                bucketID: params.bucketID,
              });
              addItem({ bucketID: params.bucketID, itemID: id });
            }}
            className="add-item__filter-item"
          >
            <div className="add-item__filter-content">
              <img
                className="add-item__filter-icon"
                src={plusIcon}
                alt="Item"
              />
              {item.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterOverlay;

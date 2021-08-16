import React, { useState } from "react";
import deleteIcon from "../../assets/icons/delete-icon.png";
import completeIcon from "../../assets/icons/complete-icon.png";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams, Redirect } from "@reach/router";

function ItemTable() {
  const [isEditableName, setEditableName] = useState({ isEdit: true, id: "" });
  const [isEditableQuantity, setisEditableQuantity] = useState({
    isEdit: true,
    id: "",
  });
  const [isEditablePrice, setisEditablePrice] = useState({
    isEdit: true,
    id: "",
  });

  const bucketModel = useStoreState((state) =>
    Object.values(state.bucketModel.items)
  );

  const itemModel = useStoreState((state) =>
    Object.values(state.itemModel.items)
  );

  const removeBucketItem = useStoreActions(
    (state) => state.bucketModel.removeItem
  );
  const removeItem = useStoreActions((state) => state.itemModel.remove);
  const updateItem = useStoreActions((state) => state.itemModel.update);
  const toggleCompleted = useStoreActions(
    (state) => state.itemModel.toggleCompleted
  );

  const params = useParams();

  const items = itemModel.filter((item) => {
    return !item.isCompleted && item.bucketID === params.bucketID;
  });

  if (bucketModel.length === 0) {
    return <Redirect to="/" noThrow />;
  }

  return (
    <table className="table__table">
      <thead className="table__thead">
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Cost</th>
          <th className="align-right">Actions</th>
        </tr>
      </thead>
      {items.map((item) => {
        return (
          <tbody className="table__tbody" key={item.id}>
            <tr>
              <th>
                <div
                  className="table__item-name"
                  onClick={() => setEditableName({ isEdit: true, id: item.id })}
                >
                  {isEditableName.isEdit && isEditableName.id === item.id ? (
                    <label
                      onKeyPress={(event) => {
                        if (event.key === "Enter") {
                          updateItem({
                            itemID: item.id,
                            key: "name",
                            value: event.target.innerText,
                          });
                          setEditableName({ isEdit: false });
                        }
                      }}
                      contentEditable
                      className="table__bucket-name auto-grow-input"
                    >
                      {item.name}
                    </label>
                  ) : (
                    <label className="table__bucket-name">{item.name}</label>
                  )}
                </div>
              </th>
              <th>
                <div
                  onClick={() =>
                    setisEditableQuantity({ isEdit: true, id: item.id })
                  }
                  className="table__item-input"
                >
                  {isEditableQuantity.isEdit &&
                  isEditableQuantity.id === item.id ? (
                    <label
                      onKeyPress={(event) => {
                        if (event.key === "Enter") {
                          updateItem({
                            itemID: item.id,
                            key: "quantity",
                            value: event.target.innerText,
                          });
                          setisEditableQuantity(false);
                        }
                      }}
                      contentEditable
                      className="table__bucket-name auto-grow-input"
                    >
                      {item.quantity}
                    </label>
                  ) : (
                    <span>{item.quantity}</span>
                  )}
                </div>
              </th>
              <th>
                <div
                  className="table__item-input"
                  onClick={() =>
                    setisEditablePrice({ isEdit: true, id: item.id })
                  }
                >
                  {isEditablePrice.isEdit && isEditablePrice.id === item.id ? (
                    <label
                      onKeyPress={(event) => {
                        if (event.key === "Enter") {
                          updateItem({
                            itemID: item.id,
                            key: "price",
                            value: event.target.innerText,
                          });
                          setisEditablePrice({ isEdit: true });
                        }
                      }}
                      contentEditable
                      className="table__bucket-name auto-grow-input"
                    >
                      {item.price}
                    </label>
                  ) : (
                    <div>
                      <span>{item.price + " "}</span>
                      <span>BDT</span>
                    </div>
                  )}
                </div>
              </th>
              <th className="align-right">
                <button
                  onClick={() => {
                    toggleCompleted(item.id);
                  }}
                  className="icon-button"
                >
                  <img
                    className="icon-button__icon"
                    src={completeIcon}
                    alt="Delete"
                  />
                </button>
                <button
                  onClick={() => {
                    removeBucketItem({
                      bucketID: params.bucketID,
                      itemID: item.id,
                    });
                    removeItem(item.id);
                  }}
                  className="icon-button"
                >
                  <img
                    className="icon-button__icon"
                    src={deleteIcon}
                    alt="Delete"
                  />
                </button>
              </th>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default ItemTable;

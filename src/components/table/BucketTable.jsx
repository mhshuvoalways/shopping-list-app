import React, { useState } from "react";
import deleteIcon from "../../assets/icons/delete-icon.png";
import editIcon from "../../assets/icons/edit-icon.png";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Link } from "@reach/router";

function Table() {
  const [isEditable, setEditable] = useState({ isEdit: true, id: "" });
  const bucketModel = useStoreState((state) =>
    Object.values(state.bucketModel.items)
  );
  const bucketModelAction = useStoreActions((state) => state.bucketModel);

  return (
    <table className="table__table">
      <thead className="table__thead">
        <tr>
          <th>Bucket Name</th>
          <th>Created Date</th>
          <th>Cost</th>
          <th className="align-right">Actions</th>
        </tr>
      </thead>
      {bucketModel.map((bucket) => {
        return (
          <tbody className="table__tbody" key={bucket.id}>
            <tr>
              <th>
                <div className="table__item-name">
                  {isEditable.isEdit && isEditable.id === bucket.id ? (
                    <label
                      contentEditable
                      className="table__bucket-name auto-grow-input"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          bucketModelAction.rename({
                            bucketID: bucket.id,
                            name: e.target.innerText,
                          });
                          setEditable({ isEdit: false });
                        }
                      }}
                    >
                      {bucket.name}
                    </label>
                  ) : (
                    <Link to={`/buckets/${bucket.id}`}>
                      <label className="table__bucket-name">
                        {bucket.name}
                      </label>
                    </Link>
                  )}
                </div>
              </th>
              <th>
                <div className="table__item-input">
                  <span>{bucket.create}</span>
                </div>
              </th>
              <th>
                <div className="table__item-input">
                  {isEditable.isEdit && isEditable.id === bucket.id ? (
                    <div>
                      <span
                        contentEditable
                        className="table__bucket-name auto-grow-input"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            bucketModelAction.updateCost({
                              bucketID: bucket.id,
                              costs: e.target.innerText,
                            });
                            setEditable({ isEdit: false });
                          }
                        }}
                      >
                        {bucket.costs}
                      </span>
                      <span>BDT</span>
                    </div>
                  ) : (
                    <span>{bucket.costs} BDT</span>
                  )}
                </div>
              </th>
              <th className="align-right">
                <button
                  onClick={() => {
                    setEditable({ isEdit: true, id: bucket.id });
                  }}
                  className="icon-button"
                >
                  <img
                    className="icon-button__icon"
                    src={editIcon}
                    alt="Edit"
                  />
                </button>
                <button
                  onClick={() => bucketModelAction.remove(bucket.id)}
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

export default Table;

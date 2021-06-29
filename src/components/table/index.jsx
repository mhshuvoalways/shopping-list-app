import deleteIcon from "../../assets/icons/delete-icon.png";
import { useStoreState, useStoreActions } from "easy-peasy";

function Table() {
  const bucketModel = useStoreState((state) =>
    Object.values(state.bucketModel.items)
  );
  const deleteBucket = useStoreActions((state) => state.bucketModel.remove);

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
      {bucketModel.map((bucket) => {
        return (
          <tbody className="table__tbody" key={bucket.id}>
            <tr>
              <th>
                <div className="table__item-name">
                  <input type="checkbox" />
                  <label>{bucket.name}</label>
                </div>
              </th>
              <th>
                <div className="table__item-input">
                  <span
                    className="auto-grow-input"
                    role="textbox"
                    aria-placeholder="500G"
                    contentEditable
                  >
                    2KG
                  </span>
                </div>
              </th>
              <th>
                <div className="table__item-input">
                  <span
                    className="auto-grow-input"
                    role="textbox"
                    contentEditable
                  >
                    {bucket.costs}
                  </span>
                  <span>BDT</span>
                </div>
              </th>
              <th className="align-right">
                <button
                  onClick={() => deleteBucket(bucket.id)}
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

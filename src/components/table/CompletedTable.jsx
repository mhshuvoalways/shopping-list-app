import undoCompleteIcon from "../../assets/icons/undo-complete-icon.png";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams } from "@reach/router";

function CompletedTable() {
  const itemModel = useStoreState((state) =>
    Object.values(state.itemModel.items)
  );

  const toggleCompleted = useStoreActions(
    (state) => state.itemModel.toggleCompleted
  );

  const params = useParams();

  const items = itemModel.filter((item) => {
    return item.isCompleted && item.bucketID === params.bucketID;
  });

  let price = 0;
  items.map((item) => (price += Number(item.price)));

  return (
    <table className="table__table">
      <thead className="table__thead">
        <tr>
          <th>Completed Item</th>
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
                <div className="table__item-name">
                  <label className="table__bucket-name">{item.name}</label>
                </div>
              </th>
              <th>
                <div className="table__item-input">
                  <span>{item.quantity}</span>
                </div>
              </th>
              <th>
                <div className="table__item-input">
                  <span>{item.price} BDT</span>
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
                    src={undoCompleteIcon}
                    alt="Delete"
                  />
                </button>
              </th>
            </tr>
          </tbody>
        );
      })}
      <tbody>
        {items.length > 0 && (
          <tr>
            <th>Price: {price}</th>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CompletedTable;

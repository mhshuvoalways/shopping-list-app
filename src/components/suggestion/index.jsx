import { useStoreState, useStoreActions } from "easy-peasy";
import shortid from "shortid";
import { useParams } from "@reach/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Suggestions() {
  const suggestionModel = useStoreState((state) =>
    Object.values(state.suggestionModel.items)
  );
  const suggestionModelAction = useStoreActions(
    (actions) => actions.suggestionModel
  );
  const createItem = useStoreActions((actions) => actions.itemModel.create);
  const addItem = useStoreActions((actions) => actions.bucketModel.addItem);
  const params = useParams();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
  };

  const suggestion = suggestionModel.sort((a, b) => {
    return b.appeared - a.appeared;
  });

  return (
    <Slider {...settings}>
      {suggestion.map((item) => (
        <div
          className="add-item__suggestion-chip-item"
          onClick={() => {
            const id = shortid.generate();
            createItem({
              name: item.text,
              id: id,
              bucketID: params.bucketID,
            });
            addItem({ bucketID: params.bucketID, itemID: id });
            suggestionModelAction.add({ id: item.id });
          }}
        >
          {item.text}
        </div>
      ))}
    </Slider>
  );
}

export default Suggestions;

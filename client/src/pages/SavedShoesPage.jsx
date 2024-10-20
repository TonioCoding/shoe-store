import { useSelector } from "react-redux";
import ShoeCard from "../components/ShoeCard";

const SavedShoes = () => {
  const { favorites } = useSelector(
    (state) => state.persistedReducer.favorites
  );

  return (
    <div className="w-full flex justify-center my-9 flex-wrap">
      {favorites.map(
        ({
          _id,
          name,
          model,
          price,
          onSale,
          imgUrls,
          brand,
          sizesNotInStock,
          colors,
          gender,
        }) => {
          return (
            <ShoeCard
              key={_id}
              id={_id}
              name={name}
              price={price}
              imgUrls={imgUrls}
              model={model}
              brand={brand}
              sizesNotInStock={sizesNotInStock}
              onSale={onSale}
              colors={colors}
              gender={gender}
            />
          );
        }
      )}
    </div>
  );
};

export default SavedShoes;

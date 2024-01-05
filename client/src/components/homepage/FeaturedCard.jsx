/* eslint-disable react/prop-types */

const FeaturedCard = (props) => {
  return (
    <img
      src={props.imgUrl}
      alt="card-img"
      className="object-cover border-gray-400 border-2"
      width={"400px"}
    />
  );
};

export default FeaturedCard;

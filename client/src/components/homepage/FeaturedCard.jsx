/* eslint-disable react/prop-types */

const FeaturedCard = (props) => {
  return (
    <div className="w-[33%]">
      <img
        src={props.imgUrl}
        alt="card-img"
        className="object-cover border-gray-400 border-2"
        width={"400px"}
      />
    </div>
  );
};

export default FeaturedCard;

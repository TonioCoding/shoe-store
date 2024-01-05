/* eslint-disable react/prop-types */

const FeaturedCard = (props) => {
  return (
    <div className="cursor-pointer">
      <div className="w-full inline-block">
        <img
          src={props.imgUrl}
          alt="card-img"
          className=" w-full object-scale-down object-center border-gray-400 border-2"
        />
      </div>
      <h1 className="font-lt text-center text-xl my-1">{props.heading}</h1>
      <p className="font-rt text-center mb-10 text-sm">{props.text}</p>
    </div>
  );
};

export default FeaturedCard;

/* eslint-disable react/prop-types */

const FeaturedCard = (props) => {
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center my-7">
      <div className="w-[50vw] lg:w-[30vw] inline-flex items-center justify-center">
        <img
          src={props.imgUrl}
          alt="card-img"
          className="w-full object-cover object-center border-gray-900 border-2"
        />
      </div>
      <h1 className="font-lt text-center text-xl my-1">{props.heading}</h1>
      <p className="font-rt text-center text-sm">{props.text}</p>
    </div>
  );
};

export default FeaturedCard;

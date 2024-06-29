/* eslint-disable react/prop-types */

const MembershipCard = (props) => {
  return (
    <div className="mx-5 mb-4">
      <div className=" w-[75vw] md:w-[35vw] md:h-[70vh] cursor-pointer flex justify-center items-center ">
        <img
          src={props.imgUrl}
          alt="img"
          className="object-cover object-center border-gray-900 border-2"
        />
      </div>
      <h1 className="text-center font-lt text-2xl mb-3">{props.title}</h1>
      <p className="text-center font-rt text-sm">{props.text}</p>
    </div>
  );
};

export default MembershipCard;

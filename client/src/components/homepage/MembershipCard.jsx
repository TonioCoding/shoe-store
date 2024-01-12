/* eslint-disable react/prop-types */

const MembershipCard = (props) => {
  return (
    <div className="mx-10 mb-10 ">
      <div className="w-[35vw] h-[70vh] cursor-pointer flex justify-center items-center ">
        <img
          src={props.imgUrl}
          alt="img"
          className="object-cover object-center border-gray-700 border-2"
        />
      </div>
    </div>
  );
};

export default MembershipCard;

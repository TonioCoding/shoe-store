/* eslint-disable react/prop-types */
const CircleImage = (props) => {
  return (
    <img
      className="h-96 w-96 rounded-full object-cover object-center"
      src={props.imgUrl}
      alt="nature image"
    />
  );
};

export default CircleImage;

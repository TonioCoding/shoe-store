/* eslint-disable react/prop-types */
const ImageWithShadow = (props) => {
  return (
    <img
      className="w-full h-auto lg:h-[20rem] object-cover object-center shadow-lg shadow-blue-gray-900/50  border-black border-b-8"
      src={props.ImgUrl}
      alt="hero-img"
    />
  );
};

export default ImageWithShadow;

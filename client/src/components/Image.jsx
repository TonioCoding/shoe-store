/* eslint-disable react/prop-types */
const ImageWithShadow = (props) => {
  return (
    <img
      className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
      src={props.ImgUrl}
      alt="nature image"
    />
  );
};

export default ImageWithShadow;

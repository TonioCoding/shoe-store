/* eslint-disable react/prop-types */
const ImageWithShadow = (props) => {
  return (
    <img
      className="h-96 w-full object-scale-down object-center shadow-lg shadow-blue-gray-900/50 xl:object-fill hp1:object-cover hp1:border-black hp1:border-b-8"
      src={props.ImgUrl}
      alt="nature image"
    />
  );
};

export default ImageWithShadow;

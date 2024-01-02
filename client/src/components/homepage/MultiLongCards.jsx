import LongCard from "../LongCard";

const MultiLongCards = () => {
  return (
    <div className="flex justify-center m-5 mb-10">
      <LongCard mainHeading={"Hello"} subHeading={"welcome here to the shoe.."} imgUrl={""}/>
      <LongCard />
      <LongCard />
    </div>
  );
};

export default MultiLongCards;

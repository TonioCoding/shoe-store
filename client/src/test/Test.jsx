import {
  baseballInterestImg,
  basketballInterestImg,
  soccerInterestImg,
} from "../assets/imgs/interests-imgs";
import InterestCard from "../components/accountpage/InterestCard";

const Test = () => {
  return (
    <div className="items-center flex h-[100vh] gap-x-7">
      <InterestCard img={basketballInterestImg} text="Basketball" />
      <InterestCard img={baseballInterestImg} text="Baseball" />
      <InterestCard img={soccerInterestImg} text="Soccer" />
    </div>
  );
};

export default Test;

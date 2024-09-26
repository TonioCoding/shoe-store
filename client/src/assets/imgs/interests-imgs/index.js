import basketballInterestImg from "../../imgs/interests-imgs/ai-img-1.jpg";
import soccerInterestImg from "../../imgs/interests-imgs/ai-img-2.jpg";
import footballInterestImg from "../../imgs/interests-imgs/ai-img-3.jpg";
import tennisInterestImg from "../../imgs/interests-imgs/ai-img-4.jpg";
import golfInterestImg from "../../imgs/interests-imgs/ai-img-5.jpg";
import exerciseInterestImg from "../../imgs/interests-imgs/ai-img-6.jpg";
import fashionInterestImg from "../../imgs/interests-imgs/ai-img-7.jpg";
import baseballInterestImg from "../../imgs/interests-imgs/baseball-img-1.jpg";
import runningInterestImg from "../../imgs/interests-imgs/ai-img-8.jpg";

function interestNameToImage(interestName) {
  switch (interestName) {
    case "Basketball":
      return basketballInterestImg;
    case "Soccer":
      return soccerInterestImg;
    case "Football":
      return footballInterestImg;
    case "Tennis":
      return tennisInterestImg;
    case "Golf":
      return golfInterestImg;
    case "Exercise":
      return exerciseInterestImg;
    case "Fashion":
      return fashionInterestImg;
    case "Baseball":
      return baseballInterestImg;
    case "Running":
      return runningInterestImg;
  }
}

export {
  basketballInterestImg,
  soccerInterestImg,
  footballInterestImg,
  tennisInterestImg,
  golfInterestImg,
  exerciseInterestImg,
  fashionInterestImg,
  baseballInterestImg,
  runningInterestImg,
  interestNameToImage,
};

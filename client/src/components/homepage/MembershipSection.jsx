import MembershipCard from "./MembershipCard";
import ButtonRounded from "../RoundedButton";
const MembershipSection = () => {
  return (
    <section className="w-full">
      <div className="mb-10">
        <h1 className="text-center font-lt text-3xl mb-5">Membership</h1>
        <p className="text-center font-rt text-lg">
          Discover your benefits as a member
        </p>
      </div>
      <div className="membership-slider">
        <MembershipCard
          imgUrl="../src/assets/imgs/home-imgs/membership-img-1.jpg"
          title="Free Shipping"
          text="Zero shipping fees on any order"
        />
        <MembershipCard
          imgUrl="../src/assets/imgs/home-imgs/membership-img-2.jpg"
          title="Early Access to shoes"
          text="Gain access eariler to the latest shoes"
        />
        <MembershipCard
          imgUrl="../src/assets/imgs/home-imgs/membership-img-3.gif"
          title="Membership Sales"
          text="Exclusive sales to members only"
        />
        <MembershipCard
          imgUrl="../src/assets/imgs/home-imgs/membership-img-4.png"
          title="Membership Rewards"
          text="Experience rewards as a loyal member"
        />
        <MembershipCard
          imgUrl="../src/assets/imgs/home-imgs/membership-img-5.jpg"
          title="Membership Exclusive Products"
          text="Exclusive products to members only"
        />
      </div>
      <div className="flex justify-center mt-10">
        <ButtonRounded text="Sign Up!"/>
      </div>
    </section>
  );
};

export default MembershipSection;

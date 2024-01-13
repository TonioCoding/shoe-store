import MembershipCard from "./MembershipCard";
import ButtonRounded from "../RoundedButton";
const MembershipSection = () => {
  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="text-center font-lt text-3xl mb-5">Membership</h1>
        <p className="text-center font-rt text-lg">
          Discover your benefits as a member
        </p>
      </div>
      <div className="membership-slider">
        <MembershipCard
          imgUrl="https://cdn.govexec.com/media/img/cd/2023/11/17/11172023USPS/open-graph.jpg"
          title="Free Shipping"
        />
        <MembershipCard
          imgUrl="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/649840_v2.jpg"
          title="Early Access to shoes"
        />
        <MembershipCard
          imgUrl="https://www.xpresstags.com/img/lg/L/Circular-Sale-Price-Label-Sticker-LB-1795.gif"
          title="Membership Sales"
        />
        <MembershipCard
          imgUrl="https://www.hrosm.com/wp-content/uploads/2021/11/text-head.png"
          title="Membership Rewards"
        />
        <MembershipCard
          imgUrl="https://cdn.nextgov.com/media/img/cd/2020/12/09/NGshopping20201209/open-graph.jpg"
          title="Membership Exclusive Products"
        />
      </div>
      <div className="flex justify-center mt-10">
        <ButtonRounded text="Become a member!" />
      </div>
    </div>
  );
};

export default MembershipSection;

import MembershipCard from "./MembershipCard";
import ButtonRounded from "../RoundedButton";
const MembershipSection = () => {
  return (
    <div>
      <h1 className="text-center font-lt text-3xl mb-20">Membership</h1>
      <div className="membership-slider">
        <MembershipCard imgUrl="https://cdn.govexec.com/media/img/cd/2023/11/17/11172023USPS/open-graph.jpg" />
        <MembershipCard imgUrl="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/649840_v2.jpg" />
        <MembershipCard imgUrl="https://www.xpresstags.com/img/lg/L/Circular-Sale-Price-Label-Sticker-LB-1795.gif" />
        <MembershipCard imgUrl="https://www.hrosm.com/wp-content/uploads/2021/11/text-head.png" />
        <MembershipCard imgUrl="https://cdn.nextgov.com/media/img/cd/2020/12/09/NGshopping20201209/open-graph.jpg" />
      </div>
      <div className="flex justify-center mt-10">
        <ButtonRounded text="Become a member!"/>
      </div>
    </div>
  );
};

export default MembershipSection;

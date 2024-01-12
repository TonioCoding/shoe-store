import MembershipCard from "./MembershipCard";
import ButtonRounded from "../RoundedButton";
const MembershipSection = () => {
  return (
    <div>
      <h1 className="text-center font-lt text-3xl mb-20">Membership</h1>
      <div className="membership-slider">
        <MembershipCard imgUrl="https://cdn.govexec.com/media/img/cd/2023/11/17/11172023USPS/open-graph.jpg" />
        <MembershipCard imgUrl="https://animemangastore.com/wp-content/uploads/2022/12/men-shoes-sneakers-male-mens-casual-shoe_main-3-1-600x600.jpg" />
        <MembershipCard imgUrl="https://static.nike.com/a/images/t_default/f8a45acc-7b34-49e0-9760-e1d070befcdb/pegasus-40-womens-road-running-shoes-L80k6C.png" />
        <MembershipCard imgUrl="https://static.nike.com/a/images/t_default/f8a45acc-7b34-49e0-9760-e1d070befcdb/pegasus-40-womens-road-running-shoes-L80k6C.png" />
        <MembershipCard imgUrl="https://static.nike.com/a/images/t_default/f8a45acc-7b34-49e0-9760-e1d070befcdb/pegasus-40-womens-road-running-shoes-L80k6C.png" />
      </div>
      <div className="flex justify-center mt-10">
        <ButtonRounded text="Become a member!"/>
      </div>
    </div>
  );
};

export default MembershipSection;

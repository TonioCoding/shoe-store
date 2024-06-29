/* eslint-disable react/prop-types */
import ShoeCard from "../components/ShoeCard";

const ShoePage = ({ brand }) => {
  return (
    <main className="bg-white h-[100vh]">
      <section className="pt-7 px-5">
        <p className="">{brand ? brand : "No brand"}</p>
        <ShoeCard />
      </section>
    </main>
  );
};

export default ShoePage;

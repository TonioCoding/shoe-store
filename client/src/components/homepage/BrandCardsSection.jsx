import HomeCard from "../HomePageCard";

const BrandCardsSection = () => {
  return (
    <section className="w-full">
      <div className="mb-20">
        <h2 className="font-lt text-2xl text-center max-w-full mt-20">
          DISCOVER WITH BELOVED BRANDS
        </h2>
        <h1 className="font-rt text-xl text-center mt-3 font-normal max-w-full">
          Find your desired sneakers from immortalized shoe brands.
        </h1>
      </div>
      <h2 className="text-center font-lt max-w-full text-2xl my-5 mt-10 underline">
        TRENDING BRANDS
      </h2>
      <div className="flex flex-col items-center justify-center sm:flex-wrap lg:flex-row w-full gap-x-10">
        <HomeCard
          src="../src/assets/imgs/home-imgs/adidaslogo.jpg"
          brandName="Adidas"
        />
        <HomeCard
          src="../src/assets/imgs/home-imgs/nikelog.png"
          brandName="Nike"
        />
        <HomeCard
          src="../src/assets/imgs/home-imgs/air-jordan-logo.png"
          brandName="Jordan"
        />
      </div>
    </section>
  );
};

export default BrandCardsSection;

import ImageWithShadow from "./Image";
import LearnMoreButton from "./LearnMoreButton";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex justify-center items-center mb-5 max-w-full overflow-x-clip shadow-2xl flex-col lg:flex-row bg-[#f5f5f5] flex-shrink-1">
        <ImageWithShadow ImgUrl="../../src/assets/imgs/hero-imgs/kyrie7collage_1024x.webp" />
        <ImageWithShadow ImgUrl="../../src/assets/imgs/hero-imgs/ae1photoshoot.jpg" />
        <ImageWithShadow ImgUrl="../../src/assets/imgs/hero-imgs/melo2photoshoot.jpg" />
      </div>
      <div className=" flex flex-col justify-center mb-30 text-">
        <h1 className="text-center font-lt text-3xl m-3 mt-10">
          Winter Basketball Shoe Sale
        </h1>
        <p className="text-center font-rt text-md">
          45% markdown on Basketball sneakers
        </p>
        <div className="flex justify-center mt-10">
          <LearnMoreButton text="View Shoes" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import ImageWithShadow from "./Image";
import LearnMoreButton from "./LearnMoreButton";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-5 w-full overflow-x-clip shadow-2xl flex-col lg:flex-row bg-[#f5f5f5]">
        <ImageWithShadow ImgUrl="https://stuffgy.com/cdn/shop/articles/kyrie7collage_1024x.jpg?v=1605625907" />
        <ImageWithShadow ImgUrl="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_3237%2Cy_3988/MjAyOTUxNTIzMzUxNjY3NzI0/edwards-adidas.jpg" />
        <ImageWithShadow ImgUrl="https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/_resampled/ScaleWidthWyIxMDI0Il0/melo2.jpg" />
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
    </div>
  );
};

export default Hero;

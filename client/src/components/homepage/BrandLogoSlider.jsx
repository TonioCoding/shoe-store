import { Carousel } from "@material-tailwind/react";

const LogoSlider = () => {
  return (
    <div
      className="flex justify-center max-w-full lg:w-[50%] shadow-lg shadow-blue-gray-900/50 rounded-xl mx-5"
      id="brand-slider"
    >
      <Carousel
        transition={{ duration: 1.5 }}
        className="rounded-xl"
        autoplay={true}
        loop={true}
      >
        <img
          src="https://cdn.shopify.com/s/files/1/2344/9529/articles/210415_R_R_PickleBall_0355_WEB.jpg?v=1619026291"
          alt="image 1"
          className="w-full h-full object-fill 2xl:object-contain"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/61e77523eeb96f698bd7ceb9/1664634018229-VZDTOAWNXPF9G9JGTXMF/Adidas-FW22-Nora-Photo-OnBody-Board-Feet01.jpg"
          alt="image 2"
          className="w-full h-full object-fill 2xl:object-contain"
        />
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9yZGFuJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="image 3"
          className="w-full h-full object-fill 2xl:object-contain"
        />
      </Carousel>
    </div>
  );
};

export default LogoSlider;

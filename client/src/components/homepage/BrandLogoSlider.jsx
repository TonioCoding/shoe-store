import { Carousel } from "@material-tailwind/react";

const LogoSlider = () => {
  return (
    <div className="flex justify-center" id="brand-slider">
        <Carousel transition={{ duration: 1 }} className="rounded-xl">
      <img
        src="https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/177/1-best-nike-tennis-shoes-15965191-1440.jpg"
        alt="image 1"
        className="w-{100px} h-{100px} object-contain"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/61e77523eeb96f698bd7ceb9/1664634018229-VZDTOAWNXPF9G9JGTXMF/Adidas-FW22-Nora-Photo-OnBody-Board-Feet01.jpg"
        alt="image 2"
        className="w-{50px} h-{50px} object-contain"
      />
      <img
        src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9yZGFuJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="image 3"
        className="w-{100%} h-{100%} object-cover"
      />
    </Carousel>

    </div>
    
  );
};

export default LogoSlider;

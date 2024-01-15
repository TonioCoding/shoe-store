import { Link } from "react-router-dom";

const RedirectSection = () => {
  return (
    <div className="w-full mb-10">
      <div className="mb-7">
        <h1 className="text-center font-lt text-2xl mb-5 underline">
          GET STARTED
        </h1>
        <p className="text-center font-rt text-md">
          Begin your shopping experience
        </p>
      </div>
      <div className="flex flex-col justify-around items-center sm:flex-row">
        <Link to={'/brands-page'}>
          <button className="redirect-button-2 font-lt">BRANDS</button>
        </Link>
        <Link to={'/sales-page'}>
          <button className="redirect-button-2 font-lt">SALES</button>
        </Link>
        <Link to={"/membership-page"}>
          <button className="redirect-button-2 font-lt">MEMBERSHIP</button>
        </Link>
        <Link to={"/sports-page"}>
          <button className="redirect-button-2 font-lt">SPORTS</button>
        </Link>
      </div>
    </div>
  );
};

export default RedirectSection;

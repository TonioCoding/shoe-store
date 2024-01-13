const RedirectSection = () => {
  return (
    <div className="w-full">
        <h1 className="text-center font-lt text-2xl mb-5 underline">GET STARTED</h1>
      <div className="flex flex-col justify-center items-center sm:flex-row">
        <button className="redirect-button text-3xl">BRANDS</button>
        <button className="redirect-button text-3xl">SALES</button>
        <button className="redirect-button text-3xl">MEMBERSHIP</button>
        <button className="redirect-button text-3xl">SPORTS</button>
      </div>
    </div>
  );
};

export default RedirectSection;

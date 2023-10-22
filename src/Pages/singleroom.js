import Footer from "../Components/Footer";

function Singleroom() {
  return (
    <>
      <div className="px-32 w-full  text-center  py-28 flex flex-col justify-center items-center">
        <h3 className="head-text text-center text-4xl pb-10">Single Room</h3>
        <img
          className="workspace w-[856px] h-[455px] pb-10"
          alt="Rooms"
          src={Slider}
        />
      </div>
      <Footer />
    </>
  );
}

export default Singleroom;

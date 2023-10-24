import Centerhome from "../Components/Centerhome";
import Navbar from "../Components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-no-repeat bg-bottom flex justify-center items-center w-[100vw] h-[87vh] md:h-[95vh]  sm:h-[100%] bg-cover bg-homepage  homepage">
        <Centerhome />
      </div>
    </>
  );
};

export default Home;

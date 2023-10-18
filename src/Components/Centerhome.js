import { Link } from "react-router-dom";

const Centerhome = () => {
  const customStyles = {
    textTransform: "uppercase",
    fontWeight: "bold",
    lineHeight: "normal",
    background: "linear-gradient(180deg, #ffa24b 38.89%, #813819 57.35%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    WebkitTextStroke: "3px #ffa24b",
  };

  return (
    <div className="centerhome rounded-[14px] md:rounded-none  sm:rounded-none bg-black bg-opacity-75 flex  flex-col items-center justify-center w-[883px] h-[399px] box-border gap-6 sm:gap-10 sm:w-[100vw] sm:bg-[length:200px_100px] sm:bg-center md:h-[100%] sm:h-[100vh] sm:p-0">
      <p className="text-white text-3xl m-0"> Welcome To</p>
      <h1
        className="text-[90px] -mt-[30px] md:text-[50px]  sm:text-[40px] sm:w-[90vw] sm:ml-[10%]"
        style={customStyles}
      >
        Misrah Arena
      </h1>
      <div className=" bg-[#d8976c] w-[378px} h-[3px] text-transparent sm:w-[250px]">
        fkermjknegwkeknrenladoinirnnlgn
      </div>
      <div className="flex  flex-row sm:ml-[10%] sm:w-[80%]">
        <Link className="centerhome-links" to="/guestrooms">
          Guest Rooms
        </Link>
        <Link className="centerhome-links" to="/eventhall">
          Event Hall
        </Link>
        <Link className="centerhome-links" to="/workspace">
          Work Space
        </Link>
      </div>
    </div>
  );
};

export default Centerhome;

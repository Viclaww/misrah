import { Link } from "react-router-dom";

const Centerhome = () => {
  const customStyles = {
    fontSize: "90px",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: "0",
    padding: "0",
    marginTop: "-70px",
    lineHeight: "normal",
    background: "linear-gradient(180deg, #ffa24b 38.89%, #813819 57.35%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    WebkitTextStroke: "3px #ffa24b",
  };

  return (
    <div className="centerhome rounded-[14px] bg-black bg-opacity-75 flex px-10 py-20 flex-col items-center w-[883px] h-[399px] box-border gap-6 ">
      <p className="text-white text-3xl m-0"> Welcome To</p>
      <h1 style={customStyles}>Misrah Arena</h1>
      <div className=" bg-[#d8976c] w-[378px} h-[3px] text-transparent">
        fkermjknegwkeknrenladoinirnnlgn
      </div>
      <div className="flex flex-row w-[80%]">
        <Link className="centerhome-links" to="/guestrooms">
          Guest Rooms
        </Link>
        <Link className="centerhome-links" to="/eventhall">
          Event Hall
        </Link>
        <Link className="centerhome-links" to="/ workspace">
          Work Space
        </Link>
      </div>
    </div>
  );
};

export default Centerhome;

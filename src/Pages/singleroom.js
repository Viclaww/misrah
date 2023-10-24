import Footer from "../Components/Footer";
import { useState } from "react";
import single1 from "../asset/Rectangle 6 (4).png";
import single2 from "../asset/Frame 11.png";
import single3 from "../asset/Rectangle 6 (5).png";
import single4 from "../asset/Frame 10.png";
import { X } from "lucide-react";
import RoomDesc from "../Components/RoomDesc";
import Navbar from "../Components/Navbar";

const ImageModal = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-80"
        onClick={onClose}
      ></div>
      <div className="relative p-4  shadow-md">
        <img src={imageSrc} className="w-[500%]" alt="Modal" />
        <button
          className="absolute -top-2 right-2 text-red-500 hover:text-red-700"
          onClick={onClose}
        >
          <X />
        </button>
      </div>
    </div>
  );
};

function Singleroom() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="px-32 sm:px:5 w-full  text-center font-bold  py-28 flex flex-col justify-center items-center">
        <h3 className="head-text text-4xl sm:text-2xl pb-10">
          Single Bed Room
        </h3>
        <img
          className="bestroom w-[856px] sm:w-[100%] sm:hidden h-[455px] pb-10"
          alt="Rooms"
          src={single1}
        ></img>
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 sm:w-[250%] w-[75%] ">
          <img
            alt=""
            className="cursor-pointer"
            src={single2}
            onClick={() => openModal(single2)}
          />
          <img
            alt=""
            className="cursor-pointer"
            src={single3}
            onClick={() => openModal(single3)}
          />
          <img
            alt=""
            className="cursor-pointer"
            src={single4}
            onClick={() => openModal(single4)}
          />
        </div>
      </div>
      {modalOpen && (
        <ImageModal imageSrc={selectedImage} onClose={closeModal} />
      )}
      <RoomDesc price="N50,000" capacity="2 people" />
      <Footer />
    </>
  );
}

export default Singleroom;

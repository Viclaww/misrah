import React from "react";
import amenities from "../asset/amenities.png";
import { Link } from "react-router-dom";

const RoomDesc = ({ price, capacity }) => {
  return (
    <div className="p-[5%] flex sm:flex-col gap-20">
      <div className="w-2/3 sm:w-full">
        <h5 className="text-3xl font-bold pb-5">Description</h5>
        <p className="leading-8 text-sm opacity-80">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.Lorem Ipsum is simply dummy text
          of the printing and typesetting industry.
        </p>
        <img alt="" className="w-fit " src={amenities} />
      </div>
      <div>
        <h5 className="text-3xl font-bold pb-5">Info</h5>
        <p className="leading-8 text-sm opacity-80">Price: {price}</p>
        <p className="leading-8 text-sm opacity-80"> Max Capaity: {capacity}</p>
        <p className="leading-8 text-sm opacity-80">Pet: Not allowed</p>
        <p className="leading-8 text-sm opacity-80 mb-12">
          {" "}
          Breakfast Included
        </p>
        <Link className="text-white font-bold bg-orange-400 py-2 px-2 mb-10 ">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default RoomDesc;

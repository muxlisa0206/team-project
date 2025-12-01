import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CatalogCard = ({ title1, title2, src }) => {
  return (
    <div className="max-w-[700px] relative w-full h-[300px] shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden  h-[300px]">
      <div
        className="bg-cover relative h-full"
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-black/40"></div>

        <div className="pt-10  z-10 pl-8">
          <h2 className="text-[25px] relative z-10 text-[#FFFFFF] font-semibold">
            {title1} <br /> {title2}
          </h2>
          <div className="absolute bottom-[20px] pb-8 ">
            <Link
              to="/catalog/:id"
              className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px]   hover:shadow-[0_8px_24px_silver] hover:transform hover:translate-y-[-2px] duration-200"
            >
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;

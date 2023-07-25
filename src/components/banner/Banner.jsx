import React from "react";
import LeftBanner from "./LeftBanner";
import bannerImg  from "../../assets/images/banner/banner.png"


const  Banner = () => {
    
  return (
    <section
      id="home"
      className="w-full pt-10 py-20 flex items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner/>
      <div className="w-1/2 flex justify-center items-center">
        <img 
         className="W-[600px] h-[680px] z-10" src={bannerImg } alt="bannerImg " />
      </div>
    </section>
  );
}

export default Banner;
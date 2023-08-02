import React from 'react'
import bannerImg  from "../../assets/images/banner/banner.png"

export default function RightBanner() {
  return (
    <div className="w-1/2 flex justify-center items-center">
    <img 
     className="W-[600px] h-[680px] z-10" 
     src={bannerImg } alt="bannerImg " 

     />
     {/* <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">

     </div> */}
  </div>
  )
}

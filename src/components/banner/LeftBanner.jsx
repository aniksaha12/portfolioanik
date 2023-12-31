import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

export default function LeftBanner() {

    const [text] = useTypewriter({
        words: ['Professional Coder.', 'Frontend Developer.', 'Reactjs Developer'],
        loop: true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
    })
  return (
    <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">Welcome To my space</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Anik Saha</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a<span> {text}</span>
            <Cursor 
                cursorBlinking="false"
                cursorStyle=" "
                cursorColor="#ff014f"
            />    
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            As a dedicated web developer, I craft seamless digital experiences through clean code and intuitive design.
          </p>
        </div>
        <div className="flex justify-between">
            <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
                Find me In
            </h2>
            <div className="flex gap-4">
                <span className="bannerIcon">
                    <a href='https://react-icons.github.io/react-icons/icons?name=fa' _blank>
                    < FaFacebookF />
                    </a>
                </span>
                <span className="bannerIcon">
                <a href='https://react-icons.github.io/react-icons/icons?name=fa' _blank>
                    <FaTwitter/>
                    </a>
                </span>
                <span className="bannerIcon">
                <a href='https://react-icons.github.io/react-icons/icons?name=fa' _blank>
                    <FaLinkedinIn/>
                    </a>
                </span>
            </div>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                </h2>
            <div className="flex gap-4">
                <span className="bannerIcon">
                    <FaReact />
                </span>
                <span className="bannerIcon">
                    <SiNextdotjs />
                </span>
                <span className="bannerIcon">
                    <SiTailwindcss />
                </span>
            </div>
            </div>
        </div>
      </div>
  )
}

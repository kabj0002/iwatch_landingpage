"use client";
import { useState } from "react";
import Image from "next/image";
import navyWatch from "@/images/navy.png";
import mintWatch from "@/images/mint.png";
import oceanWatch from "@/images/ocean.png";
import { TbLineDotted } from "react-icons/tb";
// import Dot from "./Dot";

const Gallery = () => {
  const [chosenColor, setChosenColor] = useState(navyWatch);
  console.log(chosenColor);
  return (
    <div className="flex flex-col mr-16 justify-center items-center col-start-2 col-end-3 row-start-1 row-end-3">
      <div className="flex items-center">
        <div>
          <Image
            src={chosenColor}
            alt="chosen color"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div
          className="flex flex-col items-center justify-center"
          chosenColor={chosenColor}
          setChosenColor={setChosenColor}
        >
          {/* <Dot /> */}
          <div
            className={`w-5 h-5 rounded-full border border-white cursor-pointer bg-[#404354] transition-transform duration-200 
            hover:scale-125 hover:border-2 
            ${chosenColor === navyWatch ? "scale-125 border-2" : ""}`}
            onClick={() => setChosenColor(navyWatch)}
          ></div>
          <TbLineDotted className="rotate-90" />
          <div
            className={`w-5 h-5 rounded-full border border-white cursor-pointer bg-[#58d7c4] transition-transform duration-200 
            hover:scale-125 hover:border-2 
            ${chosenColor === mintWatch ? "scale-125 border-2" : ""}`}
            onClick={() => setChosenColor(mintWatch)}
          ></div>
          <TbLineDotted className="rotate-90" />
          <div
            className={`w-5 h-5 rounded-full border border-white cursor-pointer bg-[rgb(177,218,244)] transition-transform duration-200 
            hover:scale-125 hover:border-2 
            ${chosenColor === oceanWatch ? "scale-125 border-2" : ""}`}
            onClick={() => setChosenColor(oceanWatch)}
          ></div>
        </div>
      </div>

      <div
        className="flex flex-row gap-12 mt-8"
        chosenColor={chosenColor}
        setChosenColor={setChosenColor}
      >
        <figure
          className="relative z-[1] before:content-[''] before:absolute before:top-8 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-12 before:rounded-lg before:bg-[#434558] before:-z-[1]"
          onClick={() => setChosenColor(navyWatch)}
        >
          <Image className="w-20 h-auto" src={navyWatch} alt="navy" />
        </figure>
        <figure
          className="relative z-[1] before:content-[''] before:absolute before:top-8 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-12 before:rounded-lg before:bg-[#6addcc] before:-z-[1]"
          onClick={() => setChosenColor(mintWatch)}
        >
          <Image className="w-20 h-auto" src={mintWatch} alt="mint" />
        </figure>
        <figure
          className="relative z-[1] before:content-[''] before:absolute before:top-8 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-12 before:rounded-lg before:bg-[rgba(177,218,244,0.864)] before:-z-[1]"
          onClick={() => setChosenColor(oceanWatch)}
        >
          <Image className="w-20 h-auto" src={oceanWatch} alt="ocean" />
        </figure>
      </div>
    </div>
  );
};
export default Gallery;

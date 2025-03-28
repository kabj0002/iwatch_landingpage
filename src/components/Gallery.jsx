"use client";
import { useState } from "react";
import Image from "next/image";
import navyWatch from "@/images/navy.png";
import mintWatch from "@/images/mint.png";
import oceanWatch from "@/images/ocean.png";
import { TbLineDotted } from "react-icons/tb";

const Gallery = () => {
  const [chosenColor, setChosenColor] = useState(navyWatch);
  console.log(chosenColor);
  return (
    <div className="gallery">
      <div className="upper_gallery">
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
          className="color_dot_menu"
          chosenColor={chosenColor}
          setChosenColor={setChosenColor}
        >
          <div
            style={{ backgroundColor: "#404354" }}
            className={chosenColor === navyWatch ? "active" : ""}
            onClick={() => setChosenColor(navyWatch)}
          ></div>
          <TbLineDotted className="dotted_line" />
          <div
            style={{ backgroundColor: "#58d7c4" }}
            className={chosenColor === mintWatch ? "active" : ""}
            onClick={() => setChosenColor(mintWatch)}
          ></div>
          <TbLineDotted className="dotted_line" />
          <div
            style={{ backgroundColor: "rgb(177, 218, 244)" }}
            className={chosenColor === oceanWatch ? "active" : ""}
            onClick={() => setChosenColor(oceanWatch)}
          ></div>
        </div>
      </div>

      <div
        className="color_menu"
        chosenColor={chosenColor}
        setChosenColor={setChosenColor}
      >
        <figure onClick={() => setChosenColor(navyWatch)}>
          <Image src={navyWatch} alt="navy" />
        </figure>
        <figure onClick={() => setChosenColor(mintWatch)}>
          <Image src={mintWatch} alt="mint" />
        </figure>
        <figure onClick={() => setChosenColor(oceanWatch)}>
          <Image src={oceanWatch} alt="ocean" />
        </figure>
      </div>
    </div>
  );
};
export default Gallery;

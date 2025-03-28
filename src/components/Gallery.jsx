import Image from "next/image";
import navyWatch from "@/images/navy.png";
import mintWatch from "@/images/mint.png";
import oceanWatch from "@/images/ocean.png";
import { TbLineDotted } from "react-icons/tb";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="upper_gallery">
        <div>
          <Image
            src={navyWatch}
            alt="navy"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="color_dot_menu">
          <div className="navy_dot"></div>
          <TbLineDotted className="dotted_line" />
          <div className="mint_dot"></div>
          <TbLineDotted className="dotted_line" />
          <div className="ocean_dot"></div>
        </div>
      </div>

      <div className="color_menu">
        <figure>
          <Image src={navyWatch} alt="navy" />
        </figure>
        <figure>
          <Image src={mintWatch} alt="mint" />
        </figure>
        <figure>
          <Image src={oceanWatch} alt="ocean" />
        </figure>
      </div>
    </div>
  );
};
export default Gallery;

import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

const Main = () => {
  return (
    <div className="flex flex-col ml-16 gap-12 justify-between bg-background">
      <div>
        <h1 className="font-sans text-6xl font-extrabold mt-16 ">
          The Perfect Moment
        </h1>
        <h2 className="text-6xl font-mono font-light">
          Between Past And Future.
        </h2>
      </div>
      <div>
        <button className="border-2 border-solid border-white bg-[#b6ccda] rounded-full h-fit py-2.5 px-12 cursor-pointer text-xl hover:bg-white hover:text-[#b6ccda] hover:scale-1.3">
          Buy Now
        </button>
      </div>
      <div className="flex flex-row items-center mt-8">
        <HiArrowLongLeft />
        <span>&nbsp;1&nbsp;</span>
        <HiArrowLongRight />
      </div>
    </div>
  );
};
export default Main;

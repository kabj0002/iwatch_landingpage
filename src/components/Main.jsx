import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

const Main = () => {
  return (
    <div className="buy_div">
      <div>
        <h1>The Perfect Moment</h1>
        <h2>Between Past And Future.</h2>
      </div>
      <div>
        <button>Buy Now</button>
      </div>
      <div className="arrow_div">
        <HiArrowLongLeft />
        <span>&nbsp;1&nbsp;</span>
        <HiArrowLongRight />
      </div>
    </div>
  );
};
export default Main;

import { IoLogoApple } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <nav className="p-7 flex justify-between items-center">
        <div className="logo_div">
          <IoLogoApple className="w-14 h-14 ml-8" />
        </div>
        <ul className="flex justify-between items-center list-none gap-15">
          <li className="text-xl hover:bg-white hover:text-sky-300 hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8 ">
            Mac
          </li>
          <li className="text-xl hover:bg-white hover:text-sky-300 hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8 ">
            iPhone
          </li>
          <li className="text-xl hover:bg-white hover:text-sky-300 hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8 ">
            iPad
          </li>
          <li className="text-xl hover:bg-white hover:text-sky-300 hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8 ">
            iWatch
          </li>
          <li className="text-xl hover:bg-white hover:text-sky-300 hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8 ">
            Support
          </li>
        </ul>
        <div className="flex items-center w-20 h-20">
          <CiSearch className="w-7 h-7 stroke-1" />
          <span> &nbsp;| &nbsp;</span>
          <FiShoppingBag className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

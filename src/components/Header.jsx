import { IoLogoApple } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo_div">
          <IoLogoApple className="logo" />
        </div>
        <ul>
          <li>Mac</li>
          <li>iPhone</li>
          <li>iPad</li>
          <li>iWatch</li>
          <li>Support</li>
        </ul>
        <div className="search_shop">
          <CiSearch />
          <span> &nbsp;| &nbsp;</span>
          <FiShoppingBag />
        </div>
      </nav>
    </header>
  );
};

export default Header;

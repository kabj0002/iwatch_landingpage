"use client";
import { IoLogoApple } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="p-7 flex justify-between items-center">
        <div className="logo_div">
          <IoLogoApple className="w-14 h-14 ml-8" />
        </div>
        <ul className="flex justify-between items-center list-none gap-15">
          <li>
            <Link
              href="/imac"
              className={`text-xl rounded-3xl px-8 py-1.5 transition ${
                pathname === "/imac"
                  ? "bg-white text-[#b6ccda]"
                  : " hover:bg-white hover:text-[#b6ccda] hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8"
              }`}
            >
              Mac
            </Link>
          </li>
          <li>
            <Link
              href="/ipad"
              className={`text-xl rounded-3xl px-8 py-1.5 transition ${
                pathname === "/ipad"
                  ? "bg-white text-[#b6ccda]"
                  : " hover:bg-white hover:text-[#b6ccda] hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8"
              }`}
            >
              iPad
            </Link>
          </li>
          <li>
            <Link
              href="/iphone"
              className={`text-xl rounded-3xl px-8 py-1.5 transition ${
                pathname === "/iphone"
                  ? "bg-white text-[#b6ccda]"
                  : " hover:bg-white hover:text-[#b6ccda] hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8"
              }`}
            >
              iPhone
            </Link>
          </li>
          <li>
            <Link
              href="/iwatch"
              className={`text-xl rounded-3xl px-8 py-1.5 transition ${
                pathname === "/iwatch"
                  ? "bg-white text-[#b6ccda]"
                  : " hover:bg-white hover:text-[#b6ccda] hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8"
              }`}
            >
              iWatch
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className={`text-xl rounded-3xl px-8 py-1.5 transition ${
                pathname === "/support"
                  ? "bg-white text-[#b6ccda]"
                  : " hover:bg-white hover:text-[#b6ccda] hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8"
              }`}
            >
              Support
            </Link>
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

// Dynamisk version
// const Header = () => {
//   const pathname = usePathname();

//   const links = [
//     { name: "Mac", href: "/imac" },
//     { name: "iPhone", href: "/iphone" },
//     { name: "iPad", href: "/ipad" },
//     { name: "iWatch", href: "/iwatch" },
//     { name: "Support", href: "/support" },
//   ];

//   return (
//     <header>
//       <nav className="p-7 flex justify-between items-center">
//         <div className="logo_div">
//           <IoLogoApple className="w-14 h-14 ml-8" />
//         </div>

//         <ul className="flex justify-between items-center list-none gap-15">
//             {links.map((link) => (
//             <li key={link.href}>
//             <Link
//                 href={link.href}
//                 className={`text-xl rounded-3xl px-8 py-1.5 transition ${
//                   pathname === link.href
//                     ? "bg-white text-[#b6ccda] "
//                     : " hover:bg-white hover:text-[#b6ccda] hover:rounded-full hover:h-fit hover:py-1.5 hover:px-8"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//           </li>
//           ))}
//         </ul>
//         <div className="flex items-center w-20 h-20">
//           <CiSearch className="w-7 h-7 stroke-1" />
//           <span> &nbsp;| &nbsp;</span>
//           <FiShoppingBag className="w-6 h-6" />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import { Link } from "react-router-dom";

// const navigationItems: { label: string; path: string }[] = [
//   { label: "Home", path: "/" },
//   { label: "About me", path: "/aboutme" },
//   { label: "My Projects", path: "/myprojects" },
//   { label: "My Experiences", path: "/myexperiences" },
// ];

// const Header: React.FC = () => {
//   return (
//     <header
//       className={`fixed top-5 left-5 w-full z-10 transition-all duration-300`}
//     >
//       <div className="mx-auto flex h-14 items-center gap-8 px-4 sm:px-6 lg:px-8">
//         {/* <a className='block' href='/'>
//                 <span className='sr-only'>Home</span>
//                 </a> */}

//         <div className="flex flex-1 items-center md:justify-between justify-end">
//           <nav aria-label="Global" className="hidden md:block">
//             <ul className="flex items-center gap-8">
//               {navigationItems.map((item) => (
//                 <li key={item.path}>
//                   <Link
//                     className="text-md font-bold hover:text-purple-400 text-purple-600"
//                     to={item.path}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationItems: { label: string; path: string }[] = [
  { label: "Home", path: "/" },
  { label: "About me", path: "/aboutme" },
  { label: "My Projects", path: "/myprojects" },
  { label: "My Experiences", path: "/myexperiences" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-5 w-full z-10 transition-all duration-300">
      <div className="mx-auto flex h-14 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center md:justify-between justify-end w-full">
          {/* Desktop Nav */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    className="text-md font-bold hover:text-purple-400 text-purple-600"
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-purple-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-2 px-4">
          <ul className="flex flex-col gap-3 bg-white shadow-md rounded-md p-4">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  className="text-md font-bold text-purple-600 hover:text-purple-400"
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

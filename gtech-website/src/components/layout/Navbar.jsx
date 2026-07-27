import { NavLink } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Solutions", path: "/solutions" },
  { name: "Industries", path: "/industries" },
  { name: "Projects", path: "/projects" },
  { name: "Resources", path: "/resources" },
];

const Navbar = () => {
  return (
    <header className="relative z-50 h-[84px] border-b border-gray-200 bg-white">
        <div className="flex h-full items-center justify-evenly gap-6">

          {/* Logo */}
          <div className="flex h-full w-[280px] items-center border-r border-gray-200">
            <h1 className="text-2xl font-bold text-sky-600">Logo</h1>
          </div>

          {/* Center Navigation */}
          <nav className="ml-12 flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {({ isActive }) => (
                  <div className="group relative py-2">
                    <span
                      className={`text-[15px] font-semibold transition-colors duration-300 ${
                        isActive
                          ? "text-sky-600"
                          : "text-gray-800 group-hover:text-sky-600"
                      }`}
                    >
                      {link.name}
                    </span>

                    <span
                      className={`absolute left-1/2 -bottom-[18px] h-[3px] -translate-x-1/2 rounded-full bg-sky-600 transition-all duration-300 ${
                        isActive
                          ? "w-8"
                          : "w-0 group-hover:w-8"
                      }`}
                    />
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6 mr-8">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100">
                <Phone size={18} className="text-sky-600" />
              </div>

              <div>
                <p className="text-xs text-gray-500">Call Us Now</p>
                <p className="text-sm font-semibold text-gray-900">
                  +91 99260 96970
                </p>
              </div>
            </div>

            <Button className="h-12 min-w-[170px]">
              Contact Us
              <ArrowRight size={18} />
            </Button>

          </div>
        </div>
    </header>
  );
};

export default Navbar;
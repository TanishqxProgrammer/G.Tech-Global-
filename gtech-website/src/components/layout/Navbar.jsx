import { NavLink } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
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
    <header className="sticky top-0 z-50 h-[88px] border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-full max-w-[1500px] items-center px-10">
        {/* Logo */}
        <div className="flex h-full w-[240px] items-center border-r border-slate-200">
          <h1 className="text-2xl font-black text-sky-600">Logo</h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path}>
                  {({ isActive }) => (
                    <div className="group relative py-2">
                      <span
                        className={`text-[15px] font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-sky-600"
                            : "text-slate-800 group-hover:text-sky-600"
                        }`}
                      >
                        {link.name}
                      </span>

                      <span
                        className={`absolute left-1/2 -bottom-[18px] h-[3px] -translate-x-1/2 rounded-full bg-sky-600 transition-all duration-300 ${
                          isActive ? "w-8" : "w-0 group-hover:w-8"
                        }`}
                      />
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-5 pl-8">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100">
              <Phone size={18} className="text-sky-600" />
            </div>

            <div>
              <p className="text-xs text-slate-500">Call Us Now</p>
              <p className="text-sm font-semibold text-slate-900">
                +91 99260 96970
              </p>
            </div>
          </div>

          <Button className="h-12 w-35 rounded px-7">
            Contact Us
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
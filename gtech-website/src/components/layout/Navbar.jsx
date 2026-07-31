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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-[90px] items-center">
          {/* Logo */}
          <div className="w-[220px] flex-shrink-0 pl-2">
            <h1 className="text-4xl font-black text-sky-600">Logo</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex justify-center gap-10">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative pb-2 text-[15px] font-semibold transition-colors duration-300 ${
                        isActive
                          ? "text-sky-600"
                          : "text-slate-700 hover:text-sky-600"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        <span
                          className={`absolute left-0 -bottom-[8px] h-[3px] rounded-full bg-sky-600 transition-all duration-300 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex w-[320px] flex-shrink-0 items-center justify-end gap-6">
            <div className="flex items-center gap-3">
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

            <Button className="h-12 w-50 px-7">
              Contact Us
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;

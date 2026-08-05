import { MapPin, Phone, Mail, Globe } from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  "About Us",
  "Our Solutions",
  "Industries",
  "Projects",
  "Services",
  "Contact Us",
];

const solutions = [
  "RO Plants",
  "STP Plants",
  "ETP Plants",
  "Water Softeners",
  "Water Coolers",
  "AMC & Services",
];

const resources = ["Brochure", "Certificates", "Blog", "FAQs"];

const FooterTop = () => {
  return (
    <div className="border-t border-slate-200 py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]">
        {/* Logo Section */}

        <div>
          <img src="/logo.png" alt="G.Tech" className="h-14 object-contain" />

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Delivering sustainable and reliable water treatment solutions with
            innovation, quality and excellence.
          </p>

          <div className="mt-6 flex gap-3">
            {[FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube].map(
              (Icon, index) => (
                <button
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <Icon size={16} />
                </button>
              ),
            )}
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-slate-900">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-sm text-slate-600 transition-colors hover:text-blue-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-slate-900">
            Solutions
          </h3>

          <ul className="space-y-3">
            {solutions.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-sm text-slate-600 transition-colors hover:text-blue-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-slate-900">
            Resources
          </h3>

          <ul className="space-y-3">
            {resources.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-sm text-slate-600 transition-colors hover:text-blue-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-slate-900">
            Contact Info
          </h3>

          <div className="space-y-5 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-blue-600" />

              <p>
                G.Tech Global India Pvt. Ltd.
                <br />
                Plot No.123, Industrial Area,
                <br />
                Indore, Madhya Pradesh - 452001
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-600" />
              <span>+91 99260 96970</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-600" />
              <span>info@gtechglobalindia.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={18} className="text-blue-600" />
              <span>www.gtechglobalindia.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

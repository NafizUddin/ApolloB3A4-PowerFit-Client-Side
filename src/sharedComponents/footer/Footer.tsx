import PropTypes from "prop-types";
import logo from "../../assets/logo.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-[#cbd4db] pb-10 pt-7 lg:pt-14 px-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[250px]">
                  <img src={logo} alt="" />
                </a>
                <p className="mb-7 text-base text-body-color">
                  Empowering Your Fitness Journey – Shop Now for the Best Gear!
                  Quality Equipment for Every Athlete. Discover Exclusive Offers
                  and Top Brands. Powered by PowerFit.
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="About TailGrids" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-12 text-lg font-semibold text-[#e08534]">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center gap-6">
                  <FaFacebook className="text-2xl text-[#0165E1] hover:-translate-y-2" />
                  <FaTwitter className="text-2xl text-[#1DA1F2] hover:-translate-y-2" />
                  <BsInstagram className="text-2xl text-[#C13584] hover:-translate-y-2" />
                  <FaYoutube className="text-3xl text-[#c4302b] hover:-translate-y-2" />
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                  &copy; 2024 PowerFit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#e08534" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#e08534" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#e08534" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#e08534" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#e08534] text-white">
        <aside>
          <p>Copyright © 2024 - All right reserved by PowerFit</p>
        </aside>
      </footer>
    </>
  );
};

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-12 text-lg font-semibold text-[#e08534]">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-[#e08534]"
      >
        {label}
      </a>
    </li>
  );
};

Footer.propTypes = {
  children: PropTypes.object,
  header: PropTypes.object,
};

export default Footer;

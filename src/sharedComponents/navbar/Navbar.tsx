import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CgMenuGridO } from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import CartDrawerSide from "../../components/CartDrawerSide/CartDrawerSide";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#033955] px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#033955] px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#033955] px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/productManagement"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#033955] px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Products Management
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer px-2 py-2 md:px-0">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current text-[#033955]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 px-2 flex-1 ml-8 md:ml-40 lg:ml-0">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="w-[230px] md:w-[270px] lg:w-[180px] xl:w-[270px]"
                />
              </Link>
            </div>
            <div className="flex gap-5 items-center">
              <div className="hidden flex-none px-3 lg:flex gap-6">
                <ul className="flex gap-6 text-[#033955] font-semibold">
                  {/* Navbar menu content here */}
                  {links}
                </ul>
              </div>
              <div className="drawer-end">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content mr-3">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="drawer-button">
                    <GrCart className="text-2xl text-[#033955]" />
                  </label>
                </div>
                <div className="drawer-side z-20">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <CartDrawerSide />
                </div>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="min-h-full w-80 p-4 bg-base-200">
            <div className="flex gap-2 justify-center items-center mb-6">
              <CgMenuGridO className="text-[#033955] text-3xl" />
              <h1 className="text-center text-2xl text-[#033955]">Menus</h1>
            </div>
            <ul className="menu text-[#033955] font-medium text-lg">
              {/* Sidebar content here */}
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

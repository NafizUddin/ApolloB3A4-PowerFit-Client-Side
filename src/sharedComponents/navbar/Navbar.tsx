import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#d62b70] px-3 py-2 text-white rounded-md"
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
              ? "bg-[#d62b70] px-3 py-2 text-white rounded-md"
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
              ? "bg-[#d62b70] px-3 py-2 text-white rounded-md"
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
              ? "bg-[#d62b70] px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Products Management
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#d62b70] px-3 py-2 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer px-2 lg:px-4 xl:px-5 py-2">
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
                  className="inline-block h-6 w-6 stroke-current text-[#d62b70]"
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
            <div className="mx-2 flex-1 px-2">
              <img
                src={logo}
                alt=""
                className="w-[230px] md:w-[270px] lg:w-[180px] xl:w-[270px]"
              />
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="flex gap-6 text-[#d62b70] font-semibold text-lg">
                {/* Navbar menu content here */}
                {links}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="min-h-full w-80 p-4 bg-base-200">
            <div className="flex gap-2 justify-center items-center mb-6">
              <CgMenuGridO className="text-[#d62b70] text-3xl" />
              <h1 className="text-center text-2xl text-[#d62b70]">Menus</h1>
            </div>
            <ul className="menu text-[#d62b70] font-medium text-lg">
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

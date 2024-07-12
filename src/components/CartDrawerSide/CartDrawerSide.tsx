import { FaCircleXmark } from "react-icons/fa6";

const CartDrawerSide = () => {
  return (
    <div className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
      <div className="mt-6 flex justify-between mx-5 items-center">
        <h1 className="text-4xl font-semibold text-[#033955]">Cart</h1>
        <div>
          <label htmlFor="my-drawer-4" className="drawer-button">
            <FaCircleXmark className="text-2xl text-[#033955] cursor-pointer" />
          </label>
        </div>
      </div>
      <div className="divider"></div>
      <p className="text-lg ml-3">Your Cart is currently empty</p>
    </div>
  );
};

export default CartDrawerSide;

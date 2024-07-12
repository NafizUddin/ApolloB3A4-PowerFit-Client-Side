interface QuantitySelectorProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
  inStock: number;
}

const QuantitySelector = ({
  quantity,
  setQuantity,
  increment,
  decrement,
  inStock,
}: QuantitySelectorProps) => {
  return (
    <div>
      <div
        className="py-2 px-3 bg-white border border-gray-200 rounded-lg"
        data-hs-input-number=""
      >
        <div className="w-full flex justify-between items-center gap-x-5">
          <div className="grow">
            <span className="block text-xs text-gray-500">Select quantity</span>
            <input
              className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0"
              type="text"
              value={quantity}
              data-hs-input-number-input=""
              readOnly
            />
          </div>
          <div className="flex justify-end items-center gap-x-1.5">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity <= 0}
              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-input-number-decrement=""
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
              </svg>
            </button>
            <button
              type="button"
              onClick={increment}
              disabled={inStock <= 0}
              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-input-number-increment=""
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;

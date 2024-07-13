import { useEffect } from "react";
import { useAppSelector } from "../redux/hook";

const useWarnIfCartNotEmpty = () => {
  const { product } = useAppSelector((state) => state.products);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (product.length > 0) {
        const message =
          "You have items in your cart. Are you sure you want to leave?";
        event.returnValue = message; // For most browsers
        return message; // For older browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [product]);
};

export default useWarnIfCartNotEmpty;

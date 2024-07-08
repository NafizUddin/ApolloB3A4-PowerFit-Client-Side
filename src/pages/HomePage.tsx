import { useEffect } from "react";
import Banner from "../sections/HomeSections/Banner/Banner";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
    </div>
  );
};

export default HomePage;

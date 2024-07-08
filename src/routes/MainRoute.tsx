import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default MainRoute;

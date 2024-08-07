import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import AllProducts from "../pages/AllProducts";
import CategoryWiseProducts from "../pages/CategoryWiseProducts";
import ProductDetails from "../pages/ProductDetails";
import ProductManagement from "../pages/ProductManagement";
import Checkout from "../pages/Checkout";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "categoryProducts/:category",
        element: <CategoryWiseProducts />,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "productManagement",
        element: <ProductManagement />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default MainRoute;

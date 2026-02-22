import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ProductPage from "./components/Products/ProductsPage";
import ProductDetailPage from "./components/Products/ProductDetailPage"; // <-- import
import ContactUsPage from "./components/ContactUsPage";
import ScrollToTop from "./components/ScrollToTop";
import SearchResultsPage from "./components/Header/SearchResultsPage";
import FacilitiesPage from "./components/Facilities/FacilitiesPage";
import FacilityDetailsPage from "./components/Facilities/FacilityDetailsPage";
import CareersPage from "./components/CareersPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ProjectDetailPage from "./components/Projects/ProjectDetailPage";
import AboutUsPage from "./components/About/AboutUsPage";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutUsPage /> },
      { path: "/products", element: <ProductPage /> },
      {
        path: "/products/:categorySlug/:productName",
        element: <ProductDetailPage />,
      },
      { path: "/contact", element: <ContactUsPage /> },
      { path: "/search/:query", element: <SearchResultsPage /> },
      { path: "/facilities", element: <FacilitiesPage /> },
      { path: "/facilities/:id", element: <FacilityDetailsPage /> },
      { path: "/careers", element: <CareersPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:id", element: <ProjectDetailPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

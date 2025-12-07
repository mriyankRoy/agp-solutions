import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ProductPage from "./components/Products/ProductsPage";
import ProductDetailPage from "./components/Products/ProductDetailPage"; // <-- import
import ContactUsPage from "./components/ContactUsPage";
import AboutUsPage from "./components/AboutUsPage";
import ScrollToTop from "./components/ScrollToTop";
import SearchResultsPage from "./components/Header/SearchResultsPage";
import ProjectsCarousel from "./components/Projects/ProjectsCarousel";

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
      // Dynamic route for each product
      {
        path: "/products/:categorySlug/:productName",
        element: <ProductDetailPage />,
      },
      { path: "/contact", element: <ContactUsPage /> },
      { path: "/search/:query", element: <SearchResultsPage /> },
      { path: "/project", element: <ProjectsCarousel /> },
      // { path: "/projects/:id", element: <ProjectDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

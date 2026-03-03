import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/Products/ProductsPage";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import ContactUsPage from "./components/ContactUsPage";
import ScrollToTop from "./components/ScrollToTop";
import SearchResultsPage from "./components/Header/SearchResultsPage";
import FacilitiesPage from "./components/Facilities/FacilitiesPage";
import FacilityDetailsPage from "./components/Facilities/FacilityDetailsPage";
import CareersPage from "./components/CareersPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ProjectDetailPage from "./components/Projects/ProjectDetailPage";
import AboutUsPage from "./components/About/AboutUsPage";
import DigitalBusinessCard from "./components/People/DigitalBusinessCard";
import ErrorPage from "./components/ErrorPage";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

// 1. GLOBAL ROOT COMPONENT: Handles logic for the entire app (Chat, Analytics)
const Root = () => {
  const location = useLocation();

  useEffect(() => {
    inject();
    injectSpeedInsights();
  }, []);

  // Tawk.to Logic: This runs on every URL change across the whole site
  // Inside your Root component
  useEffect(() => {
    const isDigitalCardPage = location.pathname.startsWith("/people/");

    const handleWidgetVisibility = () => {
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        if (isDigitalCardPage) {
          window.Tawk_API.hideWidget();
        } else {
          window.Tawk_API.showWidget();
        }
      }
    };

    // 1. Try immediately
    handleWidgetVisibility();

    // 2. Set the onLoad callback in case it hasn't loaded yet
    if (window.Tawk_API) {
      window.Tawk_API.onLoad = handleWidgetVisibility;
    }

    // 3. Optional: A small timeout to catch any edge cases on slow mobile connections
    const timer = setTimeout(handleWidgetVisibility, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <Outlet />; // Renders either AppLayout OR DigitalBusinessCard
};

// 2. MAIN WEBSITE LAYOUT: Header, Footer, and Scroll Management
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

// 3. UPDATED ROUTER CONFIGURATION
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Logic manager at the top
    errorElement: <ErrorPage />,
    children: [
      // Routes WITH Header & Footer
      {
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
      // Route WITHOUT Header & Footer
      {
        path: "people/:username",
        element: <DigitalBusinessCard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

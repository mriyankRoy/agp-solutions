import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router";

// Component Imports
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

// Utility & Analytics Imports
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

/**
 * Root Component
 * Acts as the global controller for the application.
 * Handles: Vercel Analytics, Speed Insights, and Tawk.to widget visibility.
 */
const Root = () => {
  const location = useLocation();

  useEffect(() => {
    inject();
    injectSpeedInsights();
  }, []);

  /**
   * Tawk.to Visibility Logic
   * Ensures the chat widget is hidden on Digital Business Card pages (/people/*)
   * and visible on all other company website pages.
   */
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

    // 1. Initial attempt
    handleWidgetVisibility();

    // 2. Event listener for late script loading
    if (window.Tawk_API) {
      window.Tawk_API.onLoad = handleWidgetVisibility;
    }

    // 3. Timeout fallback for slow mobile connections
    const timer = setTimeout(handleWidgetVisibility, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <Outlet />;
};

/**
 * AppLayout Component
 * Provides the standard UI wrap (Header and Footer) for main website pages.
 */
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

/**
 * Router Configuration
 * Nested structure allows Root logic to run on all paths while
 * AppLayout only wraps standard company pages.
 */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        // Wrapper for standard pages (With Header/Footer)
        element: <AppLayout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/about", element: <AboutUsPage /> },
          { path: "/products", element: <ProductPage /> },
          // Inside your appRouter configuration
          {
            path: "/products/:categorySlug/:id", // Updated from :productName to :id
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
      {
        // Standalone profile page (No Header/Footer)
        path: "people/:username",
        element: <DigitalBusinessCard />,
      },
    ],
  },
]);

// Root Mounting
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

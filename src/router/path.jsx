import { ReactElement } from "react";
import HomePage from "../pages/HomePage";
import TermsPage from "../pages/TermsPage";
 
import ErrorPage from "../pages/ErrorPage";
import { Navigate } from "react-router-dom";

// Paths

export const homePagePath = "/";
export const termsPagePath = "/about";
 
// Routes

export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },

  {
    path: termsPagePath,
    component: <TermsPage />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];
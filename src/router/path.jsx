import { ReactElement } from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage"
import TermsPage from "../pages/TermsPage";
import ChatPage from "../pages/ChatPage" 
import ErrorPage from "../pages/ErrorPage";

// Paths

export const homePagePath = "/";
export const aboutPagePath = "/about";
export const termsPagePath = "/terms";
export const chatPagePath = "/chat"
 
// Routes

export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },
  {
    path: aboutPagePath,
    component: <AboutPage />,
  },
  {
    path: termsPagePath,
    component: <TermsPage />,
  },

  {
    path: chatPagePath,
    component: <ChatPage />
  },


  {
    path: "*",
    component: <ErrorPage />,
  },
];
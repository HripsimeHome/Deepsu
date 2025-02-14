import { ReactElement } from "react";
import HomePage from "../pages/HomePage";
import TermsPage from "../pages/TermsPage";
import ChatPage from "../pages/ChatPage" 
import ErrorPage from "../pages/ErrorPage";

// Paths

export const homePagePath = "/";
export const termsPagePath = "/about";
export const chatPagePath = "/chat"
 
// Routes

export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },

  {
    path: chatPagePath,
    component: <ChatPage />
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
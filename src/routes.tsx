import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  AllRecipesPage,
  BeansPage,
  CoffeePage,
  ContactPage,
  InspoPage,
  NotFoundPage,
  RecipesPage,
  ViewCoffeePage,
} from "./pages/index";

export const router = createBrowserRouter([
  { path: "*", element: <NotFoundPage /> },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <CoffeePage />,
      },
      {
        path: "/coffeepage",
        element: <CoffeePage />,
      },
      {
        path: "inspo",
        element: <InspoPage />,
      },
      {
        path: "beans",
        element: <BeansPage />,
      },
      {
        path: "recipes",
        element: <RecipesPage />,
      },
      {
        path: "viewcoffee/new/video",
        element: <ViewCoffeePage />,
      },
      {
        path: "viewcoffee/:id",
        element: <ViewCoffeePage />,
      },

      {
        path: "allrecipes",
        element: <AllRecipesPage />,
      },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

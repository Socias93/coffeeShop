import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import InspoPage from "./pages/InspoPage";
import CoffeePage from "./pages/CoffeePage";
import BeansPage from "./pages/BeansPage";
import RecipesPage from "./pages/RecipesPage";
import ViewCoffeePage from "./pages/ViewCoffePage";
import AllRecipesPage from "./pages/AllRecipesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotfoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  { path: "*", element: <NotfoundPage /> },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
        path: "viewcoffee",
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

/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Careers, CaseStudies, Consultancy, Contact, Development, Home, HomeLayout, Leadership, Resourcing, Why17Oranges, ErrorPage } from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "solutions/development",
        element: <Development />,
      },
      {
        path: "solutions/consultancy",
        element: <Consultancy />,
      },
      {
        path: "solutions/resourcing",
        element: <Resourcing />,
      },
      {
        path: "about/why17oranges",
        element: <Why17Oranges />,
      },
      {
        path: "about/leadership",
        element: <Leadership />,
      },
      {
        path: "about/casestudies",
        element: <CaseStudies />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
     
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

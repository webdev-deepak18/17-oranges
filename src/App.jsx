/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Careers,
  CaseStudies,
  Consultancy,
  Contact,
  Development,
  Home,
  HomeLayout,
  Leadership,
  Resourcing,
  Why17Oranges,
  ErrorPage,
  CaseStudy01,
  CaseStudy03,
  CaseStudy04,
  BuccaneerCaseStudy,
  EBCCaseStudy,
  KloeberCaseStudy,
  KwandoCaseStudy,
} from "./pages/index";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
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
        path: "about/why-17-oranges",
        element: <Why17Oranges />,
      },
      {
        path: "about/leadership",
        element: <Leadership />,
      },
      {
        path: "about/case-studies",
        element: <CaseStudies />,
      },
      {
        path: "about/blog",
        element: <Blog />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "about/case-studies/technology-resourcing",
        element: <CaseStudy01 />,
      },
      {
        path: "about/case-studies/data-management",
        element: <CaseStudy03 />,
      },
      {
        path: "about/case-studies/technology-consulting",
        element: <CaseStudy04 />,
      },
      {
        path: "about/case-studies/technology-enhancements",
        element: <BuccaneerCaseStudy />,
      },
      {
        path: "about/case-studies/tech-resourcing-support",
        element: <EBCCaseStudy />,
      },
      {
        path: "about/case-studies/technology-development",
        element: <KloeberCaseStudy />,
      },
      {
        path: "about/case-studies/app-development",
        element: <KwandoCaseStudy />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

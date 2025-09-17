import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "./ErrorPage";
import { ErrorHome } from "./ErrorHome";
import { ErrorDashBoard } from "./ErrorDashBoard";
import { ErrorPageNav } from "./ErrorPageNav";
import { ThrowErrorPage } from "./ThrowErrorPage";

export default function createRouter() {
  return createBrowserRouter([
    {
      index: true,
      element: <ErrorHome />,
      errorElement: (
        <>
          <ErrorPageNav />
          <ErrorPage />
        </>
      ), // This catches all non-handled errors in this application
    },
    {
      path: "/home",
      element: <ErrorHome />,
    },
    {
      path: "/error",
      element: <ErrorDashBoard />,
      children: [
        {
          path: "data-error",
          loader: () => {
            throw new Error("Data Error");
          },
          element: <>Data Error Page</>,
          errorElement: <ErrorPage />,
        },
        {
          path: "throw-error",
          element: <ThrowErrorPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
}

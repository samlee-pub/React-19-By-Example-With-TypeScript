import { RouterProvider } from "react-router-dom";
import createRouter from "./router";

export default function ErrorPageRoutingComponent() {
  return (
    <>
      <h3>Routing with Error Page</h3>
      <div className="my-box-border-1">
        <RouterProvider router={createRouter()} />
      </div>
    </>
  );
}

/**
 * This component is used to demonstrate dynamic routing.
 * It contains the DynamicNav and DynamicRoutes components.
 * The BrowserRouter is used to enable routing functionality.
 * A custom title is provided for the page.
 */
import { BrowserRouter } from "react-router-dom";
import { DynamicNav } from "./DynamicNav";
import { DynamicRoutes } from "./DynamicRoutes";

export function DynamicRoutingComponent() {
  return (
    <>
      <h3>Dynamic Routing</h3>
      <div className="my-box-border-1">
        <BrowserRouter>
          <DynamicNav />
          <DynamicRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

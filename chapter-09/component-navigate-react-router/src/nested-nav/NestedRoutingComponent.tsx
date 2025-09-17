/**
 * This component wraps the application's routing section with
 * a <BrowserRouter> to supply the essential routing context
 * required for React Router to function.
 */
import { BrowserRouter } from "react-router-dom";
import { NestedNav } from "./NestedNav";
import NestedRoutes from "./NestedRoutes";

export function NestedRoutingComponent() {
  return (
    <>
      <h3>Nested Routing</h3>
      <div className="my-box-border-1">
        <BrowserRouter>
          <NestedNav />
          <NestedRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

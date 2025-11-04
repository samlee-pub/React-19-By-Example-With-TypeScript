/**
 * This component is the top level routing component for the application.
 * It wraps the top level navigation and routes.
 * The component is used to provide the BrowserRouter context
 * to its children and provide a custom title for the page.
 * The context is provided by the BrowserRouter component and
 * is consumed by the NavLink component.
 */
import { BrowserRouter } from "react-router";
import { TopLevelNav } from "./TopLevelNav";
import TopLevelRoutes from "./TopLevelRoutes";

export function TopLevelRoutingComponent() {
  return (
    <>
      <h3>Top Level Routing</h3>
      <div className="my-box-border-1">
        <BrowserRouter>
          <TopLevelNav />
          <TopLevelRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

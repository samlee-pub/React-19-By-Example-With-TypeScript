/**
 * This component is used to demonstrate two-level routing.
 * It contains a top-level navigation menu and a second-level
 * navigation menu.
 * The second-level navigation menu is nested inside the
 * first-level navigation menu.
 * The component is used to provide the BrowserRouter context
 * to its children and provide a custom title for the page.
 */
import { BrowserRouter } from "react-router";
import { FirstLevelNav } from "./FirstLevelNav";
import TwoLevelRoutes from "./TwoLevelRoutes";

export function TwoLevelRoutingComponent() {
  return (
    <>
      <h3>Two-Level Routing</h3>
      <div className="my-box-border-1">
        <BrowserRouter>
          <FirstLevelNav />
          <TwoLevelRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

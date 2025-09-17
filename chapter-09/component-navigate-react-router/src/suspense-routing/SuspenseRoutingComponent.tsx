/**
 * This component is used to demonstrate lazy loading and suspense.
 * It is used to provide the BrowserRouter context
 * to its children and provide a custom title for the page.
 */
import { BrowserRouter } from "react-router-dom";
import { LazyNav } from "./LazyNav";
import LazyRoutes from "./LazyRoutes";

export function SuspenseRoutingComponent() {
  return (
    <>
      <h3>Lazy Loading and Suspense</h3>
      <div className="my-box-border-1">
        <BrowserRouter>
          <LazyNav />
          <LazyRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

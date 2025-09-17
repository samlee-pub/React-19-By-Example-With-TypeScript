/**
 * This component is used to demonstrate dynamic routing.
 * It contains routes for Home, Dashboard, and Not-Found pages.
 * The Dashboard route has a dynamic segment for pathId.
 * The dynamic component is rendered based on the pathId parameter.
 */
import { Routes, Route } from "react-router-dom";
import { DynamicComponent } from "./DynamicComponent";
import { DashBoard } from "../nested-nav/DashBoard";
import { Home, NotFound } from "../page-components/PageComponents";

export function DynamicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />}>
        <Route path=":pathId" element={<DynamicComponent />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

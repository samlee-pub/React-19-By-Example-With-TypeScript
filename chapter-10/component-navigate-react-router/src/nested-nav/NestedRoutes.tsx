/**
 * Nested routes are routes that are nested inside other routes.
 * The parent component typically contains an Outlet component
 * where the nested routes are rendered.
 * The Outlet component is a placeholder for the nested routes,
 * and the parent component is rendered first, and then the nested
 * routes are rendered inside the parent component.
 */
import { Routes, Route } from "react-router";
import { DashBoard } from "./DashBoard";
import {
  Home,
  DashboardUsers,
  DashboardSettings,
  DashboardProfile,
  NotFound,
} from "../page-components/PageComponents";

export default function NestedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />}>
        <Route path="users" element={<DashboardUsers />} />
        <Route path="settings" element={<DashboardSettings />} />
        <Route path="profile" element={<DashboardProfile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

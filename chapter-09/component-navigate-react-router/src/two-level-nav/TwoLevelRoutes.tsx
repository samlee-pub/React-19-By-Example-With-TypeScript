/**
 * This component is used to demonstrate two-level routing.
 * It contains routes for Home and Dashboard pages.
 * The Dashboard page has nested routes for Users, Settings, and Profile.
 * The component is used to provide the BrowserRouter context
 * to its children and provide a custom title for the page.
 */
import { Routes, Route } from "react-router-dom";
import {
  Home,
  DashboardUsers,
  DashboardSettings,
  DashboardProfile,
  NotFound,
} from "../page-components/PageComponents";
import { SecondLevelComponent } from "./SecondLevelComponent";

export default function TwoLevelRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" Component={SecondLevelComponent}>
        <Route index element={<DashboardUsers />} />
        <Route path="users" element={<DashboardUsers />} />
        <Route path="settings" element={<DashboardSettings />} />
        <Route path="profile" element={<DashboardProfile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

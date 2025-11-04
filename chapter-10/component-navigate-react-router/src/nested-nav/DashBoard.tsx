/**
 * DashBoard component that serves as a layout for nested routes.
 * Nested Components are rendered using the Outlet component.
 */
import { Outlet } from "react-router";

export function DashBoard() {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Outlet renders the nested routes */}
      <Outlet />
    </div>
  );
}

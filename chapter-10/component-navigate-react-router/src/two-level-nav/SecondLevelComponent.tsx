/**
 * This component is used to demonstrate second-level routing.
 * It contains a navigation menu and an Outlet to render nested routes.
 */
import { Outlet } from "react-router";
import { SecondLevelNav } from "./SecondLevelNav";

export function SecondLevelComponent() {
  return (
    <>
      <SecondLevelNav />
      <div>
        <h2>Dashboard</h2>
        {/* Outlet renders the nested routes */}
        <Outlet />
      </div>
    </>
  );
}

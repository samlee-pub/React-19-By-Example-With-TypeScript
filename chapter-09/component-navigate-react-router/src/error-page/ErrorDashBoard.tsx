import { Outlet } from "react-router-dom";
import { ErrorPageNav } from "./ErrorPageNav";

export function ErrorDashBoard() {
  return (
    <div>
      <ErrorPageNav />
      <h2>Error DashBoard</h2>
      <Outlet />
    </div>
  );
}

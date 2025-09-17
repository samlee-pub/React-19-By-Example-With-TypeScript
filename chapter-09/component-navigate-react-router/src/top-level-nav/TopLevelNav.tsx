/**
 * This component provides top-level navigation links to the Home, About,
 * and Not-Found pages using NavLink.
 * The links are clickable and navigate to the corresponding pages.
 * The active link is styled differently from the inactive links.
 */
import { NavLink } from "react-router-dom";

export function TopLevelNav() {
  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/invalid">Not-Found</NavLink>
      </nav>
    </>
  );
}

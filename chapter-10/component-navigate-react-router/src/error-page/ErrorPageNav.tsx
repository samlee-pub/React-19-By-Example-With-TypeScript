import { NavLink } from "react-router";

export function ErrorPageNav() {
  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "active mr-1rem" : "inactive mr-1rem"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/not-found"
          className={({ isActive }) =>
            isActive ? "active mr-1rem" : "inactive mr-1rem"
          }
        >
          NotFound
        </NavLink>
        <NavLink
          to="/error/data-error"
          className={({ isActive }) =>
            isActive ? "active mr-1rem" : "inactive mr-1rem"
          }
        >
          Data-Error
        </NavLink>
        <NavLink
          to="/error/throw-error"
          className={({ isActive }) =>
            isActive ? "active mr-1rem" : "inactive mr-1rem"
          }
        >
          Throw-Error
        </NavLink>
      </nav>
    </>
  );
}

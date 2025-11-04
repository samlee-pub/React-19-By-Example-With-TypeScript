/**
 * Top level routes for the application.
 * Each route is a page component.
 * The Home route is the default route.
 * The About route is a static route.
 * The NotFound route is a catch-all route.
 */
import { Routes, Route } from "react-router";
import { Home, About, NotFound } from "../page-components/PageComponents";

export default function TopLevelRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" Component={Home} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

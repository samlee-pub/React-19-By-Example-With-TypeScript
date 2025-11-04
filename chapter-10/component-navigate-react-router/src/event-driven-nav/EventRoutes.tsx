/**
 * This component is used to demonstrate event-driven navigation.
 * It contains links to Home and Button pages.
 * The Home page is the default page.
 * The Button page is accessed by clicking the button.
 */
import { Routes, Route } from "react-router";
import { ButtonComponent, HomeComponent } from "./EventDrivenComponent";
import { NotFound } from "../page-components/PageComponents";

export default function TopLevelRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/home" element={<HomeComponent />} />
      <Route path="/button" element={<ButtonComponent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

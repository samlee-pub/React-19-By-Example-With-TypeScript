/**
 * This component is used to demonstrate event-driven navigation.
 * It contains the EventNav and EventRoutes components.
 * The BrowserRouter is used to enable routing functionality.
 * A custom title is provided for the page.
 */
import { BrowserRouter } from "react-router";
import { EventNav } from "./EventNav";
import EventRoutes from "./EventRoutes";

export function EventRoutingComponent() {
  return (
    <>
      <h3>Event Driven Navigation</h3>
      <div className="my-box-border-1">
        <BrowserRouter>
          <EventNav />
          <EventRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

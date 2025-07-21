import { EventHandlingNoArgument } from "./EventHandlingNoArgument";
import "./App.css";
import "./my-demo-styles.css";
import { EventHandlingWithArguments } from "./EventHandlingWithArguments";

function App() {
  return (
    <div className="list-container">
      <h2>React Components - Events</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handlers (No arguments passed)</h3>
            <EventHandlingNoArgument />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handlers (With arguments passed)</h3>
            <EventHandlingWithArguments />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

import "./App.css";
import "./my-demo-styles.css";
import { TopLevelRoutingComponent } from "./top-level-nav/TopLevelRoutingComponent";
import { NestedRoutingComponent } from "./nested-nav/NestedRoutingComponent";
import { TwoLevelRoutingComponent } from "./two-level-nav/TwoLevelRoutingComponent";
import { DynamicRoutingComponent } from "./dynamic-nav/DynamicRoutingComponent";
import { EventRoutingComponent } from "./event-driven-nav/EventRoutingComponent";
import { SuspenseRoutingComponent } from "./suspense-routing/SuspenseRoutingComponent";

function App() {
  return (
    <div className="list-container">
      <h2>Component Navigation with React Router</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <TopLevelRoutingComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <NestedRoutingComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <TwoLevelRoutingComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <DynamicRoutingComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <EventRoutingComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <SuspenseRoutingComponent />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

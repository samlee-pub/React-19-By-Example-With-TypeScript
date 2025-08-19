import "./App.css";
import "./my-demo-styles.css";
import { FocusManagementComponent } from "./FocusManagementComponent";
import { MutableValueStorageComponent } from "./MutableValueStorageComponent";
import { ComponentInstanceTracking } from "./ComponentInstanceTracking";

function App() {
  return (
    <div className="list-container">
      <h2>React Hooks - useRef</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Accessing actual DOM elements directly</h3>
            <FocusManagementComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Tracking previous state</h3>
            <MutableValueStorageComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Component Instance Tracking</h3>
            <ComponentInstanceTracking />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

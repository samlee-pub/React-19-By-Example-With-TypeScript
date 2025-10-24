import "./App.css";
import "./my-demo-styles.css";
import { ParentCounterComponent } from "./ParentCounterComponent";
import { StateManagementComponent } from "./StateManagementComponent";

function App() {
  return (
    <div className="list-container">
      <h2>Function Components - State</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Function Component State Management</h3>
            <StateManagementComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent/Child State Management</h3>
            <ParentCounterComponent />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

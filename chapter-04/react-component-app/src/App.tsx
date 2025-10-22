import "./App.css";
import "./my-demo-styles.css";
import { ParentCC } from "./ParentCC";
import { ParentFC } from "./ParentFC";

function App() {
  return (
    <div className="list-container">
      <h2>React Components</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Function Components</h3>
            <div className="fg-blue">
              <ParentFC />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components</h3>
            <div className="fg-blue">
              <ParentCC />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

import "./App.css";
import "./my-demo-styles.css";
import { ParentComponent02 } from "./ParentComponent02";
import { ParentComponent01 } from "./ParentComponent01";

function App() {
  return (
    <div className="list-container">
      <h2>Function Components - Props</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>
              Child Components Accessing
              <span className="fg-blue"> props</span>
            </h3>
            <ParentComponent01 />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>
              Parent Components Passing<span className="fg-blue"> props</span>
            </h3>
            <ParentComponent02 />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

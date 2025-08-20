import "./App.css";
import "./my-demo-styles.css";
import { MemoComponent } from "./MemoComponent";
import { MemoValue } from "./MemoValue";
import { MemoLargeDataSet } from "./MemoLargeDataSet";

function App() {
  return (
    <div className="list-container">
      <h2>React Hooks - useMemo</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Optimize Expensive Calculations</h3>
            <div className="fg-blue">useMemo with function results</div>
            <MemoValue />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Optimize Expensive Calculations</h3>
            <div className="fg-blue">useMemo with large dataset</div>
            <MemoLargeDataSet />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Component Rendering Optimization</h3>
            <div className="fg-blue">useMemo with child component</div>
            <MemoComponent />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

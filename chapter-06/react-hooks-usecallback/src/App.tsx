import "./App.css";
import "./my-demo-styles.css";
import { ParentComponent1 } from "./ParentComponet1";
import { ParentComponent2 } from "./ParentComponet2";

function App() {
  return (
    <div className="list-container">
      <h2>React Hooks - useCallback</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Child Component Rendering Optimization</h3>
            <div className="fg-blue">Without useCallback</div>
            <ParentComponent1 />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Child Component Rendering Optimization</h3>
            <div className="fg-blue">With useCallback</div>
            <ParentComponent2 />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

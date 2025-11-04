import "./App.css";
import "./my-demo-styles.css";
import { ParentComponentAll } from "./ParentComponentAll";
import { ParentComponentCleanupFnDepArray } from "./ParentComponentCleanupFnDepArray";
import { ParentComponentCleanupFnEmptyArray } from "./ParentComponentCleanupFnEmptyArray";
import { ParentComponentCleanupFnNoArray } from "./ParentComponentCleanupFnNoArray";
import { ParentComponentDepArray } from "./ParentComponentDepArray";
import { ParentComponentEmptyArray } from "./ParentComponentEmptyArray";
import { ParentComponentNoArray } from "./ParentComponentNoArray";

function App() {
  return (
    <div className="list-container">
      <h2>React Hooks - useEffect</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useEffect - No Dependency Array</h3>
            <div className="fg-blue">Runs after every render</div>
            <ParentComponentNoArray />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useEffect - Empty Dependency Array </h3>
            <div className="fg-blue">Runs once after initial render</div>
            <ParentComponentEmptyArray />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useEffect - With Dependency Array </h3>
            <div className="fg-blue">Runs when dependencies change</div>
            <ParentComponentDepArray />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useEffect - Cleanup Functions Without Dependency Array</h3>
            <div className="fg-blue">Runs after every render</div>
            <ParentComponentCleanupFnNoArray />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useEffect - Cleanup Functions With Empty Dependency Array </h3>
            <div className="fg-blue">Runs once on unmount</div>
            <ParentComponentCleanupFnEmptyArray />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useEffect - Cleanup Functions With Dependency Array </h3>
            <div className="fg-blue">Runs when dependencies change</div>
            <ParentComponentCleanupFnDepArray />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useEffect - Multiple useEffect hooks</h3>
            <div className="fg-blue">
              Runs each effect with its own dependencies
            </div>
            <ParentComponentAll />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

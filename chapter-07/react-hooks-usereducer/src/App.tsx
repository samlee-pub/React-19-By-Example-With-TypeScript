import "./App.css";
import { BasicCounterComponentWithUseReducer } from "./BasicCounterComponentWithUseReducer";
import { BasicCounterComponentWithUseState } from "./BasicCounterComponentWithUseState";
import "./my-demo-styles.css";

function App() {
  return (
    <div className="list-container">
      <h2>React Hooks - useReducer</h2>
      <h3 className="fg-blue">useState vs. useReducer</h3>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Counter with useState</h3>
            <BasicCounterComponentWithUseState />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Counter with useReducer</h3>
            <BasicCounterComponentWithUseReducer />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

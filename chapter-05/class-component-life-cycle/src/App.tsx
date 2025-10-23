import "./App.css";
import "./my-demo-styles.css";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div className="list-container">
      <h2>React Components - Life Cycle</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: Lifecycle</h3>
            <ParentComponent />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

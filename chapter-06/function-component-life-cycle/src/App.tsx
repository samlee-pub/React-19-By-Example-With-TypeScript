import "./App.css";
import "./my-demo-styles.css";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div className="list-container">
      <h2>Function Components - Life Cycle</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Function Components: Lifecycle</h3>
            <ParentComponent />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

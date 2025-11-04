import "./App.css";
import "./my-demo-styles.css";
import { FetchGet } from "./FetchGet";
import { FetchGetWithQuery } from "./FetchGetWithQuery";
import { FetchPost } from "./FetchPost";

function App() {
  return (
    <div className="list-container">
      <h2>React with Fetch API</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <FetchGet />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <FetchGetWithQuery />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <FetchPost />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

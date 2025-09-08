import "./App.css";
import "./my-demo-styles.css";
import { AxiosGet } from "./AxiosGet";
import { AxiosGetWithQuery } from "./AxiosGetWithQuery";
import { AxiosPost } from "./AxiosPost";

function App() {
  return (
    <div className="list-container">
      <h2>React with Axios</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <AxiosGet />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <AxiosGetWithQuery />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <AxiosPost />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

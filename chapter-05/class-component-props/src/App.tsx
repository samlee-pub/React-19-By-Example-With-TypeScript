import "./App.css";
import { ChildProps01 } from "./ChildProps01";
import { ChildProps02 } from "./ChildProps02";
import {
  ChildPropsDestructDefault03,
  ChildPropsStaticDefaultProps03,
} from "./ChildProps03";
import { ChildProps04 } from "./ChildProps04";
import { ChildProps05 } from "./ChildProps05";
import "./my-demo-styles.css";
import { ParentProps01 } from "./ParentProps01";
import { ParentProps02 } from "./ParentProps02";
import { ParentProps03 } from "./ParentProps03";
import { ParentProps04 } from "./ParentProps04";
import { ParentProps05 } from "./ParentProps05";

function App() {
  return (
    <div className="list-container">
      <h2>React Components - Props</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: this.props</h3>
            <ChildProps01 name="David" age={25} />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: Destructured Props</h3>
            <ChildProps02 name="David" age={25} />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: Default Props</h3>
            <ChildPropsStaticDefaultProps03 />
            <ChildPropsDestructDefault03 age={36} />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: Constructor With Props</h3>
            <ChildProps04 age={36} />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: Accessing Children</h3>
            <ChildProps05 age={36} />
            <ChildProps05 name="David" age={36}>
              <button>I am the children content!</button>
            </ChildProps05>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: Passing props</h3>
            <ParentProps01 />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: Passing props</h3>
            <ParentProps02 />
            <ParentProps03 />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: Passing props</h3>
            <ParentProps04 />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Class Components: Default Props</h3>
            <ParentProps05 />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

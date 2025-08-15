import "./App.css";
import "./my-demo-styles.css";
import { StaticContextComponent } from "./StaticContexts/StaticContextComponent";
import { ChildComponentLayer01 } from "./ChildComponentLayer01";
import { ChildComponentLayer02 } from "./ChildComponentLayer02";
import { ChildComponentLayer03StaticContext } from "./StaticContexts/ChildComponentLayer03StaticContext";
import { DynamicContextComponent } from "./DynamicContexts/DynamicContextComponent";
import { ChildComponentLayer03DynamicContext } from "./DynamicContexts/ChildComponentLayer03DynamicContext";

function App() {
  return (
    <div className="list-container">
      <h2>React Hooks - useContext</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useContext - Static Context for Immutable Values</h3>
            <div className="fg-blue">
              Parent passes context to children and grandchildren
            </div>
            <StaticContextComponent>
              <ChildComponentLayer01>
                <ChildComponentLayer02>
                  <ChildComponentLayer03StaticContext />
                </ChildComponentLayer02>
              </ChildComponentLayer01>
            </StaticContextComponent>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>useContext - Dynamic Context for Mutable Values</h3>
            <DynamicContextComponent>
              <ChildComponentLayer01>
                <ChildComponentLayer02>
                  <ChildComponentLayer03DynamicContext />
                </ChildComponentLayer02>
              </ChildComponentLayer01>
            </DynamicContextComponent>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

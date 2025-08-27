import "./App.css";
import "./my-demo-styles.css";
import {
  Ex01SingleRootElement01,
  Ex01SingleRootElement02,
  Ex02AttributesInJSX01,
  Ex02AttributesInJSX02,
  Ex03EventHandling01,
  Ex04JsExpression01,
  Ex04JsExpression02,
  Ex05InlineCSSStyles01,
  Ex05InlineCSSStyles02,
  Ex06JsObjects01,
  Ex06JsObjects02,
} from "./tsxSyntaxRules";

function App() {
  return (
    <div className="list-container">
      <h2>JSX Syntax Rules</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Single Root Element</h3>
            <ul>
              <li>
                A single text string:{" "}
                <span className="fg-blue">{"`A text string`"}</span>
                <div>
                  Result:{" "}
                  <b className="fg-blue">
                    <Ex01SingleRootElement01 />
                  </b>
                </div>
              </li>
              <li>
                A single parent tag.:{" "}
                <span className="fg-blue">{"`<>A single parent tag</>`"}</span>
                <div>
                  Result:{" "}
                  <b className="fg-blue">
                    <Ex01SingleRootElement02 />
                  </b>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Attributes in JSX</h3>
            <ul>
              <li>
                <div>Use className attribute for CSS class names:</div>
                <div className="fg-blue">{`<h4 className="text-color-blue">Hello World!</h4>`}</div>
                <div>
                  Result: <Ex02AttributesInJSX01 />
                </div>
              </li>

              <li>
                <div>
                  Use camelCase for hyphenated attributes, e.g. strokeWidth:
                </div>
                <div className="fg-blue">{`<rect width="50" height="50" stroke="blue" strokeWidth="10" />`}</div>
                <div>
                  Result:{" "}
                  <div>
                    <Ex02AttributesInJSX02 />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handling</h3>
            <div>Pass an event handler function as a prop:</div>
            <div className="fg-blue">{"function handleClick(){...}"}</div>
            <div className="fg-blue">
              {"<button onClick={handleClick}>Click Me!</button>"}
            </div>
            <div>
              Result:{" "}
              <div>
                <Ex03EventHandling01 />
              </div>
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Use JavaScript expressions in JSX</h3>
            <ul>
              <li>
                <div>JavaScript expressions in JSX attributes:</div>
                <div className="fg-blue">{`const myClasses = "fg-red bg-blue";`}</div>
                <div className="fg-blue">{`<div className={myClasses}>Red</div>`}</div>
                <div>
                  Result: <Ex04JsExpression01 />
                </div>
              </li>

              <li>
                <div>JavaScript expressions in JSX text contents:</div>
                <div className="fg-blue">{`const textContent= "Text Content";`}</div>
                <div className="fg-blue">{`<div className="fg-red bg-blue">{textContent}</div>`}</div>
                <div>
                  Result:{" "}
                  <div>
                    <Ex04JsExpression02 />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Use JavaScript expressions in Inline CSS Styles</h3>
            <ul>
              <li>
                <div>Assign an object directly to the style attribute:</div>
                <div className="fg-blue" style={{ textAlign: `left` }}>
                  <div>{`<div style={{ backgroundColor: "grey", color: "blue" }}>`}</div>
                  <div style={{ marginLeft: `2rem` }}>
                    {"Inline CSS Styles"}
                  </div>
                  <div>{`</div>`}</div>
                </div>
                <div>
                  Result: <Ex05InlineCSSStyles01 />
                </div>
              </li>
              <li>
                <div>Pass a predefined object to the style attribute:</div>
                <div className="fg-blue" style={{ textAlign: `left` }}>
                  <div>{`const styles = { backgroundColor: "blue", color: "red" };`}</div>
                  <div>{`<div style={styles}>Inline CSS Styles</div>`}</div>
                </div>
                <div>
                  Result: <Ex05InlineCSSStyles02 />
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Use JavaScript expressions in custom JSX</h3>
            <ul>
              <li>
                <div>Assign an object directly to a JSX attribute:</div>
                <div className="fg-blue">{`<PersonApp person={{name:"Hedy Lamarr", age:25}} />`}</div>
                <div>
                  Result:
                  <b className="fg-blue">
                    <Ex06JsObjects01 />
                  </b>
                </div>
              </li>
              <li>
                <div>Pass a predefined object to a JSX attribute:</div>
                <div className="fg-blue">
                  <div>{`const user = { name: "Judy Smith", age: 33 };`}</div>
                  <div>{`<PersonApp person={user} />`}</div>
                </div>
                <div>
                  Result:
                  <b className="fg-blue">
                    <Ex06JsObjects02 />
                  </b>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

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
  Ex05InlineCSSStyles,
  Ex06JsObjects,
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
            <div>{`A text string`}</div>
            <div>
              <Ex01SingleRootElement01 />
            </div>
            <div>{`<>The Rules of JSX</>`}</div>
            <div>
              <Ex01SingleRootElement02 />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Attributes in JSX</h3>
            <div>{`<h4 className="text-color-blue">Hello World!</h4>`}</div>
            <div>
              <Ex02AttributesInJSX01 />
            </div>
            <div>{`<rect width="50" height="50" stroke="blue" strokeWidth="10" />`}</div>
            <div>
              <Ex02AttributesInJSX02 />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handling</h3>
            <div>{`<button onClick={handleClick}>Click Me!</button>`}</div>
            <div>
              <Ex03EventHandling01 />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Expression In Attributes</h3>
            <div>{`const myClasses = "fg-red bg-blue";`}</div>
            <div>{`<div className={myClasses}>Red</div>`}</div>
            <div>
              <Ex04JsExpression01 />
            </div>
            <h3>Expressions In Text Contents</h3>
            <div>{`const textContent= "Text Content";`}</div>
            <div>{`<div className="fg-red bg-blue">{textContent}</div>`}</div>
            <div>
              <Ex04JsExpression02 />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Inline CSS Styles</h3>
            <div>{`<div style={{ backgroundColor: "grey", color: "blue" }}>`}</div>
            <div>{` Inline CSS Styles </div>`}</div>
            <div>
              <Ex05InlineCSSStyles />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>JavaScript Objects</h3>
            <div>{`<PersonApp person={{name:"Hedy Lamarr", age:25}} />`}</div>
            <div>
              <Ex06JsObjects />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

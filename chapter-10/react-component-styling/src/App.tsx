import "./App.css";
import "./my-demo-styles.css";
import { MyInlineComponent } from "./inline-styles/MyInlineComponent";
import { MyPlainComponent } from "./plain-css/MyPlainComponent";
import { MyCSSModuleComponent } from "./css-modules/MyCSSModuleComponent";
import { MyEmotionComponent } from "./css-in-js/MyEmotionComponent";
import { MyScssComponent } from "./scss/MyScssComponent";
import { MyTailwindComponent } from "./tailwind-css/MyTailwindComponent";
import { MySvgComponents } from "./svg/MySvgComponents";

function App() {
  return (
    <div className="list-container">
      <h2>Styling Components</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <MyPlainComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <MyInlineComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <MyCSSModuleComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <MyEmotionComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <MyScssComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <MyTailwindComponent />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <MySvgComponents />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

import "./App.css";
import "./my-demo-styles.css";

import { RegisterFields } from "./RegisterFields";
import { RegisterAndWatchFields } from "./RegisterAndWatchFields";
import { RegisterAndWatchWithEffects } from "./RegisterAndWatchWithEffects";
import { RegisterWithFieldValidation } from "./RegisterWithFieldValidation";
import { HandleFormSubmit } from "./HandleFormSubmit";
import { RegisterAndUseWatch } from "./RegisterAndUseWatch";
import { HandleFormDefaultsAndReset } from "./HandleFormDefaultsAndReset";
import { HandleFormState } from "./HandleFormState";
import { FormValidationWithYup } from "./FormValidationWithYup";
import { FormWithFileUpload } from "./FormWithFileUpload";
import { FormWithMultiFileUpload } from "./FormWithMultiFileUpload";

function App() {
  return (
    <div className="list-container">
      <h2>React Form - React Hook useForm</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <RegisterFields />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <RegisterAndWatchFields />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <RegisterAndWatchWithEffects />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <RegisterAndUseWatch />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <RegisterWithFieldValidation />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <HandleFormSubmit />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <HandleFormDefaultsAndReset />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <HandleFormState />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <FormWithFileUpload />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <FormWithMultiFileUpload />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <FormValidationWithYup />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

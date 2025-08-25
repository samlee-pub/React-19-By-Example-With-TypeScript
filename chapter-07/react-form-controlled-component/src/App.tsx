import "./App.css";
import "./my-demo-styles.css";
import { CheckBoxForm } from "./CheckBoxForm";
import { CompleteFormWithValidation } from "./CompleteFormWithValidation";
import { MultiInputForm } from "./MultiInputForm";
import { RadioForm } from "./RadioForm";
import { SelectForm } from "./SelectForm";
import { TextAreaForm } from "./TextAreaForm";
import { TextInputForm } from "./TextInputForm";

function App() {
  return (
    <div className="list-container">
      <h2>React Form - Controlled Component</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <TextInputForm />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <MultiInputForm />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <TextAreaForm />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <SelectForm />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <CheckBoxForm />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <RadioForm />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <CompleteFormWithValidation />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

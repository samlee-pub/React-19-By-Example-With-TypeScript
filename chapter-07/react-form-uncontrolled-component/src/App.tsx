import "./App.css";
import "./my-demo-styles.css";
import { FileInputForm } from "./FileInputForm";
import { FormDataAPI } from "./FormDataAPI";
import { FormWithDefaults } from "./FormWithDefaults";
import { MultiInputForm } from "./MultiInputForm";
import { NativeValidationForm } from "./NativeValidationForm";
import { TextInputForm } from "./TextInputForm";

function App() {
  return (
    <div className="list-container">
      <h2>React Form - Uncontrolled Component</h2>
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
            <FileInputForm />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <FormWithDefaults />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <FormDataAPI />
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <NativeValidationForm />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;

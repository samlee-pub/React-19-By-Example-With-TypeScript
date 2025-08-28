/**
 * This component implements an uncontrolled form with default values.
 * It shows how to use defaultValue and defaultChecked props.
 */
import { useRef } from "react";

export function FormWithDefaults() {
  const textRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const textLabelRef = useRef<HTMLLabelElement>(null);
  const textareaLabelRef = useRef<HTMLLabelElement>(null);
  const selectLabelRef = useRef<HTMLLabelElement>(null);
  const checkboxLabelRef = useRef<HTMLLabelElement>(null);

  const handleShowValues = () => {
    const values = {
      text: textRef.current?.value ?? "",
      textarea: textareaRef.current?.value ?? "",
      select: selectRef.current?.value ?? "",
      checkbox: checkboxRef.current?.checked ? "Checked" : "Unchecked",
    };
    for (const key in values) {
      updateFormValues(
        key as keyof typeof values,
        values[key as keyof typeof values],
      );
    }
    if (textLabelRef.current) {
      textLabelRef.current.innerText = values.text;
    }
    if (textareaLabelRef.current) {
      textareaLabelRef.current.innerText = values.textarea;
    }
    if (selectLabelRef.current) {
      selectLabelRef.current.innerText = values.select;
    }
    if (checkboxLabelRef.current) {
      checkboxLabelRef.current.innerText = String(values.checkbox);
    }
    alert(JSON.stringify(values, null, 2));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    updateFormValues(name, value);
  };

  const updateFormValues = (name: string, value: string) => {
    if (name === "text" && textLabelRef.current) {
      textLabelRef.current.innerText = value;
    } else if (name === "textarea" && textareaLabelRef.current) {
      textareaLabelRef.current.innerText = value;
    } else if (name === "select" && selectLabelRef.current) {
      selectLabelRef.current.innerText = value;
    } else if (name === "checkbox" && checkboxLabelRef.current) {
      checkboxLabelRef.current.innerText = checkboxRef.current?.checked
        ? "Checked"
        : "Unchecked";
    } else {
      console.log("Unknown input field");
    }
  };
  return (
    <div>
      <h3>Uncontrolled Form with Default Values</h3>

      <input
        type="text"
        ref={textRef}
        name="text"
        defaultValue="Default text"
        className="my-input same-width-input"
        onChange={handleInputChange}
      />

      <textarea
        ref={textareaRef}
        defaultValue="Default textarea content"
        name="textarea"
        rows={3}
        className="my-textarea same-width-input"
        onChange={handleInputChange}
      />

      <select
        ref={selectRef}
        defaultValue="option2"
        name="select"
        className="my-select same-width-input"
        onChange={handleInputChange}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <div className="my-checkbox-label same-width-div">
        <input
          type="checkbox"
          name="checkbox"
          ref={checkboxRef}
          defaultChecked={true}
          className="my-checkbox"
          onChange={handleInputChange}
        />
        Checked by default
      </div>
      <button onClick={handleShowValues} className="my-button same-width-div">
        Show Current Values
      </button>

      <div className="my-box-border-1 same-width-div">
        <div>
          <b>Form Data Values</b>
        </div>
        <div className="text-left">
          <div>
            Text: <span className="fg-blue" ref={textLabelRef}></span>
          </div>
          <div>
            Textarea: <span className="fg-blue" ref={textareaLabelRef}></span>
          </div>
          <div>
            Select: <span className="fg-blue" ref={selectLabelRef}></span>
          </div>
          <div>
            Checkbox: <span className="fg-blue" ref={checkboxLabelRef}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

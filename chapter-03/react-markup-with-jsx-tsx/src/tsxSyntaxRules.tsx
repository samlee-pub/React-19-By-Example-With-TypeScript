/**
 * @ReactDOM Component: <Ex01SingleRootElement01 />
 * @returns A text string
 * @description A single text string.
 */
export function Ex01SingleRootElement01() {
  return `A text string`;
}

/**
 * @ReactDOM Component: <Ex01SingleRootElement02 />
 * @returns A single parent tag
 * @description A single parent tag.
 */
export function Ex01SingleRootElement02() {
  return <>A single parent tag</>;
}

/**
 * @ReactDOM Component: <Ex02AttributesInJSX01 />
 * @description Use className instead of class for CSS class names.
 */
export function Ex02AttributesInJSX01() {
  return <h4 className="text-color-blue">Hello World!</h4>;
}

/**
 * @ReactDOM Component: <Ex02AttributesInJSX02 />
 * @description camelCase for hyphenated attributes
 */
export const Ex02AttributesInJSX02 = () => (
  <svg width="50" height="50" fill="none">
    <rect width="50" height="50" stroke="blue" strokeWidth="10" />
  </svg>
);

/**
 * @ReactDOM Component: <Ex03EventHandling01 />
 * @returns A button with an onClick event handler
 * @description Event handling in JSX.
 */
export const Ex03EventHandling01 = () => {
  function handleClick(): void {
    alert("Button clicked!");
  }
  return <button onClick={handleClick}>Click Me!</button>;
};

/**
 * @ReactDOM Component: <Ex04JsExpression01 />
 * @description JavaScript expressions in JSX attributes.
 */
export const Ex04JsExpression01 = () => {
  const myClasses = "fg-red bg-blue";
  return <div className={myClasses}>Red</div>;
};

/**
 * @ReactDOM Component: <Ex04JsExpression02 />
 * @description JavaScript expressions in Text Contents.
 */
export const Ex04JsExpression02 = () => {
  const textContent = "Text Content";
  return <div className="fg-red bg-blue">{textContent}</div>;
};

/**
 * @ReactDOM Component: <Ex05InlineCSSStyles01 />
 * @description Assign an object directly to the style attribute.
 */
export const Ex05InlineCSSStyles01 = () => {
  return (
    <div style={{ backgroundColor: "grey", color: "blue" }}>
      Inline CSS Styles
    </div>
  );
};

/**
 * @ReactDOM Component: <Ex05InlineCSSStyles02 />
 * @description Pass a predefined object to the style attribute.
 */
export const Ex05InlineCSSStyles02 = () => {
  const styles = { backgroundColor: "blue", color: "red" };
  return <div style={styles}>Inline CSS Styles</div>;
};
/**
 * @ReactDOM Component: <PersonApp person={{...}} />
 * @description Use of JavaScript objects
 */
function PersonApp({ person }: { person: { name: string; age: number } }) {
  return (
    <div>
      Name: {person.name}, Age: {person.age}
    </div>
  );
}

/**
 * @ReactDOM Component: <Ex06JsObjects01 />
 * @description Assign an object directly to the person attribute.
 */
export const Ex06JsObjects01 = () => (
  <PersonApp person={{ name: "Hedy Lamarr", age: 25 }} />
);

/**
 * @ReactDOM Component: <Ex06JsObjects02 />
 * @description Pass a predefined object to the person attribute.
 */
export const Ex06JsObjects02 = () => {
  const user = { name: "Judy Smith", age: 33 };
  return <PersonApp person={user} />;
};

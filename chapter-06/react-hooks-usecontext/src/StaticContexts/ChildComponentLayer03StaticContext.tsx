/**
 * This component demonstrates the use of a static context
 * to provide immutable theme values to its children.
 * It consumes the StaticContextObject to access light and dark themes.
 * The buttons are styled to reflect the themes.
 * It also displays the context object values for reference.
 * This is a static context, meaning the values do not change dynamically.
 */
import { useContext } from "react";
import { StaticContextObject } from "./StaticContextComponent";

export const ChildComponentLayer03StaticContext = () => {
  const { lightTheme, darkTheme } = useContext(StaticContextObject);
  return (
    <div className="my-box-border-1">
      <h3>Child Component - Layer 03</h3>
      <div className="fg-blue">Static Context in Use</div>
      <div style={{ marginTop: "12px" }}>
        <button style={lightTheme}>Light Mode</button>
        <button style={{ ...darkTheme, marginLeft: "12px" }}>Dark Mode</button>
      </div>
      <div style={{ marginTop: "12px" }}>
        <div className="fg-blue">Context Object:</div>
        <div style={{ textAlign: "left", marginLeft: "2rem" }}>
          <b>LightTheme</b>:
          <div style={{ margin: 0, marginLeft: "1rem", border: 0 }}>
            {JSON.stringify(lightTheme)}
          </div>
          <b>DarkTheme</b>:
          <div style={{ margin: 0, marginLeft: "1rem", border: 0 }}>
            <div>{`{ "color": "${darkTheme.color}", "backgroundColor": "${darkTheme.backgroundColor}"}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

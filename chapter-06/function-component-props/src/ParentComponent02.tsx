/**
 * This component demonstrates various ways to pass props to child components.
 * It includes standard JSX attributes, function attributes, object attributes,
 * object spread, children props, and default props.
 * Each child component showcases a different aspect of prop handling in React.
 */
import { ChildComponent01 } from "./ChildComponent01";
import { ChildComponent03 } from "./ChildComponent03";
import { ChildComponent04 } from "./ChildComponent04";
import { ChildComponent05 } from "./ChildComponent05";
import {
  ChildComponent0601,
  ChildComponent0602,
  ChildComponent0603,
} from "./ChildComponent06";

export function ParentComponent02() {
  const person = { name: "David", age: 25 };
  return (
    <>
      <div className="my-box-border-1">
        <h3>Standard JSX attributes</h3>
        <ChildComponent01 name="David" age={25} />
      </div>
      <div className="my-box-border-1">
        <h3>Object Spread</h3>
        <ChildComponent01 {...person} />
      </div>
      <div className="my-box-border-1">
        <h3>Default Props</h3>
        <ChildComponent03 />
      </div>
      <div className="my-box-border-1">
        <h3>Children Props</h3>
        <ChildComponent04 {...person}>
          <button>I am the children content!</button>
        </ChildComponent04>
      </div>
      <div className="my-box-border-1">
        <h3>Function Props</h3>
        <ChildComponent05
          onclick={() => {
            alert("Button clicked!");
          }}
        />
      </div>
      <div className="my-box-border-1">
        <h3>Object Props</h3>
        <ChildComponent0601 user={person} />
        <ChildComponent0602 user={{ name: "Bob", age: 30 }} />
        <ChildComponent0603 user={{ name: "Charlie", age: 35 }} />
      </div>
    </>
  );
}

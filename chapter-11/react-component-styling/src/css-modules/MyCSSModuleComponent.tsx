/**
 * This component demonstrates CSS Modules in React.
 * It imports scoped styles from a CSS Module file and applies
 * them using the styles object, ensuring no class name conflicts.
 */
import styles from "./MyComponent.module.css";

export function MyCSSModuleComponent() {
  return (
    <>
      <h3>CSS Modules</h3>
      <div className={"my-box-border-1"}>
        <button
          className={`${styles.myBgBlue} ${styles.myColorRed} ${styles.myMargin2}`}
        >
          My-Blue-Button
        </button>
        <div className={`${styles["my-color-white"]} ${styles["my-bg-green"]}`}>
          CSS Modules
        </div>
      </div>
    </>
  );
}

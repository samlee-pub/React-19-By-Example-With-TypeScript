/**
 * This component is used to demonstrate event-driven navigation.
 * It contains links to Home and Button pages.
 * Use the useNavigate hook to navigate to the other pages.
 * A button is provided to navigate to the Button page from
 * the Home page and vice versa.
 */
import { useNavigate } from "react-router-dom";

export function ButtonComponent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    void navigate("/home");
  };

  return (
    <>
      <h2 className="App">Button Page</h2>
      <button onClick={handleButtonClick}>Go to Home Page</button>
    </>
  );
}
export function HomeComponent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    void navigate("/button");
  };

  return (
    <>
      <h2 className="App">Home Page</h2>
      <button onClick={handleButtonClick}>Go to Button Page</button>
    </>
  );
}

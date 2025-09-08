/**
 * A React component that demonstrates how to perform a basic GET request using the Axios library.
 * It fetches a list of phone objects from a public API and displays them.
 * If there is an error fetching the data, it displays an error message.
 */
import { useState } from "react";
import axios from "axios";

/**
 * Type definition for a Phone object returned by the API.
 */
type Phone = {
  id: string;
  name: string;
  data: {
    Capacity: string;
    Price: string;
  };
};

/**
 * A React component that displays a list of phone objects fetched from the API.
 * If there is an error fetching the data, it displays an error message.
 */
export function AxiosGet() {
  // State to hold the input value
  const [phoneList, setPhoneList] = useState([] as Phone[]);
  const [fetchError, setFetchError] = useState<string>();

  /**
   * Fetches phone objects from the API and updates the component state.
   * If there is an error, it sets the fetchError state.
   */
  function getPhones(): void {
    axios
      .get("https://api.restful-api.dev/objects")
      .then((response) => {
        if (response !== null && response.status !== 200) {
          throw new Error("Network response error: " + response.statusText);
        }
        return response.data as Phone[];
      })
      .then((json) => setPhoneList(json))
      .catch((error: Error) => setFetchError(error.message));
  }

  /**
   * Inline style for labels to ensure consistent width.
   */
  const labelStyle = {
    display: "inline-block",
    width: "6rem",
  };

  /**
   * The component's rendered output.
   * The fetch operation is triggered by clicking the "Get Phones" button.
   * It conditionally renders either the phone list or an error message.
   * The phone list is sliced to show only a subset of the data for brevity.
   * Handles errors gracefully by displaying an error message if the fetch fails.
   */
  return (
    <div>
      <h3>Axios Get Request</h3>

      <div className="my-box-border-1 same-width-div">
        <h3>Get Two Phone Objects</h3>
        <div>
          <b>Server:</b>
          <span className="fg-blue"> https://api.restful-api.dev/objects</span>
        </div>
        <div>
          Method: <b className="fg-blue">GET</b>
        </div>
        <button onClick={getPhones}>Get Phones</button>
      </div>
      {fetchError && (
        <div className="my-box-border-1 same-width-div">
          <h3>Phone List</h3>
          <div>
            Error:<b className="fg-red"> {fetchError}</b>
          </div>
        </div>
      )}
      {!fetchError && phoneList.length > 0 && (
        <div className="my-box-border-1 same-width-div">
          <h3>Phone List</h3>
          {phoneList.slice(11).map((phone) => (
            <div key={phone.id} className="text-left same-width-div">
              <div>
                <b style={labelStyle}>ID:</b> {phone.id}
              </div>
              <div>
                <b style={labelStyle}>Name:</b> {phone.name}
              </div>
              <div>
                <b style={labelStyle}>Capacity:</b> {phone.data.Capacity}
              </div>
              <div>
                <b style={labelStyle}>Price:</b> {phone.data.Price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

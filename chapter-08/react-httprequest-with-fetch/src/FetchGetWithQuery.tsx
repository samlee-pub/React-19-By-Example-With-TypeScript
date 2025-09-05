/**
 * A React component that demonstrates how to perform a basic GET request using the Fetch API with a query parameter.
 * It fetches a list of phone objects from a public API and displays them.
 * If there is an error fetching the data, it displays an error message.
 */
import { useState } from "react";

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
export function FetchGetWithQuery() {
  // State to hold the input value
  const [phoneList, setPhoneList] = useState([] as Phone[]);
  const [fetchError, setFetchError] = useState<string>();

  /**
   * Fetches phone objects from the API using a GET request with query parameters.
   * On success, updates the phoneList state with the fetched data.
   * On failure, updates the fetchError state with the error message.
   */
  function getPhones(): void {
    fetch("https://api.restful-api.dev/objects?id=10&id=12")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error: " + response.statusText);
        }
        return response.json();
      })
      .then((json) => setPhoneList(json as Phone[]))
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
   * All fetched phone objects are displayed.
   * Handles errors gracefully by displaying an error message if the fetch fails.
   */
  return (
    <div>
      <h3>Basic Get Request with Query Parameter</h3>

      <div className="my-box-border-1 same-width-div">
        <h3>Fetch Two Phone Objects</h3>
        <div>
          <b>Server: </b>
          <span className="fg-blue">
            https://api.restful-api.dev/objects?id=10&id=12
          </span>
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
          {phoneList.map((phone) => (
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

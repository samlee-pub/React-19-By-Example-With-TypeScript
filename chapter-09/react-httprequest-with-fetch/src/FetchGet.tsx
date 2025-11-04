/**
 * A React component that demonstrates how to perform a basic GET request using the Fetch API.
 * It fetches a list of phone objects from a public API and displays them.
 * If there is an error fetching the data, it displays an error message.
 */
import { useState } from "react";

/**
 * Type definition for a Phone object returned by the API.
 */
interface Phone {
  id: string;
  name: string;
  data: {
    Capacity: string;
    Price: string;
  };
}

/**
 * A React component that displays a list of phone objects fetched from the API.
 * If there is an error fetching the data, it displays an error message.
 */
export function FetchGet() {
  // State to hold the input value
  const [phoneList, setPhoneList] = useState([] as Phone[]);
  const [fetchError, setFetchError] = useState<string>();

  function getPhones(): void {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error: " + response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setPhoneList(json as Phone[]);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setFetchError(error.message);
        } else if (typeof error === "string") {
          setFetchError(error);
        } else {
          setFetchError("An unknown error occurred");
        }
      });
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
      <h3>Basic Get Request</h3>

      <div className="my-box-border-1 same-width-div">
        <h3>Fetch Two Phone Objects</h3>
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

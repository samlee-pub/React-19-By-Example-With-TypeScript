import { Link, useRouteError, isRouteErrorResponse } from "react-router";

export function ErrorPage() {
  const error = useRouteError();
  // 1. Check if it's a React Router response error (most common)
  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Oops!</h1>
        <div>Sorry, an unexpected error has occurred.</div>
        <div>
          <i>{error.statusText}</i>
          {error.data && <div>{String(error.data)}</div>}
        </div>
        {error.status && <div>Status Code: {error.status}</div>}

        <div style={{ marginTop: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            <button>Go Home</button>
          </Link>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  // 2. Check if it's a standard JavaScript Error object
  if (error instanceof Error) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Oops!</h1>
        <div>Sorry, an unexpected error has occurred.</div>
        <div>
          <i>{error.message}</i>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            <button>Go Home</button>
          </Link>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  // 3. Fallback for unknown error types
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Oops!</h1>
      <div>Sorry, an unexpected error has occurred.</div>
      <div>
        <i>{String(error)}</i> {/* Safely convert to string */}
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          <button>Go Home</button>
        </Link>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

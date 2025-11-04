/**
 * This component is used to demonstrate lazy loading and suspense.
 * It contains routes for Home, Lazy Page, and Async Data User pages.
 * The Lazy Page route is loaded lazily using React.lazy and React.Suspense.
 * The Async Data User route is loaded asynchronously using a Promise.
 * The component is used to provide the BrowserRouter context
 * to its children and provide a custom title for the page.
 */
import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import { Home } from "../page-components/PageComponents";
import { NotFound } from "../page-components/PageComponents";
import { AsyncDataUserComponent } from "./AsyncDataUserPage";

/**
 * Lazy load the LazyPage component using React.lazy.
 */
const LazyPage = lazy(() => import("./LazyPage"));

/**
 * This function simulates an asynchronous operation that fetches a user name.
 * It returns a Promise that resolves to a user name after 5 seconds.
 */
const getUser = async () => {
  const user = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("John Smith");
    }, 5000);
  });
  return user;
};
export default function LazyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/lazy-page"
        element={
          <Suspense fallback={<h2>Lazy Page Loading...</h2>}>
            <LazyPage />
          </Suspense>
        }
      />
      <Route
        path="/async-data"
        element={
          <Suspense fallback={<h2>Promise Data Loading...</h2>}>
            <h2 className="App">Use Page</h2>
            <AsyncDataUserComponent userPromise={getUser()} />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

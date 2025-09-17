/**
 * @description: BrowserRouterContextConfig
 *  BrowserRouterContextConfig is a context provider component.
 *  The component is used to provide the BrowserRouter context
 *  to its children and provide a custom title for the page.
 *  The context is provided by the BrowserRouter component and
 *  is consumed by the NavLink component.
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default function BrowserRouterContextfig({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h3> {title}</h3>

      <div className="my-box-border-1">
        <BrowserRouter>{children}</BrowserRouter>
      </div>
    </>
  );
}

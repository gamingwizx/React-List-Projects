import React from "react";
import { ContextProvider1 } from "./context.js";

export default function Layout({ children }) {
  return <ContextProvider1>{children}</ContextProvider1>;
}

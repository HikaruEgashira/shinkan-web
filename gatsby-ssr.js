import React from "react"
import { StoreProvider } from "./src/store"
export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)

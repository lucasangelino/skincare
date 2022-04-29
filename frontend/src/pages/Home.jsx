import * as React from "react";
import { AddToProducts } from "../components/framework/AddToProduct";
import { Foro } from "../components/framework/Foro";
export function Home() {
  return (
    <>
      <AddToProducts />
      <Foro />
    </>
  );
}

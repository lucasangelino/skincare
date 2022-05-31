import * as React from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";

import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW="8xl" marginTop={5}>
        {children}
      </Container>
    </>
  );
}

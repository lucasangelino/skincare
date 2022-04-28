import * as react from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

import { Sidebar } from "./Sidebar";
import { AddToProducts } from "../framework/AddToProduct";
import { SkinRutine } from "../framework/SkinRutine";
import { Foro } from "../framework/Foro";

export function App() {
  return (
    <>
      <Navbar />
      <Container maxW="8xl" marginTop={5}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <AddToProducts />
            <Foro />
          </GridItem>
          <GridItem colSpan={1}>
            <Sidebar />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

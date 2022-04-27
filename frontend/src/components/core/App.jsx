import * as react from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  Link,
  Grid,
  GridItem,
  AlertDescription,
  Container,
  Center,
} from "@chakra-ui/react";
import { Navbar } from "./Navbar";

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
            <SkinRutine />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

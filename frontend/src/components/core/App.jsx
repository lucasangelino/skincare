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

export function App() {
  return (
    <>
      <Navbar />
      <Container maxW="8xl" marginTop={5}>
        <Grid
          h="200px"
          templateColumns="repeat(4, 1fr)"
          height={"100vh"}
          gap={4}
        >
          <GridItem colSpan={3}>
            <Center>
              <Box
                bgGradient={"linear-gradient(160deg, #0faee1 0%, #7c0ee1 100%)"}
                width={"4xl"}
                borderRadius={15}
                padding={4}
              >
                <Heading as="h1" size="lg" isTruncated>
                  Busca productos nuevos
                </Heading>
                <Heading as="h2" size="sm" isTruncated>
                  y su compatibilidad{" "}
                </Heading>
                <Button mt={5}>Buscar</Button>
              </Box>
            </Center>
            <Box bgColor="blue.500">sdfsdfsdfdsfd</Box>
          </GridItem>
          <GridItem colSpan={1}></GridItem>
        </Grid>
      </Container>
    </>
  );
}

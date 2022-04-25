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
  AlertDescription,
} from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bgGradient="linear(to-l, #000428, #004e92)"
      ></Flex>
    </>
  );
}

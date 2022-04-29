import * as React from "react";
import {
  Grid,
  GridItem,
  Container,
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Form from "../components/framework/Form";

export function ProductsCompatibility() {
  const handleSubmit = React.useCallback(() => {
    console.log("submit");
  }, []);

  return (
    <>
      <Box bgColor={"#323641"} borderRadius={10} padding={5} h={500}>
        <HStack direction={"row"} justifyContent="center">
          <Form onSubmit={handleSubmit} />
        </HStack>
      </Box>
    </>
  );
}

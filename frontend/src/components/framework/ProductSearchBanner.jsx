import React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ProductsSearchBanner() {
  return (
    <Box bgColor={"blue.400"} height="100%" padding={5} borderRadius={10}>
      <VStack align={"left"}>
        <Heading size="lg" color="#fff" marginBottom={20}>
          Sabías que no puedes mezclar algunos productos en tus rutinas?
        </Heading>
        <RouterLink to="/productsCompatibility">
          <Button>Revisar compatibilidad</Button>
        </RouterLink>
      </VStack>
    </Box>
  );
}

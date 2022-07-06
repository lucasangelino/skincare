import React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ProductsSearchBanner() {
  return (
    <Box bgColor={"#E2AFBE"} height="100%" padding={5} borderRadius={10}>
      <VStack align={"left"}>
        <Heading size="lg" color="#000" marginBottom={20}>
          Enterate que productos puedes combinar
        </Heading>
        <RouterLink to="/productsCompatibility">
          <Button bgColor={"#d568a7"}>Revisar compatibilidad</Button>
        </RouterLink>
      </VStack>
    </Box>
  );
}

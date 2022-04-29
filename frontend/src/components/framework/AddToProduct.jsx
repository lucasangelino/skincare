import * as React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Center,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function AddToProducts() {
  return (
    <Center>
      <Box
        bgGradient={"linear-gradient(160deg, #0faee1 0%, #7c0ee1 100%)"}
        width={"100%"}
        borderRadius={15}
        padding={4}
        marginBottom={5}
      >
        <HStack direction={"row"} justifyContent="space-between">
          <VStack direction={"column"} alignItems="left">
            <Heading as="h1" size="lg" isTruncated>
              Busca productos nuevos para tu rutina de piel
            </Heading>
            <Text fontSize="md" isTruncated>
              Aprende sobre compatibilidad de productos
            </Text>
            <Link to={`/products`} _hover={{ textDecoration: "none" }}>
              <Button mt={5}>Buscar</Button>
            </Link>
          </VStack>
          <Box boxSize="120px">
            <Image src="./pillBottle.png" alt="Buscar productos" />
          </Box>
        </HStack>
      </Box>
    </Center>
  );
}

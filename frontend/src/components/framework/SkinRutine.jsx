import * as React from "react";
import { Box, Button, Heading, Text, Link, Center } from "@chakra-ui/react";

export function SkinRutine() {
  return (
    <Center>
      <Box bgColor={"#323641"} borderRadius={15} padding={4} width="100%">
        <Text fontSize="xl" isTruncated>
          Mis Rutinas
        </Text>
        <Text fontSize="sm" isTruncated>
          Actualmente no dispones de rutinas
        </Text>
        <Link to={`/products`} _hover={{ textDecoration: "none" }}>
          <Button mt={5}>Crear rutina</Button>
        </Link>
      </Box>
    </Center>
  );
}

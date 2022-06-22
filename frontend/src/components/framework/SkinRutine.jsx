import * as React from "react";
import { Box, Button, Heading, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Link to={`/create-rutine`} _hover={{ textDecoration: "none" }}>
          {/* <Button mt={5}>Crear rutina</Button> */}
        </Link>
      </Box>
    </Center>
  );
}

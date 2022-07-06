import React from "react";
import { Text, Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const rutines = [
  {
    count: 1,
    title: "Limpieza de piel",
    description: "Limpieza de piel",
    image: "https://picsum.photos/id/1/200/300",
  },
];

export default function RutinesBanner() {
  return (
    <Box
      height={"100%"}
      padding={10}
      borderRadius={10}
      border={"1px solid #E2AFBE"}
      color={"#000"}
    >
      <Heading size={"lg"} color="#000">
        Mis rutinas
      </Heading>
      <Text fontSize={"md"} color="#000">
        Parece que no tienes rutinas creadas, ¿Quieres crear una?
      </Text>
      <Link to="/create-rutine">
        <Button
          variantColor={"teal"}
          size={"md"}
          marginTop={20}
          bgColor={"#E2AFBE"}
        >
          Crear Rutina
        </Button>
      </Link>
    </Box>
  );
}

import React from "react";
import { Text, Box, Heading, Button } from "@chakra-ui/react";

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
    <Box height={"100%"} padding={10} borderRadius={10} bgColor={"#3F444E"}>
      <Heading size={"md"} color="#fff">
        Mis rutinas
      </Heading>
      <Text fontSize={"md"} color="#fff">
        Parece que no tienes rutinas creadas, ¿Quieres crear una?
      </Text>
      <Button>Crear Rutina</Button>
    </Box>
  );
}

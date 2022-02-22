import * as React from "react";
import { Textarea } from "@chakra-ui/react";
import { Stack, HStack, VStack, Box, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

export default function ChatViewer() {
  return (
    <VStack justify={"space-between"} h={"100%"}>
      <Container maxW="container.md" resize={false}>
        <Box my={2} align="right">
          <Box bg={"blue.500"} maxW={"96"} rounded={"lg"} p={2}>
            <Text align={"start"}>Hola, como estas?</Text>
          </Box>
        </Box>
        <Box my={2}>
          <Box bg={"blue.500"} maxW={"96"} rounded={"lg"} p={2}>
            <Text align={"start"}>Todo bien y vos?</Text>
          </Box>
        </Box>
        <Box my={2}>
          <Box bg={"blue.500"} maxW={"96"} rounded={"lg"} p={2}>
            <Text align={"start"}>
              Bien, te queria hacer una consulta. En caso de que zarasa..
              entonces zarasa?
            </Text>
          </Box>
        </Box>
        <Box my={2} align="right">
          <Box bg={"blue.500"} maxW={"96"} rounded={"lg"} p={2}>
            <Text align={"start"}>Si, zarasa</Text>
          </Box>
        </Box>
      </Container>
      <Textarea placeholder="Here is a sample placeholder" />
    </VStack>
  );
}

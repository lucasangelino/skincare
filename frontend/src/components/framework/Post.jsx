import * as React from "react";
import {
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Center,
  Image,
  HStack,
  VStack,
  Wrap,
  WrapItem,
  Badge,
} from "@chakra-ui/react";

export function Post() {
  return (
    <Box bgColor={"#323641"} padding={5} borderRadius={10}>
      <HStack direction={"row"} justifyContent="space-between" gap={7}>
        <VStack direction={"column"} alignItems="left">
          <Text fontSize={"sm"} color="blue.200">
            Nuevo
          </Text>
          <Box>
            <Heading fontSize={"2xl"}>Como evitar la sequedad en</Heading>
            <Heading fontSize={"2xl"}>pieles sencibles</Heading>
          </Box>
          <Stack direction="row">
            <Text fontSize={"sm"} color="blue.200">
              #piel sencible
            </Text>
            <Text fontSize={"sm"} color="blue.200">
              #piel seca
            </Text>
            <Text fontSize={"sm"} color="blue.200">
              #hidratacion
            </Text>
          </Stack>
          <Button bgColor={"#0faee1"}>Leer</Button>
        </VStack>
        <Box boxSize="120px" bgColor={"#1A202C"} borderRadius={10}>
          <Image src="./pillBottle.png" alt="Dan Abramov" />
        </Box>
      </HStack>
    </Box>
  );
}

import * as React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Link,
  Center,
  Image,
} from "@chakra-ui/react";

export function SponsorBrand() {
  return (
    <Center marginTop={10}>
      <Box bgColor={"#323641"} borderRadius={15} padding={4} width="100%">
        <Text fontSize="xl" isTruncated marginBottom={5}>
          Patrocinador del mes
        </Text>
        <Image src="./pandg.png" alt="PandG Image" borderRadius={10} />
        <Text fontSize="lg" isTruncated>
          Procter & Gamble
        </Text>
        <Text fontSize="sm">
          también conocida como P&G es una empresa estadounidense multinacional
          de bienes de consumo con sede en Cincinnati, Estados Unidos.
        </Text>
        <Link to={`/products`} _hover={{ textDecoration: "none" }}>
          <Button mt={5}>Saber mas</Button>
        </Link>
      </Box>
    </Center>
  );
}

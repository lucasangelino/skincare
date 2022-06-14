import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Grid,
  GridItem,
  Text,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";

import ProductOfMonth from "./ProductOfMonth";

export default function ProductsOfMonth() {
  return (
    <Box
      bgGradient="linear-gradient(180deg, #111A51 0%, #2F5270 100%)"
      borderRadius={10}
      padding={4}
      maxW={{ base: "328px", sm: "100%" }}
    >
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={"repeat(6, 1fr)"}
        gap={2}
      >
        <GridItem colSpan={2} padding={5}>
          <Box height={"100%"}>
            <Heading size="xl" fontWeight={"light"} color="#fff">
              Descubre los mejores productos en nuestra tienda
            </Heading>
            <Button>Tienda</Button>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Box
            borderRadius={10}
            bgColor={"lightgray"}
            padding={1}
            height={"100%"}
          >
            <Image src="https://via.placeholder.com/100" />
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Box
            borderRadius={10}
            bgColor={"lightgray"}
            padding={1}
            height={"100%"}
          >
            <Text>producto 2</Text>
          </Box>
        </GridItem>
        <GridItem gridColumnStart={5} gridColumnEnd={6} gridRowStart={1}>
          <Box
            borderRadius={10}
            bgColor={"lightgray"}
            padding={1}
            height={"100%"}
          >
            <Text>producto 3</Text>
          </Box>
        </GridItem>
        <GridItem gridColumnStart={5} gridColumnEnd={6} gridRowStart={2}>
          <Box
            borderRadius={10}
            bgColor={"lightgray"}
            padding={1}
            height={"100%"}
          >
            <Text>producto 4</Text>
          </Box>
        </GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={7} gridRowStart={1}>
          <Box
            borderRadius={10}
            bgColor={"lightgray"}
            padding={1}
            height={"100%"}
          >
            <Text>producto 4</Text>
          </Box>
        </GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={7} gridRowStart={2}>
          <Box
            borderRadius={10}
            bgColor={"lightgray"}
            padding={1}
            height={"100%"}
          >
            <Text>producto 4</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

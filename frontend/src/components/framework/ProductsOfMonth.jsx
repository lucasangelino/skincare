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
import { Link as RouterLink } from "react-router-dom";

import ProductOfMonth from "./ProductOfMonth";

export default function ProductsOfMonth() {
  return (
    <Box
      bgGradient="linear-gradient(180deg, #E2AFBE 0%, #E5637F 100%)"
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
            <RouterLink to="/tienda">
              <Button>Tienda</Button>
            </RouterLink>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Box borderRadius={10} bgColor={"lightgray"} height={"417px"}>
            <Image
              src="store1.png"
              height={"100%"}
              objectFit="cover"
              alt="image1"
              borderRadius={10}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Box borderRadius={10} bgColor={"lightgray"} height={"417px"}>
            <Image
              src="store5.png"
              height={"100%"}
              objectFit="cover"
              alt="image1"
              borderRadius={10}
            />
          </Box>
        </GridItem>
        <GridItem gridColumnStart={5} gridColumnEnd={6} gridRowStart={1}>
          <Box borderRadius={10} bgColor={"lightgray"} height={"200px"}>
            <Image
              src="store2.jpg"
              height={"100%"}
              objectFit="cover"
              alt="image1"
              borderRadius={10}
            />
          </Box>
        </GridItem>
        <GridItem gridColumnStart={5} gridColumnEnd={6} gridRowStart={2}>
          <Box borderRadius={10} bgColor={"lightgray"} height={"200px"}>
            <Image
              src="store3.jpg"
              height={"100%"}
              objectFit="cover"
              alt="image1"
              borderRadius={10}
            />
          </Box>
        </GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={7} gridRowStart={1}>
          <Box borderRadius={10} bgColor={"lightgray"} height={"200px"}>
            <Image
              src="store4.jpg"
              height={"100%"}
              objectFit="cover"
              alt="image1"
              borderRadius={10}
            />
          </Box>
        </GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={7} gridRowStart={2}>
          <Box borderRadius={10} bgColor={"lightgray"} height={"200px"}>
            <Image
              src="store6.png"
              height={"100%"}
              objectFit="cover"
              alt="image1"
              borderRadius={10}
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

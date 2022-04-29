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

import { Post } from "./Post";

export function Foro() {
  return (
    <Box>
      <Text fontSize={"3xl"}>Foro</Text>
      <VStack direction={"column"} alignItems="left">
        <Wrap>
          <WrapItem>
            <Post />
          </WrapItem>
          <WrapItem>
            <Post />
          </WrapItem>
          <WrapItem>
            <Post />
          </WrapItem>
        </Wrap>
      </VStack>
    </Box>
  );
}

import * as React from "react";
import { Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Stack, HStack, VStack, StackDivider, Box } from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

import ChatItem from "../components/framework/ChatItem";
import ChatViewer from "../components/framework/ChatViewer";

export default function Chat() {
  return (
    <Container maxW="container.xl" bg={"#111B21"} h={"100vh"}>
      <Grid
        h="100vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
      >
        <GridItem colSpan={1}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            align="stretch"
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <ChatItem index={index} />
            ))}
          </VStack>
        </GridItem>
        <GridItem colSpan={2}>
          <ChatViewer />
        </GridItem>
      </Grid>
    </Container>
  );
}

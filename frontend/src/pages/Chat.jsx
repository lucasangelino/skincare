import * as React from "react";
import { Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Stack, HStack, VStack, StackDivider, Box } from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

import ChatItem from "../components/framework/ChatItem";
import ChatViewer from "../components/framework/ChatViewer";
import NoSelectedChat from "../components/framework/NoSelectedChat";

import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";

export default function Chat() {
  const { auth, logout } = React.useContext(AuthContext);
  const { chatState } = React.useContext(ChatContext);
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ color: "white" }}>{auth.name}</h1>
              <h1 style={{ color: "white" }} onClick={logout}>
                Salir
              </h1>
            </div>
            {chatState.users
              .filter((user) => user.id !== auth.uid)
              .map((user) => (
                <ChatItem key={user.id} user={user} />
              ))}
          </VStack>
        </GridItem>
        <GridItem colSpan={2}>
          {true ? <ChatViewer /> : <NoSelectedChat />}
        </GridItem>
      </Grid>
    </Container>
  );
}

import * as React from "react";
import { Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Stack,
  HStack,
  VStack,
  StackDivider,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  List,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

// Context
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";

// UI Components
import ChatItem from "../components/framework/ChatItem";
import ChatViewer from "../components/framework/ChatViewer";
import NoSelectedChat from "../components/framework/NoSelectedChat";
import { SearchBox } from "../components/core/SearchBox";
import { Navbar } from "../components/core/Navbar";
import { Banner } from "../components/core/Banner";

export default function Chat() {
  const { auth, logout } = React.useContext(AuthContext);
  const { chatState } = React.useContext(ChatContext);
  return (
    <Box bg="#0A1014" height={"100vh"} display={"flex"} alignItems={"center"}>
      <Container
        maxW="container.xl"
        bg={"#111B21"}
        height={"95vh"}
        borderRadius={5}
        padding={0}
      >
        <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(3, 1fr)">
          {/* SearchBox */}
          <GridItem colSpan={1} height={"100vh"} borderRight={"1px"}>
            <Navbar />
            <Banner />
            <SearchBox />
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              align="stretch"
            >
              <Box p={2}>
                <List spacing={"1px"}>
                  {chatState.users
                    .filter((user) => user.id !== auth.uid)
                    .map((user) => (
                      <ChatItem key={user.id} user={user} />
                    ))}
                </List>
              </Box>
            </VStack>
          </GridItem>
          <GridItem colSpan={2} height={"100vh"}>
            {chatState.activeChat ? <ChatViewer /> : <NoSelectedChat />}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

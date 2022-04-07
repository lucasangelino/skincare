import * as React from "react";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Text,
  Input,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Message } from "../framework/Message";
import { SocketContext } from "../../context/SocketContext";
import { AuthContext } from "../../auth/AuthContext";
import { ChatContext } from "../../context/chat/ChatContext";

export default function ChatViewer() {
  const [message, setMessage] = React.useState("");
  const { socket } = React.useContext(SocketContext);
  const { auth } = React.useContext(AuthContext);
  const { chatState } = React.useContext(ChatContext);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    if (message.length === 0) return;
    setMessage("");
    socket.emit("personal-message", {
      from: auth.uid,
      to: chatState.activeChat,
      message,
    });
  };

  return (
    <>
      <Box bg={"#272D38"}>
        <HStack justifyContent={"space-between"} p={2}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Avatar
              size="md"
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
            />
            <Text fontSize={"lg"} color={"gray.300"} marginLeft={3}>
              Lucas
            </Text>
          </Box>
        </HStack>
      </Box>
      <VStack justify={"space-between"} h={"100%"}>
        <Container maxW="container.md" resize={false}>
          {chatState.messages.map((message) => {
            return <Message message={message} key={message._id} />;
          })}
        </Container>
        <Button onClick={handleClick}>Enviar</Button>
        <Input
          value={message}
          name="message"
          color="#fff"
          placeholder="large size"
          size="lg"
          onChange={handleChange}
        />
      </VStack>
    </>
  );
}

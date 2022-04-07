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
  InputGroup,
  InputRightElement,
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
            <Avatar name="Am L" src="https://bit.ly/broken-link" />
            <Text fontSize={"lg"} color={"gray.300"} marginLeft={3}>
              Lucas
            </Text>
          </Box>
        </HStack>
      </Box>
      <VStack justify={"space-between"} height={"88vh"}>
        <Container
          maxW="container.md"
          resize={false}
          overflow={"scroll"}
          overflowX={false}
          sx={{
            "&::-webkit-scrollbar": {
              width: "4px",
              borderRadius: "8px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `gray.500`,
            },
          }}
        >
          {chatState.messages.map((message) => {
            return <Message message={message} key={message._id} />;
          })}
        </Container>
        <InputGroup size="md">
          <Input
            value={message}
            name="message"
            pr="4.5rem"
            type={"text"}
            placeholder="Write something..."
            onChange={handleChange}
            border={0}
            bg={"#272D38"}
            borderRadius={0}
            color={"gray.300"}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              bg={"#4B00E0"}
              color={"gray.300"}
              onClick={handleClick}
            >
              Send
            </Button>
          </InputRightElement>
        </InputGroup>
      </VStack>
    </>
  );
}

import * as React from "react";
import { Stack, HStack, VStack, StackDivider, Box } from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { ChatContext } from "../../context/chat/ChatContext";
import { types } from "../../types/types";
import { AuthRequest } from "../../helpers/fetch";

export default function ChatItem({ user }) {
  const { chatState, dispatch } = React.useContext(ChatContext);

  const handleClick = async () => {
    dispatch({ type: types.ACTIVATE_CHAT, payload: user.id });
    const messages = await AuthRequest(`messages/${user.id}`);
    dispatch({ type: types.SET_MESSAGES, payload: messages.last30Messages });
  };

  return (
    <Box
      h="72px"
      bg={chatState.activeChat === user.id ? "blue.500" : "gray.500"}
      _hover={{
        bg: "gray.800",
        cursor: "pointer",
      }}
      color="white"
      onClick={handleClick}
    >
      <HStack justify={"space-between"} align="center" p={2}>
        <HStack align="center">
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <VStack align="left">
            <Box>{user.name}</Box>
            <Box>{user.online ? "Online" : "Offline"}</Box>
          </VStack>
        </HStack>
        <Box h="40px" w="40px">
          22:54
        </Box>
      </HStack>
    </Box>
  );
}

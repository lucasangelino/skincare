import * as React from "react";
import { Stack, HStack, VStack, StackDivider, Box } from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

export default function ChatItem({ user }) {
  console.log(user);
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Box
      h="72px"
      bg={"#111B21"}
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

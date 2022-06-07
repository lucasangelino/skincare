import * as React from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AuthContext } from "../../context/auth/AuthContext";

const NavLink = ({ children, to }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    color='#fff'
    fontWeight={500}
    href={to}
  >
    {children}
  </Link>
);

export function Navbar() {
  const { logout } = React.useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    <Box padding={3}>
      <Box bg={useColorModeValue("#5357CE", "#5357CE")} px={4} borderRadius={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <NavLink to='/'>Inicio</NavLink>
          <NavLink to='/mirutina'>Mis Rutinas</NavLink>
          <NavLink to='/tienda'>Tienda</NavLink>
          <NavLink to='/productsCompatibility'>Compatibilidad</NavLink>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Profile</MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      </Box>
    </>
  );
}

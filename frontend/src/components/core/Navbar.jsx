import * as React from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Collapse,
  Center,
  useDisclosure,
  IconButton,
  HStack,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AuthContext } from "../../context/auth/AuthContext";

const NavLink = ({ children, to }) => (
  <RouterLink to={to}>
    <Text fontSize="md" fontWeight="bold" color={"#000"} paddingX={10}>
      {children}
    </Text>
  </RouterLink>
);

const Links = ["inicio", "Projects", "Team"];

export function Navbar() {
  const { logout } = React.useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box padding={3}>
        <Box px={4} bg={"#E2AFBE"} borderRadius={10}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Box>
              <Image src='../../../public/skincare-logo.png' alt='Logo' />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Box display={"flex"}>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/create-rutine">Rutinas</NavLink>
                <NavLink to="/tienda">Tienda</NavLink>
                <NavLink to="/productsCompatibility">Compatibilidad</NavLink>
              </Box>
            </HStack>
            <Flex alignItems={"center"}>
              <Button onClick={toggleColorMode} marginRight={5}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}{" "}
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
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Mi Rutina</MenuItem>
                  <MenuItem>Compatibilidad</MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Button onClick={logout}>Cerrar Sesión</Button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
}

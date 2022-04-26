import * as React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  HStack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  Link,
  AlertDescription,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

export default function Login() {
  const { login } = React.useContext(AuthContext);

  const [hasErrors, setHasErrors] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    remember: true,
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    setHasErrors(false);
  };

  const handleCheckboxChange = ({ target }) => {
    setForm({ ...form, remember: !form.remember });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.remember) {
      localStorage.setItem("email", form.email);
    } else {
      localStorage.removeItem("email");
    }
    const loggedIn = await login(form.email, form.password);
    if (!loggedIn) {
      setHasErrors(true);
    }
  };

  React.useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setForm((form) => ({ ...form, email }));
    }
  }, []);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgGradient="linear(to-l, #000428, #004e92)"
    >
      {/* <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        bgColor={"blackAlpha.800"}
      ></Stack> */}
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"#fff"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            If you want to see more check our{" "}
            <Link color={"blue.600"}>page</Link>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            // TODO: Check form submission
            <FormControl onSubmit={handleSubmit}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <RouterLink to="/auth/recover" color={"blue.400"}>
                    Forgot password?
                  </RouterLink>
                  <Text align={"center"}>
                    Don't have account?{" "}
                    <RouterLink to="/auth/register" color={"blue.400"}>
                      Register
                    </RouterLink>
                  </Text>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                  disabled={false}
                >
                  Sign in
                </Button>
              </Stack>
            </FormControl>
          </Stack>
        </Box>
        {hasErrors && (
          <Alert status="error" variant="solid">
            <AlertIcon />
            User or email is incorrect
          </Alert>
        )}
      </Stack>
    </Flex>
  );
}

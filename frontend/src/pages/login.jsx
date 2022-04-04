import * as React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { AuthContext } from "../auth/AuthContext";

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
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link>
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
                  <Checkbox
                    id="remember"
                    name="remember"
                    checked={form.remember}
                    readOnly
                    onChange={handleCheckboxChange}
                  >
                    Remember me
                  </Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
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

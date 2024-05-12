import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form action="">
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading textAlign={"center"}>Welcome Back</Heading>
          <Input
            name="username"
            type="email"
            placeholder="email"
            required
            focusBorderColor={"cyan.800"}
          />

          <Input
            type="password"
            placeholder="password"
            name="password"
            required
            focusBorderColor={"cyan.800"}
          />
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgot password"}>Forgot password</Link>
          </Button>

          <Button colorScheme="cyan" type="submit">
            Log in
          </Button>

          <Text textAlign={"right"}>
            New user ?{" "}
            <Button variant={"link"} colorScheme="cyan">
              <Link to={"/signup"}>Sign up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;

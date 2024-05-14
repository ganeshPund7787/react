import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDropup, IoMdHelpCircle } from "react-icons/io";

const ChatBot = () => {
  return (
    <Container h={["80vh", "100vh"]} minW={"full"}>
      <HStack justifyContent={"center"} h={"20vh"}>
        <Heading display={"flex"} fontSize={"30"} color={"cyan"}>
          Ask Any Dout
        </Heading>
        <IoMdHelpCircle color="cyan" size={"30"} />
      </HStack>
      <VStack justifyContent={"end"} h={["60vh", "80vh"]}>
        <form action="">
          <HStack m={"10"}>
            <Input
              width={["70vw", "50vw"]}
              outline={"none"}
              type="text"
              required
              placeholder="Ask Anything...."
              pos={"sticky"}
              bottom={"0"}
              left={"0"}
            />
            <Button>
              <IoIosArrowDropup size={"30"} />
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default ChatBot;

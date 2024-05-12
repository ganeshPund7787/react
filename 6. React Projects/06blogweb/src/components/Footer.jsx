import {
  Box,
  HStack,
  Button,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack w={"full"} mt={["8", "0"]}>
          <Heading textTransform={"uppercase"} size={"md"}>
            Social media
          </Heading>
          <HStack mt={"3"}>
            <Button variant={"link"} colorScheme="cyan">
              <a target="blank" href="https://github.com/ganeshpund7787">
                <FaGithub size={30} />
              </a>
            </Button>

            <Button variant={"link"} colorScheme="cyan">
              <a target="blank" href="https://linkdin.com/ganeshpund">
                <FaLinkedin size={30} />
              </a>
            </Button>

            <Button variant={"link"} colorScheme="cyan">
              <a
                target="blank"
                href="https://twitter.com/Ganesh_Pund09?t=8T5g2bFz1WDOh3VyW-Juqg&s=08"
              >
                <FaTwitter size={30} />
              </a>
            </Button>

            <Button variant={"link"} colorScheme="cyan">
              <a target="blank" href="https://twiter.com/ganeshpund7787">
                <FaFacebook size={30} />
              </a>
            </Button>
            <Button variant={"link"} colorScheme="cyan">
              <a target="blank" href="https://twiter.com/ganeshpund7787">
                <FaInstagram size={30} />
              </a>
            </Button>
          </HStack>
        </VStack>

        <VStack
          mt={["8", "0"]}
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading textTransform={"uppercase"} textAlign={"center"}>
            MasterAI
          </Heading>
          <Text>All rights receive</Text>
        </VStack>

        <VStack alignItems={"stretch"} w={"full"} px={"4"} mt={["8", "0"]}>
          <Heading
            size={"sm"}
            textTransform={"uppercase"}
            textAlign={['"center"', "left"]}
          >
            join to get updates
          </Heading>

          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              placeholder="Enter email here.."
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
            />
            <Button
              p={"0"}
              colorScheme="cyan"
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={25} />
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

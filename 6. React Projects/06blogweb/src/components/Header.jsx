import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        zIndex={"overlay"}
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="cyan"
        p={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>MasterAI</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"ghost"} colorScheme="cyan">
                <Link to={"/"}>Home</Link>
              </Button>

              <Button onClick={onClose} variant={"ghost"} colorScheme="cyan">
                <Link to={"/videos"}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={"ghost"} colorScheme="cyan">
                <Link to={"/videos?category=free"}>free videos</Link>
              </Button>

              <Button onClick={onClose} variant={"ghost"} colorScheme="cyan">
                <Link to={"/upload"}>upload video</Link>
              </Button>
            </VStack>

            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              w={"full"}
              justifyContent={"space-evenly"}
            >
              <Button onClick={onClose} colorScheme={"cyan"}>
                <Link to={"/login"}>log in</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={"cyan"}
                variant={"outline"}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

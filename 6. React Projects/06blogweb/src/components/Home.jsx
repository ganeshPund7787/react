import {
  Box,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/one.jpg";
import img2 from "../assets/two.jpg";
import img3 from "../assets/three.jpg";
import img4 from "../assets/four.jpg";
import img5 from "../assets/five.jpg";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "25%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  padding: "4",
  size: "3xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h={"full"}
          p={"2"}
          mt={["5", "20"]}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "7"]}
            textAlign={"center"}
          >
            Unlock the power of AI with our cutting-edge services. From natural
            language processing to computer vision, our expert team crafts
            tailored solutions to optimize your business processes. Experience
            seamless integration and transformative results. Elevate your
            operations with our AI services today
          </Text>
          <Img src={img5} h={["40", "400"]} rounded={"1rem"} />
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={"full"} h={"100vh"}>
        <img src={img1} height={"100vh"} width={"100vw"} />
        <Heading
          bg={"blackAlpha.600"}
          fontSize={["15", "50"]}
          color={"white"}
          {...headingOptions}
        >
          Watch The future
        </Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <img src={img3} alt="auto" />
        <Heading
          bg={"whiteAlpha.600"}
          fontSize={["15", "50"]}
          color={"black"}
          {...headingOptions}
        >
          AI is The future
        </Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <img src={img2} alt="auto" />
        <Heading
          bg={"blackAlpha.600"}
          fontSize={["15", "50"]}
          color={"white"}
          {...headingOptions}
        >
          Best AI coach
        </Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <img src={img4} alt="auto" />
        <Heading
          bg={"blackAlpha.800"}
          fontSize={["15", "50"]}
          color={"white"}
          {...headingOptions}
        >
          connect with AI 👁️
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;

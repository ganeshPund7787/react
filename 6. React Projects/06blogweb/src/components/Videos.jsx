import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { videosArr, desc } from "./Data.js";

const Videos = () => {
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  const [idx, setIdx] = useState(0);
  console.log(idx);
  return (
    <Stack
      direction={["column", "row"]}
      h={"100vh"}
      mt={["20", "20"]}
      borderTop={"2px solid gray"}
    >
      <VStack border={"1px solid gray"} w={"full"}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: "100%" }}
        ></video>

        <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"}>
          <Heading>{desc[idx].heading}</Heading>
          <Text>{desc[idx].description}</Text>
        </VStack>
      </VStack>

      <VStack
        w={["full", "xl"]}
        alignItems={"stretch"}
        p={"8"}
        spacing={"8"}
        overflowY={"auto"}
      >
        <Heading textAlign={"center"}>All Videos</Heading>
        {videosArr.map((iteam, index) => (
          <Button
            key={index}
            my={"1"}
            py={"2"}
            variant={"ghost"}
            colorScheme="cyan"
            onClick={() => {
              setVideoSrc(iteam);
              setIdx(index);
            }}
          >
            Lecture {index}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;

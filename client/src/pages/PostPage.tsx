import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import avatar from "../assets/images/zuck-avatar.png";
import verified from "../assets/images/verified.png";
import { BsThreeDots } from "react-icons/bs";
import post1 from "../assets/images/post1.png";
import { useState } from "react";
import { Actions } from "../components/Actions";
import { Comment } from "../components/Comment";

export const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar name="Mark Zuckerberg" src={avatar} size={"md"} />
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src={verified} alt="verified" w={4} h={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let's talk about threads.</Text>

      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image w={"full"} src={post1} />
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {120 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>🤞</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post!</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      <Comment
        comment="Hey this looks great"
        createdAt="2d"
        likes={100}
        username="ngduogtruongvu"
        userAvatar=""
      />

      <Comment
        comment="OMG this is amazing"
        createdAt="2d"
        likes={45}
        username="phamtuyendz"
        userAvatar=""
      />

      <Comment
        comment="Wow, I love this!"
        createdAt="2d"
        likes={32}
        username="quynhnhu"
        userAvatar=""
      />
    </>
  );
};

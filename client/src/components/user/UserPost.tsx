import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import avatar from "../../assets/images/zuck-avatar.png";
import verified from "../../assets/images/verified.png";
import { Actions } from "../Actions";
import { useState } from "react";

interface UserPostProps {
  likes: number;
  replies: number;
  postImg: string | null;
  postTitle: string;
}

export const UserPost = ({
  likes,
  replies,
  postImg,
  postTitle,
}: UserPostProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <Link to={"/markzuckerberg/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar name="Mark Zuckerberg" src={avatar} size={"md"} />
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              top={0}
              left={"15px"}
              p={"2px"}
            />
            <Avatar
              size="xs"
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
              position={"absolute"}
              bottom={0}
              right={"-5px"}
              p={"2px"}
            />
            <Avatar
              size="xs"
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
              position={"absolute"}
              bottom={0}
              left={"4px"}
              p={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                markzuckerberg
              </Text>
              <Image src={verified} w={4} h={4} ml={1} />
            </Flex>

            <Flex gap={4} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots
                size={20}
                cursor={"pointer"}
                className="icon-container"
              />
            </Flex>
          </Flex>

          <Text fontSize={"sm"}>{postTitle}</Text>

          {postImg && (
            <Box
              borderRadius={6}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"gray.light"}
            >
              <Image src={postImg} w={"full"} />
            </Box>
          )}

          <Flex gap={3} my={1}>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>

          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize={"sm"}>
              {replies} replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize={"sm"}>
              {likes} likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

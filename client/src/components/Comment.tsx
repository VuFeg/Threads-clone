import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import avatar from "../assets/images/zuck-avatar.png";
import { BsThreeDots } from "react-icons/bs";
import { Actions } from "./Actions";

interface CommentProps {
  comment: string;
  createdAt: string;
  likes: number;
  username: string;
  userAvatar: string;
}

export const Comment = ({
  comment,
  createdAt,
  likes,
  username,
  userAvatar,
}: CommentProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar name={username} src={userAvatar} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {username}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                {createdAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          <Box marginLeft={"-8px"}>
            <Actions liked={liked} setLiked={setLiked} />
          </Box>
          <Text fontSize={"sm"} color={"gray.light"}>
            {likes + (liked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

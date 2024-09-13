import { Flex, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import darkLogo from "../assets/images/dark-logo.svg";
import lightLogo from "../assets/images/light-logo.svg";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justify={"center"} mt={6} mb={12}>
      <Image
        cursor={"pointer"}
        w={6}
        alt="logo"
        src={colorMode === "dark" ? lightLogo : darkLogo}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

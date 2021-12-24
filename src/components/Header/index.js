import { Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/images/rickyandmorty.png";
export const Header = () => {
  return (
    <>
      <Flex h="300px" justifyContent="center">
        <Image src={logo} w="600px" />
      </Flex>
    </>
  );
};

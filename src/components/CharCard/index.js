import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { CharModal } from "../CharModal";

export const CharCard = ({ character }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box transition="0.5s" _hover={{ transform: "scale(1.05)" }}>
        <VStack
          borderRadius="xl"
          shadow="xl"
          h="480px"
          justify-content="space-between"
          bg="white"
          color="black"
        >
          <Flex w="100%" justifyContent="center">
            <Image
              src={character.image}
              alt={character.name}
              w="100%"
              h="250px"
              alignSelf="center"
              borderTopRadius="xl"
            />
          </Flex>
          <VStack padding="10px" w="100%" fontSize="large">
            <HStack w="100%">
              <Heading fontSize="md">Nome:</Heading>
              <Text>{character.name}</Text>
            </HStack>
            <HStack w="100%">
              <Heading fontSize="md">Gênero:</Heading>
              <Text>{character.gender}</Text>
            </HStack>{" "}
            <HStack w="100%">
              <Heading fontSize="md">Espécie:</Heading>
              <Text>{character.species}</Text>
            </HStack>
          </VStack>
          <Box padding="20px">
            <Button
              w="200px"
              transition="0.5s"
              bg="#373F51"
              color="white"
              onClick={onOpen}
            >
              Mais Informações
            </Button>
          </Box>
        </VStack>
      </Box>
      <CharModal isOpen={isOpen} onClose={onClose} character={character} />
    </>
  );
};

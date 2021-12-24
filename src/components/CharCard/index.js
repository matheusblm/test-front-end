import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";

export const CharCard = ({ character }) => {
  return (
    <>
      <Box transition="0.5s" _hover={{ transform: "scale(1.05)" }}>
        <VStack
          borderRadius="xl"
          borderColor="white"
          borderWidth="1px"
          shadow="xl"
          h="500px"
          justify-content="space-between"
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
            <Text w="100%">Nome: {character.name}</Text>
            <Text w="100%">Gênero: {character.gender}</Text>
            <Text w="100%">Espécie: {character.species}</Text>
          </VStack>
          <Box padding="20px">
            <Button w="200px" transition="0.5s">
              Mais Informações
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

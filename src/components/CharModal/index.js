import {
  Button,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

export const CharModal = ({ onClose, isOpen, character }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading fontSize="2xl">{character.name}</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Image
                src={character.image}
                alt={character.name}
                borderRadius="10px"
              />

              <HStack w="100%">
                <Heading fontSize="md">Status:</Heading>
                <Text>{character.status}</Text>
              </HStack>

              <HStack w="100%">
                <Heading fontSize="md">Gênero:</Heading>
                <Text>{character.gender}</Text>
              </HStack>

              <HStack w="100%">
                <Heading fontSize="md">Espécie:</Heading>
                <Text>{character.species}</Text>
              </HStack>

              <HStack w="100%">
                <Heading fontSize="md">Tipo:</Heading>
                <Text>
                  {character.type === "" ? "Desconhecido" : character.type}
                </Text>
              </HStack>

              <HStack w="100%">
                <Heading fontSize="md">Planeta de origem:</Heading>
                <Text>{character.origin.name}</Text>
              </HStack>

              <HStack w="100%">
                <Heading fontSize="md">Localizaçao:</Heading>
                <Text>{character.location.name}</Text>
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              w="200px"
              transition="0.5s"
              bg="#373F51"
              color="white"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

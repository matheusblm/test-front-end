import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { CharCard } from "../CharCard";
import Loader from "react-loader-spinner";

export const List = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [link, setLink] = useState("https://rickandmortyapi.com/api/character");
  const [loading, setLoading] = useState(false);
  const nextPage = () => {
    fetch(link)
      .then((response) => response.json())
      .then(async (response) => {
        if (response.info.next) {
          await setLink(response.info.next);
        }
      })
      .catch((err) => console.log(err));
  };

  const previousPage = () => {
    fetch(link)
      .then((response) => response.json())
      .then(async (response) => {
        if (response.info.prev) {
          await setLink(response.info.prev);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    fetch(link)
      .then((response) => response.json())
      .then(async (response) => {
        await setCharactersList(response.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [link]);

  return (
    <>
      <Flex justifyContent="center" w="100%" padding="20px">
        <Box w="100%" maxW="1440px">
          {loading ? (
            <Box position="absolute" top="50%" left="50%">
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </Box>
          ) : (
            <SimpleGrid minChildWidth="250px" spacing="30px">
              {charactersList.map((character) => (
                <>
                  <CharCard character={character} />
                </>
              ))}
            </SimpleGrid>
          )}
          <Box mt="5">
            <Button onClick={previousPage}>Previous</Button>
            <Button onClick={nextPage}>Next</Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

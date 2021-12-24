import { Box, Button, Flex, Input, SimpleGrid } from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import { useEffect, useState } from "react";
import { CharCard } from "../CharCard";
import { FilterChar } from "../FilterChar";

export const List = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [charactersListFilter, setCharactersListFilter] = useState([]);
  const [link, setLink] = useState("https://rickandmortyapi.com/api/character");
  const [loading, setLoading] = useState(false);
  const [prevDisable, setPrevDisable] = useState(true);
  const [nextDisable, setNextDisable] = useState(false);
  console.log(charactersListFilter.length);
  const nextPage = () => {
    fetch(link)
      .then((response) => response.json())
      .then(async (response) => {
        if (response.info.next) {
          await setLink(response.info.next);
          setNextDisable(false);
          setPrevDisable(false);
        } else {
          setNextDisable(true);
        }
      });
  };

  const previousPage = () => {
    fetch(link)
      .then((response) => response.json())
      .then(async (response) => {
        if (response.info.prev) {
          await setLink(response.info.prev);
          setPrevDisable(false);
        } else {
          setPrevDisable(true);
        }
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(link)
      .then((response) => response.json())
      .then(async (response) => {
        await setCharactersList(response.results);
        setLoading(false);
      });
  }, [link]);

  return (
    <>
      <Flex justifyContent="center" w="100%" padding="20px">
        <Box w="100%" maxW="1440px">
          <FilterChar setCharactersListFilter={setCharactersListFilter} />
          {loading ? (
            <Box position="absolute" top="50%" left="50%">
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </Box>
          ) : charactersListFilter.length > 0 ? (
            <SimpleGrid minChildWidth="250px" spacing="30px">
              {charactersListFilter.map((character) => (
                <>
                  <CharCard character={character} />
                </>
              ))}
            </SimpleGrid>
          ) : (
            <>
              <SimpleGrid minChildWidth="250px" spacing="30px">
                {charactersList.map((character) => (
                  <>
                    <CharCard character={character} />
                  </>
                ))}
              </SimpleGrid>
              <Flex mt="5" justifyContent="center" gap="5%">
                <Button
                  w="200px"
                  bg="#42b4ca"
                  color="white"
                  _hover={{ bg: "#accb41" }}
                  onClick={() => previousPage()}
                  isDisabled={prevDisable ? true : false}
                >
                  Pagina Anterior
                </Button>
                <Button
                  w="200px"
                  transition="0.5s"
                  bg="#42b4ca"
                  color="white"
                  _hover={{ bg: "#accb41" }}
                  onClick={() => nextPage()}
                  isDisabled={nextDisable ? true : false}
                >
                  Proxima Pagina
                </Button>
              </Flex>
            </>
          )}
        </Box>
      </Flex>
    </>
  );
};

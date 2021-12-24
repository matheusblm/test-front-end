import { SearchIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

export const FilterChar = ({ setCharactersListFilter }) => {
  const [userInput, setUserInput] = useState("");
  const filterChar = async () => {
    const newUserInput = userInput.toLocaleLowerCase();
    fetch(`https://rickandmortyapi.com/api/character/?name=${newUserInput}`)
      .then((response) => response.json())
      .then((response) =>
        setCharactersListFilter(
          response.results.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          )
        )
      )
      .catch((err) => console.log(err));
  };
  const handleClick = () => {
    if (userInput.trim() !== "") {
      filterChar();
      setUserInput("");
    }
    setCharactersListFilter([]);
  };

  return (
    <>
      <InputGroup size="md" mb="50px">
        <Input
          variant="filled"
          pr="4.5rem"
          placeholder="Digite o nome da pesquisa"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          borderColor="#42b4ca"
          _focus={{ borderColor: "#accb41" }}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

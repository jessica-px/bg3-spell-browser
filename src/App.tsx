import "./styles.css";
import { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import { Stack, Box, Spinner } from "@chakra-ui/react";
import { SpellBrowser } from "./SpellBrowser/SpellBrowser";
import { CharacterPanel } from "./CharacterPanel/CharacterPanel";
import { CharacterDefinition } from "./types";
import { LOCAL_STORAGE_KEY } from "./constants";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<CharacterDefinition[]>([]);
  const [editingCharacterId, setEditingCharacterId] = useState("");

  useEffect(() => {
    // read character data from localStorage on first load, if present
    const loadedCharacters = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedData = loadedCharacters && JSON.parse(loadedCharacters);
    const hasJsonData =
      !!parsedData && Array.isArray(parsedData) && parsedData.length > 0;
    if (hasJsonData) {
      setCharacters(JSON.parse(loadedCharacters));
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // save character data to localStorage whenever it gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(characters));
    setIsLoading(false);
  }, [characters]);

  const updateCharacter = (id: string, newName: string, newIcon: string) => {
    // truncate to first full unicode char (emojis make this weird)
    const firstUnicodeChar = Array.from(newIcon)[0];
    const newCharacters = characters.map((char) =>
      char.id === id ? { ...char, name: newName, icon: firstUnicodeChar } : char
    );
    setCharacters(newCharacters);
  };

  const deleteCharacter = (id: string) => {
    setEditingCharacterId("");
    const newCharacters = characters.filter((char) => char.id !== id);
    setCharacters(newCharacters);
  };

  const toggleSpellForChar = (charId: string, toggledSpell: string) => {
    const newCharacters = characters.map((char: CharacterDefinition) => {
      if (char.id === charId) {
        const alreadyHasSpell = char.spells.includes(toggledSpell);
        const newSpellList = alreadyHasSpell
          ? char.spells.filter((spell) => spell !== toggledSpell)
          : [...char.spells, toggledSpell];
        return { ...char, spells: newSpellList };
      }
      return char;
    });
    setCharacters(newCharacters);
  };

  const createCharacter = () => {
    const newCharacter = {
      id: uuid4(),
      name: "New Character",
      icon: "🙂",
      spells: []
    };
    setCharacters([...characters, newCharacter]);
    return newCharacter;
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Stack direction="row" margin={4} gap={4}>
      <Box w={250}>
        <CharacterPanel
          characters={characters}
          editingCharacterId={editingCharacterId}
          setEditingCharacterId={setEditingCharacterId}
          updateCharacter={updateCharacter}
          deleteCharacter={deleteCharacter}
          createCharacter={createCharacter}
        />
      </Box>
      <Box w="100%">
        <SpellBrowser
          characters={characters}
          editingCharacterId={editingCharacterId}
          toggleSpellForChar={toggleSpellForChar}
        />
      </Box>
    </Stack>
  );
}

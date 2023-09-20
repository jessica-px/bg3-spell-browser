import { useEffect, useState } from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { CharacterDefinition } from "../types";
import { EditPanel } from "./components/EditPanel";
import { CharacterRow } from "./components/CharacterRow";

type CharacterPanelProps = {
  characters: CharacterDefinition[];
  editingCharacterId: string;
  setEditingCharacterId: (id: string) => void;
  updateCharacter: (id: string, newName: string, newIcon: string) => void;
  deleteCharacter: (id: string) => void;
  createCharacter: () => CharacterDefinition;
};

export const CharacterPanel = (props: CharacterPanelProps) => {
  const [editingCharacter, setEditingCharacter] = useState<
    CharacterDefinition
  >();

  const onClickNewCharacter = () => {
    const newChar = props.createCharacter();
    props.setEditingCharacterId(newChar.id);
  };

  useEffect(() => {
    const newEditingCharacter = props.characters.find(
      (char) => char.id === props.editingCharacterId
    );
    setEditingCharacter(newEditingCharacter);
  }, [props.editingCharacterId, props.characters]);

  const renderEditPanel = editingCharacter && (
    <EditPanel
      editingCharacter={editingCharacter}
      setEditingCharacterId={props.setEditingCharacterId}
      updateCharacter={(newName: string, newIcon: string) =>
        props.updateCharacter(editingCharacter.id, newName, newIcon)
      }
      deleteCharacter={() => {
        props.deleteCharacter(editingCharacter.id);
      }}
    />
  );

  const renderCharacterView = (
    <>
      {props.characters.map((char) => (
        <CharacterRow
          key={char.id}
          name={char.name}
          onClickEdit={() => props.setEditingCharacterId(char.id)}
        />
      ))}
      <Button w="100%" leftIcon={<AddIcon />} onClick={onClickNewCharacter}>
        New Character
      </Button>
    </>
  );

  const renderNewCharacterButton = (
    <Button w="100%" leftIcon={<AddIcon />} onClick={onClickNewCharacter}>
      New Character
    </Button>
  );

  return (
    <Box
      borderWidth="2px"
      borderRadius="5px"
      borderColor="gray.700"
      padding={2}
    >
      <Text
        textAlign="center"
        color="gray.400"
        fontWeight="bold"
        casing="uppercase"
        fontSize="small"
      >
        {!!editingCharacter ? "Editing" : "Characters"}
      </Text>
      {!!editingCharacter ? renderEditPanel : renderCharacterView}
    </Box>
  );
};

import { useState } from "react";
import { Input, Button, Text, Box, Stack } from "@chakra-ui/react";
import { DeleteIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { CharacterDefinition } from "../../types";
import { DeleteCharacterAlert } from "./DeleteCharacterAlert";

type EditPanelProps = {
  editingCharacter: CharacterDefinition;
  setEditingCharacterId: (id: string) => void;
  updateCharacter: (newName: string, newIcon: string) => void;
  deleteCharacter: (id: string) => void;
};

export const EditPanel = (props: EditPanelProps) => {
  const [currCharacterName, setCurrCharacterName] = useState(
    props.editingCharacter.name
  );
  const [currIcon, setCurrIcon] = useState(props.editingCharacter.icon); // <---- IMPLEMENT THIS
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  const onComplete = () => {
    props.updateCharacter(currCharacterName, currIcon);
    props.setEditingCharacterId("");
  };

  const onClickDelete = () => {
    setIsDeleteAlertOpen(false);
    props.deleteCharacter(props.editingCharacter.id);
  };

  return (
    <Stack gap={4}>
      <DeleteCharacterAlert
        characterName={props.editingCharacter.name}
        isOpen={isDeleteAlertOpen}
        onClose={() => setIsDeleteAlertOpen(false)}
        onDeleteCharacter={onClickDelete}
      />
      <Stack gap={1}>
        <Text color="gray.300">Name</Text>
        <Input
          placeholder="Name"
          value={currCharacterName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrCharacterName(e.target.value)
          }
        />
      </Stack>
      <Stack gap={1}>
        <Text color="gray.300">Emoji Icon</Text>
        <Input
          placeholder="Emoji"
          value={currIcon}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrIcon(e.target.value)
          }
        />
      </Stack>
      <Text>Select this character's spells using the table to the right.</Text>
      <Button
        colorScheme="red"
        leftIcon={<DeleteIcon />}
        onClick={() => setIsDeleteAlertOpen(true)}
        variant="outline"
        color="red.600"
      >
        Delete
      </Button>
      <Button leftIcon={<ArrowBackIcon />} onClick={onComplete}>
        Save Changes
      </Button>
    </Stack>
  );
};

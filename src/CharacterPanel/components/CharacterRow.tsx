import { Flex, Button, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

type CharacterRowProps = {
  name: string;
  onClickEdit: () => void;
};

export const CharacterRow = (props: CharacterRowProps) => {
  return (
    <Flex direction="row" gap={0} alignItems="center">
      <Text width="100%">{props.name}</Text>
      <Button onClick={props.onClickEdit} variant="ghost">
        <EditIcon />
      </Button>
    </Flex>
  );
};

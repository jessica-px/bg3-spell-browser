import { useRef } from "react";
import { Button } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from "@chakra-ui/react";

type DeleteCharacterAlertProps = {
  characterName: string;
  onDeleteCharacter: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
};

export const DeleteCharacterAlert = (props: DeleteCharacterAlertProps) => {
  const cancelRef = useRef();

  return (
    <>
      <AlertDialog
        isOpen={props.isOpen}
        leastDestructiveRef={cancelRef}
        onClose={props.onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {`Delete ${props.characterName}?`}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={props.onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => props.onDeleteCharacter()}
                ml={3}
              >
                Delete Character
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

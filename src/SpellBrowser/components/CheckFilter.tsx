import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { InputChoice } from "../../types";

type CheckGroupProps = {
  label: string;
  choices: InputChoice[];
  selectedValues: string[];
  handleChange: Function;
};

/** A checkbox group, for filtering with the Spell Table */
export const CheckFilter = (props: CheckGroupProps) => {
  const allChecked = props.choices.length === props.selectedValues.length;
  const isIndeterminate = props.selectedValues.some(Boolean) && !allChecked;

  const onToggle = (value: string) => {
    if (props.selectedValues.includes(value)) {
      const newValues = props.selectedValues.filter((v) => v !== value);
      props.handleChange(newValues);
    } else {
      const newValues = [...props.selectedValues, value];
      props.handleChange(newValues);
    }
  };

  const toggleAllChecked = () => {
    if (allChecked || isIndeterminate) {
      props.handleChange([]);
    } else {
      props.handleChange(props.choices.map((choice) => choice.value));
    }
  };

  return (
    <Stack direction={["column"]} alignItems="start">
      <Text fontWeight="semibold" casing="uppercase" color="gray.400">
        <Checkbox
          colorScheme="purple"
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={toggleAllChecked}
        >
          {props.label}
        </Checkbox>
      </Text>
      <Stack spacing={[1]} direction={["column"]} mt={1}>
        {props.choices.map((choice) => (
          <Checkbox
            isChecked={props.selectedValues.includes(choice.value)}
            onChange={() => onToggle(choice.value)}
            key={choice.value}
          >
            {choice.label}
          </Checkbox>
        ))}
      </Stack>
    </Stack>
  );
};

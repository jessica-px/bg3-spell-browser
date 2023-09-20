import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

type RadioGroupProps = {
  label: string;
  choices: readonly string[];
  selectedValue: string;
  handleChange: Function;
};

/** A radio input group for filtering on the SpellTable */
export const RadioFilter = (props: RadioGroupProps) => (
  <Stack direction={["column"]} alignItems="start">
    <Text fontWeight="semibold" casing="uppercase" color="gray.400">
      {props.label}
    </Text>
    <RadioGroup
      onChange={(value: string) => props.handleChange(value)}
      defaultValue={"Any"}
    >
      <Stack spacing={[1]} direction={["column"]} mt={1}>
        {props.choices.map((choice) => (
          <Radio value={choice} key={choice}>
            {choice}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  </Stack>
);

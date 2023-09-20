import { useState } from "react";
import {
  SpellDefinition,
  RadioChoice,
  InputDefinition,
  InputChoice
} from "../../types";
import { InputState } from "./types";
import { filterSpellsByInputValues } from "./filterSpellsByInputValues";

const formatInputState = (inputDefinitions: InputDefinition[]): InputState => {
  const inputState: InputState = {};
  inputDefinitions.forEach((def) => {
    const inputType = def.type;
    if (inputType === "radio") {
      inputState[def.key] = { type: inputType, value: "Any" };
    } else {
      inputState[def.key] = {
        type: inputType,
        values: def.choices.map((choice) => choice.value)
      };
    }
  });
  return inputState;
};

/** Controls input state for SpellBrowser and returns auto-filtered spells */
export const useFilterByInputs = (
  spells: SpellDefinition[],
  inputDefinitions: InputDefinition[],
  searchNameValue: string
) => {
  const [inputState, setInputState] = useState<InputState>(
    formatInputState(inputDefinitions)
  );

  const filteredSpellsByInput = filterSpellsByInputValues(spells, inputState);

  const handleRadioChange = (key: string, newValue: RadioChoice) => {
    const newData = { ...inputState[key], value: newValue };
    setInputState({ ...inputState, [key]: newData });
  };

  const handleCheckChange = (key: string, newValues: string[]) => {
    const newData = { ...inputState[key], values: newValues };
    setInputState({ ...inputState, [key]: newData });
  };

  const getHandleChange = (key: string) => {
    const inputValues = inputState[key];
    if (inputValues && inputValues.type === "radio") {
      return (newValue: RadioChoice) => handleRadioChange(key, newValue);
    } else {
      return (newValues: string[]) => handleCheckChange(key, newValues);
    }
  };

  const filteredSpells = filteredSpellsByInput.filter((spell) =>
    spell.name.toLowerCase().includes(searchNameValue.toLowerCase())
  );

  return { filteredSpells, inputState, getHandleChange };
};

import { InputState, InputStateValues } from "./types";
import { SpellDefinition } from "../../types";

const spellMatchesInputValue = (
  spell: SpellDefinition,
  inputValue: InputStateValues,
  key: keyof SpellDefinition
): boolean => {
  if (inputValue.type === "check") {
    // checkbox logic
    if (!Array.isArray(spell[key])) {
      // single value
      const spellValue = spell[key]?.toString() || "";
      return (
        // inputValue.values.length === 0 ||
        inputValue.values.some((value) => value === spellValue)
      );
    } else if (Array.isArray(spell[key])) {
      // multiple values
      const spellValues = spell[key] as string[];
      // if (inputValue.values.length === 0) {
      //   return true;
      // }
      const hasMatchingValue = inputValue.values.some((value) =>
        spellValues.includes(value)
      );
      return hasMatchingValue;
    }
    const spellValue = spell[key]?.toString();
    if (spellValue === undefined) {
      return false;
    }
    return (
      inputValue.values.length === 0 ||
      inputValue.values.some((value) => value === spellValue)
    );
  } else {
    // radio logic
    if (inputValue.value === "Any") {
      return true;
    }
    if (inputValue.value === "Yes") {
      return !!spell[key];
    } else {
      return !spell[key];
    }
  }
};

export const filterSpellsByInputValues = (
  spellList: SpellDefinition[],
  inputState: InputState
): SpellDefinition[] => {
  return spellList.filter((spell) => {
    const inputKeys = Object.keys(inputState);
    return inputKeys.every((key) =>
      spellMatchesInputValue(
        spell,
        inputState[key],
        key as keyof SpellDefinition
      )
    );
  });
};

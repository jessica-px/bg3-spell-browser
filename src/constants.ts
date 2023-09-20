import { CharacterDefinition, InputDefinition, Actions } from "./types";

export const ACTIONS = ["Action", "Bonus", "Reaction"] as const;

export const GET_ACTION_ICON = (action: Actions): string => {
  if (action === "Action") {
    return "🟢";
  } else if (action === "Bonus") {
    return "🔺";
  } else {
    return "✨";
  }
};

export const UTILITIES = [
  "Soft CC",
  "Hard CC",
  "Debuff",
  "Buff",
  "Heal",
  "Push/Pull",
  "Minion",
  "Non-Combat",
  "None"
] as const;

export const TARGETS = [
  "Self",
  "Single",
  "Multiple",
  "Upcast Mult.",
  "Terrain",
  "Other"
] as const;

export const SAVES = [
  "CHA",
  "CON",
  "DEX",
  "INT",
  "STR",
  "WIS",
  "None"
] as const;

export const RADIO_CHOICES = ["Any", "Yes", "No"] as const;

export const CLASSES = [
  "Bard",
  "Cleric",
  "Druid",
  "Paladin",
  "Ranger",
  "Sorcerer",
  "Warlock",
  "Wizard"
] as const;

export const SPELL_LEVELS = ["Cantrip", "1", "2", "3", "4", "5", "6"] as const;

export type SpellLevels = typeof SPELL_LEVELS[number];

const createChoicesFromStrings = (stringChoices: readonly string[]) => {
  return stringChoices.map((str) => ({
    value: str,
    label: str
  }));
};

export const getInputDefinitions = (
  characters: CharacterDefinition[]
): InputDefinition[] => [
  {
    key: "level",
    label: "Level",
    type: "check",
    choices: createChoicesFromStrings(SPELL_LEVELS)
  },
  {
    key: "concentration",
    label: "Con.",
    type: "radio",
    choices: RADIO_CHOICES
  },
  {
    key: "utility",
    label: "Utility",
    type: "check",
    choices: createChoicesFromStrings(UTILITIES)
  },
  {
    key: "target",
    label: "Target",
    type: "check",
    choices: createChoicesFromStrings(TARGETS)
  },
  {
    key: "save",
    label: "Save",
    type: "check",
    choices: createChoicesFromStrings(SAVES)
  },
  {
    key: "repeatSaves",
    label: "Repeat Saves",
    type: "radio",
    choices: RADIO_CHOICES
  },
  {
    key: "damage",
    label: "Damage",
    type: "radio",
    choices: RADIO_CHOICES
  },
  {
    key: "knownBy",
    label: "Known/Prepared",
    type: "check",
    choices: [
      { value: "None", label: "No one" },
      ...characters.map((char) => ({
        value: char.id,
        label: `${char.icon} ${char.name}`
      }))
    ]
  },
  {
    key: "classes",
    label: "Classes",
    type: "check",
    choices: createChoicesFromStrings(CLASSES)
  },
  {
    key: "action",
    label: "Action",
    type: "check",
    choices: ACTIONS.map((action) => ({
      value: action,
      label: `${GET_ACTION_ICON(action)} ${action}`
    }))
  }
];

export const TABLE_COLUMNS = [
  "name",
  "level",
  "con.",
  "utility",
  "target",
  "save",
  "repeat save",
  "duration",
  "damage",
  "action",
  "known",
  "classes"
] as const;

export const LOCAL_STORAGE_KEY = "characterSpellData";

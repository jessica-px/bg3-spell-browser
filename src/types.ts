import {
  ACTIONS,
  RADIO_CHOICES,
  SAVES,
  TARGETS,
  UTILITIES,
  SPELL_LEVELS,
  TABLE_COLUMNS
} from "./constants";

export type InputChoice = {
  value: string;
  label: string;
};

type CheckInputDefinition = {
  type: "check";
  key: string;
  label: string;
  choices: InputChoice[];
};

type RadioInputDefinition = {
  type: "radio";
  key: string;
  label: string;
  choices: readonly string[];
};

export type InputDefinition = RadioInputDefinition | CheckInputDefinition;

export type RadioChoice = typeof RADIO_CHOICES[number];

export type Save = typeof SAVES[number];

export type Target = typeof TARGETS[number];

export type Utility = typeof UTILITIES[number];

export type SpellLevel = typeof SPELL_LEVELS[number];

export type Actions = typeof ACTIONS[number];

export type SpellDefinition = {
  name: string;
  url: string;
  level: SpellLevel;
  utility: Utility;
  concentration: boolean;
  target: Target;
  save: Save;
  repeatSaves: boolean;
  description: string;
  duration: string;
  damage?: string;
  action: Actions;
  knownBy?: string[];
  classes: string[];
};

type TableColumnName = typeof TABLE_COLUMNS[number];

export type ColumnVisibility = { [property in TableColumnName]: boolean };

export type CharacterDefinition = {
  id: string;
  name: string;
  icon: string;
  spells: string[];
};

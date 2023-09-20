import { useState } from "react";
import { Box, Button, Stack, Checkbox, Input, Text } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { SpellDefinition, ColumnVisibility } from "./types";
import spellData from "../spellData";
import { useFilterByInputs } from "./useFilterByInputs/useFilterByInputs";
import { SpellTable } from "./components/SpellTable";
import { RadioFilter } from "./components/RadioFilter";
import { CheckFilter } from "./components/CheckFilter";
import { getInputDefinitions } from "../constants";
import { spellSort } from "./spellSort/spellSort";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor
} from "@chakra-ui/react";
import { CharacterDefinition } from "../types";
import { useEffect } from "react";

const INIT_COLUMN_VISIBILITY: ColumnVisibility = {
  name: true,
  level: true,
  "con.": true,
  utility: true,
  target: true,
  save: true,
  "repeat save": true,
  duration: true,
  damage: true,
  action: true,
  known: true,
  classes: false
};

type ColumnCheckboxesProps = {
  columnVisibility: ColumnVisibility;
  onToggleVisibleColumn: (colName: string, isChecked: boolean) => void;
};

const ColumnCheckboxes = (props: ColumnCheckboxesProps) => (
  <Stack margin={4}>
    {Object.keys(props.columnVisibility).map((colName) => {
      const isChecked = props.columnVisibility[colName];
      return (
        <Checkbox
          key={colName}
          isChecked={isChecked}
          onChange={() => props.onToggleVisibleColumn(colName, !isChecked)}
        >
          <Text casing="capitalize">{colName}</Text>
        </Checkbox>
      );
    })}
  </Stack>
);

type SpellBrowserProps = {
  characters: CharacterDefinition[];
  editingCharacterId: string;
  toggleSpellForChar: (charId: string, spellName: string) => void;
};

/** Renders the spell table and inputs used for filtering it */
export const SpellBrowser = (props: SpellBrowserProps) => {
  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>(
    INIT_COLUMN_VISIBILITY
  );
  const [searchNameValue, setSearchNameValue] = useState("");

  const parsedData: SpellDefinition[] = spellData.map((data: any) => {
    const knownByCharacters = props.characters
      .filter((char) => char.spells.includes(data.name))
      .map((char) => char.id);
    return {
      ...data,
      knownBy: knownByCharacters.length > 0 ? knownByCharacters : ["None"]
    };
  });

  const onToggleVisibleColumn = (colName: string, isChecked: boolean) => {
    const updatedColumnVisibility = {
      ...columnVisibility,
      [colName]: isChecked
    };
    setColumnVisibility(updatedColumnVisibility);
  };

  const inputDefinitions = getInputDefinitions(props.characters);

  const { filteredSpells, inputState, getHandleChange } = useFilterByInputs(
    parsedData,
    inputDefinitions,
    searchNameValue
  );

  const sortedSpells = spellSort(filteredSpells);

  return (
    <Stack>
      <Box
        height={300}
        overflowY="auto"
        borderWidth="2px"
        borderRadius="5px"
        borderColor="gray.700"
      >
        <SpellTable
          characters={props.characters}
          spellDefList={sortedSpells}
          columnVisibility={columnVisibility}
          editingCharacterId={props.editingCharacterId}
          toggleSpellForChar={props.toggleSpellForChar}
        />
      </Box>
      <Box display="flex" alignItems="space-between">
        <Input
          size="sm"
          placeholder="Spell Name"
          value={searchNameValue}
          onChange={(e: any) => setSearchNameValue(e.target.value)}
        />
        <Popover>
          <PopoverTrigger>
            <Button leftIcon={<ViewIcon />} size="sm">
              Visible Columns
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Visible Columns</PopoverHeader>
            <ColumnCheckboxes
              columnVisibility={columnVisibility}
              onToggleVisibleColumn={onToggleVisibleColumn}
            />
          </PopoverContent>
        </Popover>
      </Box>
      <Stack direction="row" spacing={8}>
        {inputDefinitions.map((inputDef) => {
          if (inputDef.type === "check") {
            return (
              <CheckFilter
                key={inputDef.key}
                label={inputDef.label}
                choices={inputDef.choices}
                selectedValues={inputState[inputDef.key].values}
                handleChange={getHandleChange(inputDef.key)}
              />
            );
          } else {
            return (
              <RadioFilter
                key={inputDef.key}
                label={inputDef.label}
                choices={inputDef.choices}
                selectedValue={inputState[inputDef.key].values}
                handleChange={getHandleChange(inputDef.key)}
              />
            );
          }
        })}
      </Stack>
    </Stack>
  );
};

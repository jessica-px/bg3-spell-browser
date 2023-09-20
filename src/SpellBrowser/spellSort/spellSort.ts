import { SpellDefinition } from "../../types";

/** Sorts a list of SpellData by level, then by name */
export const spellSort = (spellList: SpellDefinition[]): SpellDefinition[] => {
  return spellList.sort((a, b) => {
    // sort by level, treat cantrips as 0
    const aValue = a.level === "Cantrip" ? 0 : parseInt(a.level, 10);
    const bValue = b.level === "Cantrip" ? 0 : parseInt(b.level, 10);

    if (aValue !== bValue) {
      return aValue - bValue;
    }

    // if levels are equal, sort by name
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
};

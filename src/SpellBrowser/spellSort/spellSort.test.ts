import { spellSort } from "./spellSort";
import { SpellDefinition } from "../../types";

const generateDummySpell = (name: string, level: string) => {
  return { name, level } as SpellDefinition;
};

const DUMMY_SPELL_LIST: SpellDefinition[] = [
  generateDummySpell("Sleep", "1"),
  generateDummySpell("Mage Hand", "Cantrip"),
  generateDummySpell("Silence", "2"),
  generateDummySpell("Hold Person", "2"),
  generateDummySpell("Dissonant Whispers", "1"),
  generateDummySpell("Eldritch Blast", "Cantrip")
];

describe("spellSort", () => {
  const sortedSpells = spellSort(DUMMY_SPELL_LIST);

  it("sorts by level and name", () => {
    const names = sortedSpells.map((spell) => spell.name);
    expect(names).toStrictEqual([
      "Eldritch Blast",
      "Mage Hand",
      "Dissonant Whispers",
      "Sleep",
      "Hold Person",
      "Silence"
    ]);
  });
});

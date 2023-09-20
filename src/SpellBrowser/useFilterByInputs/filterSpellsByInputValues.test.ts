import { filterSpellsByInputValues } from "./filterSpellsByInputValues";
import { SpellDefinition } from "../../types";
import { InputState } from "./types";

const generateDummySpell = (
  name: string,
  level: string,
  concentration: boolean = false,
  knownBy: string[] = []
) => {
  return { name, level, concentration, knownBy } as SpellDefinition;
};

test("filterSpellsByInputValues()", () => {
  const spellList = [
    generateDummySpell("Sleep", "1", true, ["1"]),
    generateDummySpell("Silence", "2", false, ["1", "2"]),
    generateDummySpell("Slow", "3")
  ];

  describe("Radio values", () => {
    it("Radio input does nothing when value is 'Any'", () => {
      const inputState: InputState = {
        concentration: {
          type: "radio",
          value: "Any"
        }
      };
      const filteredSpells = filterSpellsByInputValues(spellList, inputState);
      expect(filteredSpells).toStrictEqual(spellList);
    });

    it("Radio input filters for 'true' when value is 'Yes'", () => {
      const inputState: InputState = {
        concentration: {
          type: "radio",
          value: "Yes"
        }
      };
      const filteredSpells = filterSpellsByInputValues(spellList, inputState);
      expect(filteredSpells.length).toEqual(1);
      expect(filteredSpells[0].name).toEqual("Sleep");
    });

    it("Radio input filters for 'false' when value is 'No'", () => {
      const inputState: InputState = {
        concentration: {
          type: "radio",
          value: "No"
        }
      };
      const filteredSpells = filterSpellsByInputValues(spellList, inputState);
      expect(filteredSpells.length).toEqual(2);
    });
  });

  describe("Checkbox values", () => {
    it("Checkbox input returns empty array when values are empty", () => {
      const inputState: InputState = {
        level: {
          type: "check",
          values: []
        }
      };
      const filteredSpells = filterSpellsByInputValues(spellList, inputState);
      expect(filteredSpells).toStrictEqual([]);
    });

    it("Checkbox input filters by multiple values", () => {
      const inputState: InputState = {
        level: {
          type: "check",
          values: ["1", "2"]
        }
      };
      const filteredSpells = filterSpellsByInputValues(spellList, inputState);
      expect(filteredSpells.length).toEqual(2);
      expect(filteredSpells[0].name).toEqual("Sleep");
      expect(filteredSpells[1].name).toEqual("Silence");
    });

    it("Checkbox inputs filters with single value", () => {
      const inputState: InputState = {
        knownBy: {
          type: "check",
          values: ["2"]
        }
      };
      const filteredSpells = filterSpellsByInputValues(spellList, inputState);

      expect(filteredSpells.length).toEqual(1);
      expect(filteredSpells[0].name).toEqual("Silence");
    });
  });
});

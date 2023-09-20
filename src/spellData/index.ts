import { cantrips } from "./cantrips";
import { level1Spells } from "./level1";
import { level2Spells } from "./level2";
import { level3Spells } from "./level3";

const allSpells = cantrips.concat(level1Spells, level2Spells, level3Spells);

export default allSpells;

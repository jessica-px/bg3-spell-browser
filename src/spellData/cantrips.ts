import { SpellDefinition } from "../types";

export const cantrips: SpellDefinition[] = [
  {
    name: "Bone Chill",
    url: "https://baldursgate3.wiki.fextralife.com/Bone+Chill",
    level: "Cantrip",
    classes: ["Warlock", "Sorcerer", "Wizard"],
    duration: "1 round",
    utility: "Debuff",
    target: "Single",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "1d8 Necrotic",
    description:
      "Prevent the target from healing until your next turn. An undead target receives Disadvantage on Attack Rolls.",
    action: "Action"
  },
  {
    name: "Eldritch Blast",
    url: "https://baldursgate3.wiki.fextralife.com/Eldritch+Blast",
    level: "Cantrip",
    classes: ["Warlock"],
    duration: "",
    utility: "Push/Pull",
    target: "Single",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "1d10 Force (+ CHA mod)",
    description:
      "Conjure 1 beam(s) of crackling energy. With Agonizing Blast, add CHA modifier to damage. With Repelling Blast, push target 4.5m away from you.",
    action: "Action"
  },
  {
    name: "Vicious Mockery",
    url: "https://baldursgate3.wiki.fextralife.com/Vicious+Mockery",
    level: "Cantrip",
    classes: ["Bard"],
    duration: "None",
    utility: "Debuff",
    target: "Single",
    concentration: false,
    save: "WIS",
    repeatSaves: false,
    action: "Action",
    description:
      "Insult a creature: it has Disadvantage on its next Attack Roll."
  }
];

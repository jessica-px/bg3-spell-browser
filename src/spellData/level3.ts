import { SpellDefinition } from "../types";

export const level3Spells: SpellDefinition[] = [
  {
    name: "Hypnotic Pattern",
    url: "https://baldursgate3.wiki.fextralife.com/Hypnotic+Pattern",
    duration: "2 rounds",
    level: "3",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    utility: "Hard CC",
    target: "Multiple",
    concentration: true,
    save: "WIS",
    repeatSaves: false,
    description:
      "Hypnotise creatures that can see the pattern. They cannot attack you. They cannot move or act. This spell can be cast while you are Silenced."
  },
  {
    name: "Slow",
    url: "https://www.dndbeyond.com/spells/slow",
    level: "3",
    classes: ["Sorcerer", "Wizard"],
    duration: "10 rounds",
    utility: "Soft CC",
    target: "Multiple",
    concentration: true,
    save: "WIS",
    repeatSaves: true,
    action: "Action",
    description:
      "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration. An affected target’s speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, and it can’t use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature’s abilities or magic items, it can’t make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn’t take effect until the creature’s next turn, and the creature must use its action on that turn to complete the spell. If it can’t, the spell is wasted. A creature affected by this spell makes another Wisdom saving throw at the end of its turn. On a successful save, the effect ends for it."
  },
  {
    name: "Plant Growth",
    url:
      "https://www.dndbeyond.com/spells/plant-growthhttps://baldursgate3.wiki.fextralife.com/Plant+Growth",
    level: "3",
    classes: ["Bard", "Druid", "Ranger"],
    duration: "10 rounds",
    utility: "Soft CC",
    target: "Multiple",
    concentration: false,
    save: "None",
    repeatSaves: false,
    action: "Action",
    description:
      "Make weeds burst from the ground and smother the area. Creatures moving through the weeds have their Movement Speed quartered."
  },
  {
    name: "Stinking Cloud",
    url: "https://baldursgate3.wiki.fextralife.com/Stinking+Cloud",
    level: "3",
    classes: ["Bard", "Sorcerer", "Wizard"],
    duration: "∞",
    utility: "None",
    target: "Terrain",
    concentration: true,
    save: "CON",
    repeatSaves: false,
    damage: "1d4 Poison per turn (from Poison Condition)",
    action: "Action",
    description:
      "Create a cloud of gas so nauseating it prevents creatures from taking actions."
  }
];

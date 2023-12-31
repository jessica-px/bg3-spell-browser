import { SpellDefinition } from "../types";

export const level2Spells: SpellDefinition[] = [
  {
    name: "Aid",
    url: "https://baldursgate3.wiki.fextralife.com/Aid",
    level: "2",
    classes: ["Cleric", "Paladin"],
    duration: "Until Long Rest",
    utility: "Heal",
    target: "Multiple",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "1d12 Lightning",
    description:
      "Heal your allies and increase their hit point maximum by 5 hit points.",
    action: "Action"
  },
  {
    name: "Arcane Lock",
    url: "https://baldursgate3.wiki.fextralife.com/Arcane+Lock",
    level: "2",
    classes: ["Wizard"],
    duration: "10 rounds",
    utility: "Non-Combat",
    target: "Other",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Close a door or container with a magical lock. It can no longer be lockpicked or opened with Knock.",
    action: "Action"
  },
  {
    name: "Barkskin",
    url: "https://baldursgate3.wiki.fextralife.com/Barkskin",
    level: "2",
    classes: ["Druid", "Ranger"],
    duration: "Until Long Rest",
    utility: "Buff",
    target: "Single",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Protect a creature from attacks: increase its Armour Class up to 16.",
    action: "Action"
  },
  {
    name: "Blindness",
    url: "https://baldursgate3.wiki.fextralife.com/Blindness",
    level: "2",
    classes: ["Bard", "Cleric", "Sorcerer", "Wizard"],
    duration: "10 rounds",
    utility: "Soft CC",
    target: "Upcast Mult.",
    concentration: false,
    save: "CON",
    repeatSaves: true,
    action: "Action",
    description:
      "Limit a foes sight range. It is easier to hit, and the creature will miss more often. Attack Rolls against it have Advantage and the foe attacks with Disadvantage."
  },
  {
    name: "Blur",
    url: "https://baldursgate3.wiki.fextralife.com/Blur",
    level: "2",
    classes: ["Sorcerer", "Wizard"],
    duration: "Until Long Rest",
    utility: "Buff",
    target: "Single",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Attackers have Disadvantage on Attack Rolls against you. Doesn't affect creatures that don't rely on sight or that can see through illusions.",
    action: "Action"
  },
  {
    name: "Branding Smite",
    url: "https://baldursgate3.wiki.fextralife.com/Branding+Smite",
    level: "2",
    classes: ["Paladin"],
    duration: "10 rounds",
    utility: "Debuff",
    target: "Single",
    concentration: true,
    save: "CON",
    repeatSaves: false,
    damage: "2d6 Radiant",
    description: "",
    action: "Bonus"
  },
  {
    name: "Calm Emotions",
    url: "https://baldursgate3.wiki.fextralife.com/Calm+Emotions",
    level: "2",
    classes: ["Bard", "Cleric"],
    duration: "10 rounds",
    utility: "Buff",
    target: "Multiple",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "",
    description: "Humanoids can't be Charmed, Frightened, or become enraged.",
    action: "Action"
  },
  {
    name: "Cloud of Daggers",
    url: "https://baldursgate3.wiki.fextralife.com/Cloud+of+Daggers",
    level: "2",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    duration: "10 rounds",
    utility: "None",
    target: "Terrain",
    concentration: true,
    save: "None",
    repeatSaves: false,
    description:
      "Conjure a cloud of spinning daggers that attack anyone inside.",
    damage: "4d4 Slashing",
    action: "Action"
  },
  {
    name: "Crown of Madness",
    url: "https://baldursgate3.wiki.fextralife.com/Crown+of+Madness",
    level: "2",
    classes: ["Bard", "Sorcerer", "Wizard", "Warlock"],
    duration: "3 rounds",
    utility: "Hard CC",
    target: "Single",
    concentration: true,
    save: "WIS",
    repeatSaves: false,
    damage: "",
    description:
      "Instill madness in a humanoid enemy, making them attack the creature closest to them (other than you), even if it's allied.",
    action: "Action"
  },
  {
    name: "Darkness",
    url: "https://baldursgate3.wiki.fextralife.com/Darkness",
    level: "2",
    classes: ["Sorcerer", "Wizard", "Warlock"],
    duration: "10 rounds",
    utility: "Soft CC",
    target: "Terrain",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Create a cloud of magical darkness that Heavily Obscures and Blinds creatures within. Creatures cannot make ranged attacks into or out of it.",
    action: "Action"
  },
  {
    name: "Darkvision",
    url: "https://baldursgate3.wiki.fextralife.com/Darkvision",
    level: "2",
    classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
    duration: "Until Long Rest",
    utility: "Buff",
    target: "Single",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Grant a creature the ability to see in the dark out to a range of 12m.",
    action: "Action"
  },
  {
    name: "Detect Thoughts",
    url: "https://baldursgate3.wiki.fextralife.com/Detect+Thoughts",
    level: "2",
    classes: ["Bard", "Sorcerer", "Wizard"],
    duration: "Until Long Rest",
    utility: "Non-Combat",
    target: "Self",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Focus your mind to read the thoughts of certain creatures while talking to them.",
    action: "Action"
  },
  {
    name: "Enhance Ability",
    url: "https://baldursgate3.wiki.fextralife.com/Enhance+Ability",
    level: "2",
    classes: ["Bard", "Cleric", "Druid", "Sorcerer"],
    duration: "",
    utility: "None",
    target: "Upcast Mult.",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Bestow a magical enhancement upon an ally. They gain Advantage on Ability Checks (NOT Saving Throws) with a chosen Ability.",
    action: "Action"
  },
  {
    name: "Enlarge - Reduce",
    url: "https://baldursgate3.wiki.fextralife.com/Enlarge+-+Reduce",
    level: "2",
    classes: ["Sorcerer", "Wizard"],
    duration: "?",
    utility: "Buff",
    target: "Self",
    concentration: true,
    save: "CON",
    repeatSaves: false,
    damage: "",
    description:
      "Make a creature larger or smaller to affect their weapon damage and Strength Checks and Saving Throws.",
    action: "Action"
  },
  {
    name: "Enthral",
    url: "https://baldursgate3.wiki.fextralife.com/Enthral",
    level: "2",
    classes: ["Bard", "Warlock"],
    duration: "10 rounds",
    utility: "Soft CC",
    target: "Single",
    concentration: false,
    save: "WIS",
    repeatSaves: false,
    damage: "",
    description:
      "Reduce a creature's peripheral vision and make it look at you.",
    action: "Action"
  },
  {
    name: "Flame Blade",
    url: "https://baldursgate3.wiki.fextralife.com/Flame+Blade",
    level: "2",
    classes: ["Druid"],
    duration: "10 rounds",
    utility: "Buff",
    target: "Self",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Conjure a flaming scimitar in your hand that deals 3~18 Fire damage and sheds bright light in a 3m radius and dim light in a 6m radius. The blade can be unequipped and equipped again, but has to stay on the spellcaster's person.",
    action: "Bonus"
  },
  {
    name: "Flaming Sphere",
    url: "https://baldursgate3.wiki.fextralife.com/Flaming+Sphere",
    level: "2",
    classes: ["Druid", "Wizard"],
    duration: "10 rounds",
    utility: "Minion",
    target: "Self",
    concentration: true,
    save: "DEX",
    repeatSaves: false,
    damage: "2d6 Fire",
    description:
      "Summon a flaming sphere that damages nearby enemies and objects. On Save: Targets still take half damage. You can move the sphere. It emits a bright light.",
    action: "Action"
  },
  {
    name: "Gust of Wind",
    url: "https://baldursgate3.wiki.fextralife.com/Gust+of+Wind",
    level: "2",
    classes: ["Druid", "Sorcerer", "Wizard"],
    duration: "",
    utility: "Push/Pull",
    target: "Multiple",
    concentration: false,
    save: "STR",
    repeatSaves: false,
    damage: "",
    description:
      "Summon a strong wind that clears all clouds and pushes creatures back 5m, forcing them Off Balance.",
    action: "Action"
  },
  {
    name: "Heat Metal",
    url: "https://baldursgate3.wiki.fextralife.com/Heat+Metal",
    level: "2",
    classes: ["Druid", "Bard"],
    duration: "10 rounds",
    utility: "Debuff",
    target: "Single",
    concentration: true,
    save: "CON",
    repeatSaves: false,
    damage: "2d8 Fire",
    description:
      "Cause a metal weapon or armour to glow red-hot and force the creature touching it to let go or receive Disadvantage on Attack Rolls and Ability Checks. If the creature is only wearing metal armour, it always receives Disadvantage. If the creature is still touching the metal, you can use a bonus action on subsequent turns to deal another 2~16 Fire damage and force the creature to let go or receive Disadvantage.",
    action: "Action"
  },
  {
    name: "Hold Person",
    url: "https://www.dndbeyond.com/spells/hold-person",
    level: "2",
    classes: ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
    duration: "10 rounds",
    utility: "Hard CC",
    target: "Upcast Mult.",
    concentration: true,
    save: "WIS",
    repeatSaves: true,
    action: "Action",
    description:
      "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
  },
  {
    name: "Invisibility",
    url: "https://baldursgate3.wiki.fextralife.com/Invisibility",
    level: "2",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    duration: "10 rounds",
    utility: "Buff",
    target: "Single",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Touch a creature to turn it Invisible. Attacks against it have Disadvantage. It attacks with Advantage. Invisibility breaks when you fail Stealth Checks on attacking, casting spells or interacting with items Condition ends early if the creature attacks or casts a spell.",
    action: "Action"
  },
  {
    name: "Knock",
    url: "https://baldursgate3.wiki.fextralife.com/Knock",
    level: "2",
    classes: ["Bard", "Sorcerer", "Wizard"],
    duration: "",
    utility: "Non-Combat",
    target: "Other",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "",
    description: "Unlock an object that is held shut by a mundane lock.",
    action: "Action"
  },
  {
    name: "Lesser Restoration",
    url: "https://baldursgate3.wiki.fextralife.com/Lesser+Restoration",
    level: "2",
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger"],
    duration: "None",
    utility: "Heal",
    target: "Single",
    concentration: false,
    save: "None",
    repeatSaves: false,
    action: "Action",
    description: "Cure a creature from disease, poison, paralysis or blindness."
  },
  {
    name: "Magic Weapon",
    url: "https://baldursgate3.wiki.fextralife.com/Magic+Weapon",
    level: "2",
    classes: ["Wizard", "Paladin"],
    duration: "Until Long Rest",
    utility: "Buff",
    target: "Self",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Infuse a weapon with arcane energy. The weapon becomes magical, receiving a +1 bonus to Attack and Damage Rolls.",
    action: "Action"
  },
  {
    name: "Melf's Acid Arrow",
    url: "https://baldursgate3.wiki.fextralife.com/Melf's+Acid+Arrow",
    level: "Cantrip",
    classes: ["Wizard"],
    duration: "",
    utility: "None",
    target: "Single",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "4d4 Acid + 2d4 Acid",
    description:
      "Shoot a green arrow that covers the target and the ground with acid. Deals 4~16 Acid damage immediately and 2~8 Acid damage at the end of the target's turn.",
    action: "Action"
  },
  {
    name: "Mirror Image",
    url: "https://baldursgate3.wiki.fextralife.com/Mirror+Image",
    level: "2",
    classes: ["Sorcerer", "Wizard", "Warlock"],
    duration: "10 rounds",
    utility: "Buff",
    target: "Self",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Create 3 illusory duplicates of yourself that distract attackers. Each duplicate increases your Armour Class by 3. Whenever you successfully evade an attack, one of the duplicates disappears.",
    action: "Action"
  },
  {
    name: "Misty Step",
    url: "https://baldursgate3.wiki.fextralife.com/Misty+Step",
    level: "2",
    classes: ["Sorcerer", "Wizard", "Warlock"],
    duration: "",
    utility: "Buff",
    target: "Self",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Surrounded by silver mist, you teleport to an unoccupied space you can see. Does not trigger attacks of opportunity.",
    action: "Bonus"
  },
  {
    name: "Moonbeam",
    url: "https://baldursgate3.wiki.fextralife.com/Moonbeam",
    level: "2",
    classes: ["Druid"],
    duration: "",
    utility: "None",
    target: "Terrain",
    concentration: true,
    save: "CON",
    repeatSaves: false,
    damage: "2d10 Radiant",
    description:
      "Call down a beam of light that damages any creature that enters the beam or starts its turn in the light. You can use an action to move the beam 18m.",
    action: "Action"
  },
  {
    name: "Pass without Trace",
    url: "https://baldursgate3.wiki.fextralife.com/Pass+without+Trace",
    level: "2",
    classes: ["Druid", "Ranger"],
    duration: "Until Long Rest",
    utility: "Buff",
    target: "Multiple",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Call forth a veil of shadows and silence that gives you and all nearby companions a +10 bonus to Stealth Checks.",
    action: "Action"
  },
  {
    name: "Phantasmal Force",
    url: "https://baldursgate3.wiki.fextralife.com/Phantasmal+Force",
    level: "2",
    classes: ["Bard", "Sorcerer", "Wizard"],
    duration: "",
    utility: "None",
    target: "Single",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "1d6 Pyschic (each turn)",
    description:
      "Deal damage to a creature each turn. The type of damage changes to the last type the creature suffered.",
    action: "Action"
  },
  {
    name: "Prayer of Healing",
    url: "https://baldursgate3.wiki.fextralife.com/Prayer+of+Healing",
    level: "2",
    classes: ["Cleric"],
    duration: "",
    utility: "Heal",
    target: "Multiple",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "2d8+3 Heal",
    description:
      "Heal all allies you can see. Can only be used outside of combat.",
    action: "Action"
  },
  {
    name: "Protection from Poison",
    url: "https://baldursgate3.wiki.fextralife.com/Protection+from+Poison",
    level: "2",
    classes: ["Cleric", "Druid", "Paladin", "Ranger"],
    duration: "Until Long Rest",
    utility: "Buff",
    target: "Single",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Touch a creature to neutralise all poisons affecting it, and grants it protection against poisonous influences. Grants Advantage on Saving Throws against being Poisoned, and grant it Resistance to Poison damage.",
    action: "Action"
  },
  {
    name: "Ray of Enfeeblement",
    url: "https://baldursgate3.wiki.fextralife.com/Ray+of+Enfeeblement",
    level: "2",
    classes: ["Warlock", "Wizard"],
    duration: "10 rounds",
    utility: "Debuff",
    target: "Single",
    concentration: false,
    save: "CON",
    repeatSaves: false,
    damage: "",
    description:
      "Weaken a foe: They deal half damage with weapon attacks using Strength.",
    action: "Action"
  },
  {
    name: "Scorching Ray",
    url: "https://baldursgate3.wiki.fextralife.com/Scorching+Ray",
    level: "2",
    classes: ["Sorcerer", "Wizard"],
    duration: "",
    utility: "None",
    target: "Multiple",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "6d6 Fire",
    description: "Hurl 3 rays of fire. Each ray deals 2∼12 Fire damage.",
    action: "Action"
  },
  {
    name: "Shatter",
    url: "https://baldursgate3.wiki.fextralife.com/Shatter",
    level: "2",
    classes: ["Sorcerer", "Wizard", "Bard", "Warlock"],
    duration: "",
    utility: "None",
    target: "Multiple",
    concentration: false,
    save: "CON",
    repeatSaves: false,
    damage: "2d8 Thunder",
    description:
      "Damages all nearby creatures and objects. Creatures made of inorganic material such as stone have Disadvantage on their Saving Throw. On Save: Targets still take half damage.",
    action: "Action"
  },
  {
    name: "Silence",
    url: "https://baldursgate3.wiki.fextralife.com/Silence",
    level: "2",
    classes: ["Bard", "Cleric", "Ranger"],
    duration: "100 rounds",
    utility: "Soft CC",
    target: "Multiple",
    concentration: false,
    save: "None",
    repeatSaves: false,
    action: "Action",
    description:
      "Create a sound-proof sphere. All within are Silenced and Immune to Thunder damage."
  },
  {
    name: "Spike Growth",
    url: "https://baldursgate3.wiki.fextralife.com/Spike+Growth",
    level: "2",
    classes: ["Druid", "Ranger"],
    duration: "100 rounds",
    utility: "Soft CC",
    target: "Terrain",
    concentration: true,
    save: "None",
    repeatSaves: false,
    damage: "2d4 Piercing",
    description:
      "Shape a piece of ground into hard spikes. Movement is halved. A creature walking on the spikes takes 2~8 Piercing damage for every 1.5m it moves.",
    action: "Action"
  },
  {
    name: "Spiritual Weapon",
    url: "https://baldursgate3.wiki.fextralife.com/Spiritual+Weapon",
    level: "2",
    classes: ["Cleric"],
    duration: "10 turns",
    utility: "Minion",
    target: "Other",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "1d8 Force",
    description:
      "Summon a floating, spectral weapon that attacks your enemies alongside you. Choose between several different weapons each with various Weapon Actions.",
    action: "Bonus"
  },
  {
    name: "Warding Bond",
    url: "https://baldursgate3.wiki.fextralife.com/Warding+Bond",
    level: "2",
    classes: ["Cleric"],
    duration: "Until Long Rest",
    utility: "Buff",
    target: "Single",
    concentration: false,
    save: "None",
    repeatSaves: false,
    damage: "",
    description:
      "Ward an ally. They gain Resistance to all damage, and a +1 bonus to their Armour Class and Saving Throws. Each time the warded creature takes damage, the spellcaster takes the same amount of damage.",
    action: "Action"
  },
  {
    name: "Web",
    url: "https://baldursgate3.wiki.fextralife.com/Web",
    level: "2",
    classes: ["Sorcerer", "Wizard"],
    duration: "10 rounds",
    utility: "Hard CC",
    target: "Terrain",
    concentration: true,
    save: "DEX",
    repeatSaves: true,
    damage: "",
    description:
      "Cover an area in thick, flammable webbing that slows creatures within and possibly Enwebs them. Enwebbed Status Effect: Cannot move. Attack rolls against you have advantage, while your attack rolls have disadvantage. You also have disadvantage on Dexterity saving throws.",
    action: "Action"
  }
];

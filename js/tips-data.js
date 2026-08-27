/* ==========================================================================
   TIPS & TRICKS DATA
   --------------------------------------------------------------------------
   The only file you edit to change the tips page. Same idea as
   roadmap-data.js: one plain array, no HTML, no logic. tips.html reads it
   on load.

   THE SHAPE

   TIPS is a list of SKILLS. Each skill is one card on the page and holds a
   list of POINTS. Each point is one bullet.

     {
       skill:  "Agility",           // the card heading
       points: [ ... ]
     }

   A point:

     {
       text: "Chop yews until 60."  // the bullet itself, and the only field
                                    // a point has
     }

   Every point renders in the same colour and weight. There is deliberately no
   way to make one line stand out from the others.

   Never put HTML in a text string. It is escaped, not parsed, so tags would
   show up literally on the page rather than doing anything.

   Nothing on this page is saved or ticked, so there are no ids to keep stable
   here. Add, delete and reorder freely.

   VOICE

   Second person, imperative. Say the level, the count, the item. Where you are
   not sure of something, say so in the line rather than stating it flat - a
   "probably" or a "maybe" is information, and it stops someone treating a
   guess as a fact.
   ========================================================================== */

const TIPS = [
  {
    skill: "Agility",
    points: [
      { text: "Collect all your agility tickets and marks of grace. Do not use the tickets yet." },
      { text: "Buy full graceful as soon as you can. It gives an xp boost while you are wearing it." },
      { text: "Gnome stronghold to 35. That is 22 laps without bonus xp." },
      { text: "Barbarian outpost to 48. That is 36 laps without bonus xp." },
      { text: "Ape atoll from there. Collect 500+ tickets, then use them all at once." },
      { text: "Have full graceful on and an xp book running before you trade the tickets in." }
    ]
  },

  {
    skill: "Herblore",
    points: [
      { text: "Do the early levels by buying guams from the summoning shop, cleaning them and making attack potions." },
      { text: "Keep up all your farm runs for herbs. Very important. Get your seeds from master farmers." },
      { text: "Slayer caskets drop herbs, and so do raids and maybe herb boxes." },
      { text: "Extreme potions are good to make, since you make two or three different types for the xp." }
    ]
  },

  {
    skill: "Thieving",
    points: [
      { text: "Dzone stall to 65 Thieving. That is 402 actions without bonus xp." },
      { text: "Master farmers until you get the rogue outfit. It gives bonus xp and double loot." },
      { text: "Elves at 85 Thieving for the best xp." }
    ]
  },

  {
    skill: "Crafting",
    points: [
      { text: "Complete Sheep Shearer for the Crafting xp, maybe." },
      { text: "Kill TzHaar-Mej for tokkul and buy unlimited gems from the shop." },
      { text: "Get karamja gloves before you start on the gems." }
    ]
  },

  {
    skill: "Fletching",
    points: [
      { text: "Make loads of arrow shafts." },
      { text: "Make loads of headless arrows." },
      { text: "All arrows are decent to make, all the way up to amethyst." }
    ]
  },

  {
    skill: "Hunter",
    points: [
      { text: "Birds to 29 Hunter, or do birdhouses instead." },
      { text: "Swamp lizards from 29 to 53." },
      { text: "Chinchompas to 63." },
      { text: "Red chinchompas from 77 up. Catch enough chins for the achievements while you are there." },
      { text: "Grenwalls to 99." }
    ]
  },

  {
    skill: "Mining",
    points: [
      { text: "Do the best ores you can until 60 to 70 Mining." },
      { text: "Always do stars when they appear. Very important." },
      { text: "You can probably get 99 through stars alone, or do living rock caverns if you would rather." }
    ]
  },

  {
    skill: "Smithing",
    points: [
      { text: "Blast furnace all the way to 99. Make sure you have your gloves." }
    ]
  },

  {
    skill: "Fishing",
    points: [
      { text: "Fish all the early stuff, then stay on trout and salmon until 62 Fishing." },
      { text: "Monkfish to 80." },
      { text: "Rocktails to 99, probably." }
    ]
  },

  {
    skill: "Cooking",
    points: [
      { text: "Cook all the raws you got from Fishing." },
      { text: "You can maybe buy grapes from the Lumbridge basement." }
    ]
  },

  {
    skill: "Firemaking",
    points: [
      { text: "Get 50 Firemaking doing Woodcutting at Seers." },
      { text: "From 50, go to Wintertodt for 99 Firemaking." }
    ]
  },

  {
    skill: "Woodcutting",
    points: [
      { text: "Evil trees are decent Woodcutting xp, and Farming xp on the side." },
      { text: "Otherwise you should have 60+ after 99 Firemaking, so go to the woodcutting guild and cut yews to 75 or 80." },
      { text: "Magics from 75 to 80, up to 90." },
      { text: "Redwoods to 99." }
    ]
  },

  {
    skill: "Farming",
    points: [
      { text: "Get all your seeds from evil trees." },
      { text: "High herbs give decent Farming xp." }
    ]
  },

  {
    skill: "Prayer",
    points: [
      { text: "The Restless Ghost should get you the protection prayers." },
      { text: "You can bank most of your Prayer through gauntlet, crystal keys, enhanced crystal keys, grubby keys and the like." },
      { text: "Kill things with ashes and use the ash sanctifier." },
      { text: "You can use the ash collector and the spell, if we have it on Elorin." }
    ]
  },

  {
    skill: "Runecrafting",
    points: [
      { text: "Pack yak is decent for Runecrafting." },
      { text: "Magic guild at Yanille is where you teleport for it." },
      { text: "If I remember rightly, the more runes you craft the more xp you gain, so air runes are best until the high 90s or 95, then souls, maybe bloods." }
    ]
  },

  {
    skill: "Construction",
    points: [
      { text: "Mahogany homes." },
      { text: "From 37 you can do lesser magical balance." },
      { text: "From 57 you can do medium balance." },
      { text: "From 77 you can do greater magical balance." },
      { text: "You can get planks from raids, crystal keys and the like." }
    ]
  },

  {
    skill: "Summoning",
    points: [
      { text: "Collect the charming imp from Dungeoneering." },
      { text: "Burst rock lobsters for all your charms." },
      { text: "Do the best you can all the way to 89." },
      { text: "Save all your blue charms for 89 to 99 and geyser titan pouches. That is the best xp." }
    ]
  },

  /* Left empty on purpose - replace the TBC point with the real ones. */
  {
    skill: "Miscellaneous",
    points: [
      { text: "TBC" }
    ]
  }
];

/* ==========================================================================
   ROADMAP DATA
   --------------------------------------------------------------------------
   This is the only file you edit to change the day one roadmap. There is no
   HTML to touch and no JavaScript logic in here - it is one plain array that
   index.html reads on load.

   THE SHAPE

   ROADMAP is a list of SECTIONS. Each section is one card on the page and
   holds a list of STEPS. Each step is one tickable row.

     {
       id:    "setup",              // see IDS below. Section ids are not saved
                                    // against, but keep them unique anyway.
       title: "Account setup",      // the card heading
       desc:  "One short line.",    // optional. Sits under the heading.
       steps: [ ... ]
     }

   A step:

     {
       id:    "tan-leather",        // STABLE. Progress is saved against this.
       text:  "Tan some leather",   // the tickable line itself
       note:  "One short line.",    // optional supporting detail, rendered
                                    // smaller and dimmer under the text.
                                    // Leave as "" if there is nothing to add.
       diary: ["easy"]              // achievement diary tiers this step also
                                    // completes. Any of:
                                    //   "easy", "medium", "hard", "elite",
                                    //   "master"
                                    // Use [] for a step that is not a diary
                                    // task. Each tier shows as a coloured chip
                                    // beside the step text.
     }

   Only tag a tier when the diary explicitly lists that task. The chip is a
   promise that ticking this row ticks that diary entry, so never infer one
   because a step looks like it ought to count - if the diary does not say it,
   leave the array empty.

   IDS - THE ONE RULE THAT MATTERS

   A step's id is the key its tick is saved under in the browser. So:

     - Adding a step         -> safe. Everyone keeps every other tick.
     - Deleting a step       -> safe. Everyone keeps every other tick.
     - Reordering steps      -> safe. Order is not part of the key.
     - Reordering sections   -> safe.
     - Moving a step to a
       different section     -> safe, as long as its id comes with it.
     - Rewording text        -> safe. The text is never part of the key.
     - CHANGING an id        -> that step reads as unticked for everyone. The
                                old tick is not lost, it just no longer matches
                                anything and is ignored. Do not rename ids
                                simply to tidy them up.

   Ids are lowercase and hyphenated, and must be unique across the WHOLE file,
   not just within one section. If you duplicate one, the browser console warns
   you on load and the two rows tick together.

   Saved ids that no longer appear here are ignored silently and left alone, so
   a step you delete today and paste back next week keeps its ticks.

   VOICE

   Second person, imperative, no fluff. Concrete numbers wherever a number
   exists. Sentence case. No emoji - the gold diamond and the bracketed mono
   labels do that job. This page is written for one player, not for a group.
   ========================================================================== */


/* Sections are grouped so the heading is literally true of every step under
   it. If you add a step and it does not obviously belong under one of these
   headings, that is a sign the section needs splitting, not that the step
   needs squeezing in. */

const ROADMAP = [
  {
    id: "setup",
    title: "Account setup",
    desc: "Do these before anything else.",
    steps: [
      {
        id: "tutorial",
        text: "Complete the Elorin tutorial",
        note: "",
        diary: ["easy"]
      },
      {
        id: "ironman-cc",
        text: "Join the ironman cc",
        note: "We have a feeling they will pump their clan vault quite quickly, so it is worth being in there early.",
        diary: []
      },
      {
        id: "pick-gamemode",
        text: "Pick your gamemode",
        note: "",
        diary: []
      },
      {
        id: "bank-pin",
        text: "Set a bank PIN and enter it",
        note: "",
        diary: ["easy"]
      },
      {
        id: "read-rules",
        text: "Type ::rules",
        note: "",
        diary: ["easy"]
      },
      {
        id: "sacrifice-points",
        text: "Check your sacrifice points and decide what to spend them on",
        note: "You start with 15,000 of them.",
        diary: []
      }
    ]
  },

  {
    id: "donations-votes",
    title: "Donations and votes",
    desc: "",
    steps: [
      {
        id: "donator-benefits",
        text: "View the benefits on the donator store",
        note: "",
        diary: ["easy"]
      },
      {
        id: "claim-donations",
        text: "Claim any donations",
        note: "",
        diary: []
      },
      {
        id: "claim-votes",
        text: "Claim your votes",
        note: "",
        diary: []
      },
      {
        id: "vote-shop-buy",
        text: "Buy a dragon defender, or anything else, from the vote shop",
        note: "",
        diary: ["medium"]
      }
    ]
  },

  {
    id: "house-quests",
    title: "House and quests",
    desc: "",
    steps: [
      {
        id: "buy-house",
        text: "Buy a house and enter someone else's house",
        note: "",
        diary: ["easy"]
      },
      {
        id: "quest-books",
        text: "Check which quests you do not want to do",
        note: "Use the quest books from the store if they stock them. Pick carefully what you auto complete - some of these give Hitpoints xp, which you do not want before Wintertodt.",
        diary: []
      }
    ]
  },

  {
    id: "errands",
    title: "Errands and diary tasks",
    desc: "Small jobs around the map. Most of them tick a diary task.",
    steps: [
      {
        id: "gamble-lottery",
        text: "Go to ::gamble, buy a lottery ticket and plant 10 mithril seeds",
        note: "The ticket and the 10 flowers off those seeds are two separate medium diary tasks.",
        diary: ["medium"]
      },
      {
        id: "cow-hide",
        text: "Teleport to cows, kill them with Magic until 21 Magic, and keep one cowhide",
        note: "21 Magic is low alchemy. Killing them with spells should not put your HP up much either.",
        diary: []
      },
      {
        id: "tan-leather",
        text: "Tan some leather",
        note: "",
        diary: ["easy"]
      },
      {
        id: "sheep-shearer",
        text: "Complete Sheep Shearer if it has not auto completed",
        note: "",
        diary: []
      },
      {
        id: "flax-spin",
        text: "Teleport to Seers, pick 30 flax and spin them all",
        note: "Picking the flax and spinning the bowstrings are two separate easy diary tasks.",
        diary: ["easy"]
      },
      {
        id: "bones-and-potions",
        text: "Bury 100 bones, then make 3 attack potions",
        note: "Teleport home and go down the Summoning ladder. Buy bones until you have buried 100, then buy 3 guams.",
        diary: ["easy", "medium"]
      },
      {
        id: "decant-potions",
        text: "Pay the chemist to decant your attack potions",
        note: "",
        diary: ["medium"]
      },
      {
        id: "karamja-banana",
        text: "Go to Karamja and pick a banana",
        note: "",
        diary: ["easy"]
      },
      {
        id: "god-cape",
        text: "Go to ::mb for your god cape",
        note: "",
        diary: ["medium"]
      },
      {
        id: "pure-essence",
        text: "Mine 10 pure essence",
        note: "",
        diary: ["easy"]
      },
      {
        id: "set-up-cannon",
        text: "Buy a cannon if it costs money and set it up anywhere",
        note: "",
        diary: ["easy"]
      },
      {
        id: "town-board",
        text: "Complete a town board task",
        note: "Turn challenging tasks on as soon as you are comfortable doing them.",
        diary: ["easy"]
      }
    ]
  },

  {
    id: "shopping-dailies",
    title: "Shopping and dailies",
    desc: "",
    steps: [
      {
        id: "buy-supplies",
        text: "Buy your tools and supplies from the shops",
        note: "Everything you will need, plus any warm clothing for Wintertodt later.",
        diary: []
      },
      {
        id: "alch-stock",
        text: "Buy a few thousand nature runes and a rune item to alch",
        note: "Alch your way through the rest of the list rather than standing still for it.",
        diary: []
      },
      {
        id: "daily-penguins",
        text: "Do your daily penguins",
        note: "",
        diary: []
      }
    ]
  },

  {
    id: "skilling",
    title: "Skilling",
    desc: "The long one. Leave yourself time for it.",
    steps: [
      {
        id: "mining-70",
        text: "Get 70 Mining for stars",
        note: "",
        diary: []
      },
      {
        id: "bank-axes",
        text: "Bank everything and bring out your axes and tinderbox",
        note: "",
        diary: []
      },
      {
        id: "firemaking-50",
        text: "Go to Seers and get 50 Firemaking through Woodcutting",
        note: "",
        diary: []
      },
      {
        id: "wintertodt",
        text: "Head to Wintertodt and get 90 Firemaking",
        note: "Take it to 99 now or come back for the last levels later.",
        diary: ["medium"]
      }
    ]
  }
];

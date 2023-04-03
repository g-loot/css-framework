export const DataScoreboards = [
  {
    id: 0,
    game: 1,
    scoreboards: [
      {
        id: 0,
        name: "All Stars",
        slug: "all-stars",
        description: "Who has the best win rate in VALORANT? Measure yourself with everyone else.",
        logo: "https://res.cloudinary.com/gloot/image/upload/v1679653549/Stryda/logos/scoreboards/scoreboard_valorant_allstars.svg",
        background: "https://res.cloudinary.com/gloot/image/upload/v1679765506/Stryda/demo/valorant_scoreboards_allstars.jpg",
        players: [8, 4, 5, 2, 3, 7, 9, 11, 10, 6, 1],
        isEligible: true,
        scores: {
          top: 10,
          placement: 11,
          min: 0,
          max: 85,
          objective: "Win",
          label: "%",
        },
        filters: [
          {
            id: 0,
            value: 0,
          },
          {
            id: 1,
            value: 0,
          },
          {
            id: 2,
            value: 0,
          },
          {
            id: 3,
            value: 0,
          },
          {
            id: 4,
            value: 0,
          },
          {
            id: 5,
            value: 0,
          },
          {
            id: 6,
            value: 0,
          },
        ],
      },
      {
        id: 1,
        name: "Level-up Champions",
        slug: "levelup-champions",
        description: "The Level-Up Champions ranks players based on the number of XP.",
        logo: "https://res.cloudinary.com/gloot/image/upload/v1679653551/Stryda/logos/scoreboards/scoreboard_valorant_levelupchampions.svg",
        background: "https://res.cloudinary.com/gloot/image/upload/v1679765506/Stryda/demo/valorant_scoreboards_levelupchampions.jpg",
        players: [2, 10, 11, 6, 1, 8, 4, 5, 3],
        isEligible: false,
        scores: {
          top: 15,
          placement: 5,
          min: 0,
          max: 2400,
          objective: "XP",
          label: "",
        },
        filters: [
          {
            id: 0,
            value: 0,
          },
          {
            id: 1,
            value: 0,
          },
          {
            id: 2,
            value: 0,
          },
          {
            id: 3,
            value: 0,
          },
          {
            id: 4,
            value: 0,
          },
          {
            id: 5,
            value: 0,
          },
          {
            id: 6,
            value: 0,
          },
        ],
      },
    ],
  },
];

export const DataScoreboardFilters = [
  {
    id: 0,
    name: "Agents",
    slug: "agents",
    icon: "",
    defaultItem: 0,
    items: [
      {
        id: 0,
        name: "All",
      },
      {
        id: 1,
        name: "Astra",
      },
      {
        id: 2,
        name: "Breach",
      },
      {
        id: 3,
        name: "Brimstone",
      },
      {
        id: 4,
        name: "Chamber",
      },
      {
        id: 5,
        name: "Cypher",
      },
      {
        id: 6,
        name: "Jett",
      },
      {
        id: 7,
        name: "KAY/O",
      },
      {
        id: 8,
        name: "Killjoy",
      },
      {
        id: 9,
        name: "Neon",
      },
      {
        id: 10,
        name: "Omen",
      },
      {
        id: 11,
        name: "Phoenix",
      },
      {
        id: 12,
        name: "Raze",
      },
      {
        id: 13,
        name: "Reyna",
      },
      {
        id: 14,
        name: "Sage",
      },
      {
        id: 15,
        name: "Skye",
      },
      {
        id: 16,
        name: "Sova",
      },
      {
        id: 17,
        name: "Viper",
      },
      {
        id: 18,
        name: "Yoru",
      },
      {
        id: 19,
        name: "Fade",
      },
      {
        id: 20,
        name: "Harbor",
      },
      {
        id: 21,
        name: "Gekko",
      },
    ],
  },
  {
    id: 1,
    name: "Maps",
    slug: "maps",
    icon: "",
    defaultItem: 9,
    items: [
      {
        id: 0,
        name: "All",
      },
      {
        id: 1,
        name: "Ascent",
      },
      {
        id: 2,
        name: "Bind",
      },
      {
        id: 3,
        name: "Breeze",
      },
      {
        id: 4,
        name: "Fracture",
      },
      {
        id: 5,
        name: "Haven",
      },
      {
        id: 6,
        name: "Icebox",
      },
      {
        id: 7,
        name: "Split",
      },
      {
        id: 8,
        name: "Pearl",
      },
      {
        id: 9,
        name: "Lotus",
      },
    ],
  },
  {
    id: 2,
    name: "Game mode",
    slug: "game-mode",
    icon: "",
    defaultItem: 0,
    items: [
      {
        id: 0,
        name: "All",
      },
      {
        id: 4,
        name: "Competitive",
      },
      {
        id: 1,
        name: "Unrated",
      },
      {
        id: 2,
        name: "Spike Rush",
      },
      {
        id: 3,
        name: "Swiftplay",
      },
      {
        id: 6,
        name: "Deathmatch",
      },
      /*
      {
        id: 5,
        name: "Premier",
      },
      {
        id: 7,
        name: "Escalation",
      },
      {
        id: 8,
        name: "Replication",
      },
      {
        id: 9,
        name: "Snowball Fight",
      },
      */
    ],
  },
  {
    id: 3,
    name: "Rank",
    slug: "rank",
    icon: "",
    defaultItem: 0,
    items: [
      {
        id: 0,
        name: "All",
      },
      {
        id: 1,
        name: "Iron 1",
      },
      {
        id: 2,
        name: "Iron 2",
      },
      {
        id: 3,
        name: "Iron 3",
      },
      {
        id: 4,
        name: "Bronze 1",
      },
      {
        id: 5,
        name: "Bronze 2",
      },
      {
        id: 6,
        name: "Bronze 3",
      },
      {
        id: 7,
        name: "Silver 1",
      },
      {
        id: 8,
        name: "Silver 2",
      },
      {
        id: 9,
        name: "Silver 3",
      },
      {
        id: 10,
        name: "Gold 1",
      },
      {
        id: 11,
        name: "Gold 2",
      },
      {
        id: 12,
        name: "Gold 3",
      },
      {
        id: 13,
        name: "Platinum 1",
      },
      {
        id: 14,
        name: "Platinum 2",
      },
      {
        id: 15,
        name: "Platinum 3",
      },
      {
        id: 16,
        name: "Diamond 1",
      },
      {
        id: 17,
        name: "Diamond 2",
      },
      {
        id: 18,
        name: "Diamond 3",
      },
      {
        id: 19,
        name: "Ascendant 1",
      },
      {
        id: 20,
        name: "Ascendant 2",
      },
      {
        id: 21,
        name: "Ascendant 3",
      },
      {
        id: 22,
        name: "Immortal 1",
      },
      {
        id: 23,
        name: "Immortal 2",
      },
      {
        id: 24,
        name: "Immortal 3",
      },
      {
        id: 25,
        name: "Radiant",
      },
    ],
  },
  {
    id: 4,
    name: "Location",
    slug: "location",
    icon: "",
    defaultItem: 0,
    items: [
      {
        id: 0,
        name: "Global",
      },
      {
        id: 1,
        name: "NA",
      },
      {
        id: 2,
        name: "LATAM",
      },
      {
        id: 3,
        name: "BR",
      },
      {
        id: 4,
        name: "EU",
      },
      {
        id: 5,
        name: "KR",
      },
      {
        id: 6,
        name: "AP",
      },
    ],
  },
  {
    id: 5,
    name: "Players",
    slug: "players",
    icon: "",
    defaultItem: 0,
    items: [
      {
        id: 0,
        name: "All",
      },
    ],
  },
  {
    id: 6,
    name: "Time period",
    slug: "time-period",
    icon: "",
    defaultItem: 0,
    items: [
      {
        id: 0,
        name: "All",
      },
      {
        id: 1,
        name: "Episode 01 - Act 1",
      },
      {
        id: 2,
        name: "Episode 01 - Act 2",
      },
      {
        id: 3,
        name: "Episode 01 - Act 3",
      },
      {
        id: 4,
        name: "Episode 02 - Act 1",
      },
      {
        id: 5,
        name: "Episode 02 - Act 2",
      },
      {
        id: 6,
        name: "Episode 02 - Act 3",
      },
      {
        id: 7,
        name: "Episode 03 - Act 1",
      },
      {
        id: 8,
        name: "Episode 03 - Act 2",
      },
      {
        id: 9,
        name: "Episode 03 - Act 3",
      },
      {
        id: 10,
        name: "Episode 04 - Act 1",
      },
      {
        id: 11,
        name: "Episode 04 - Act 2",
      },
      {
        id: 12,
        name: "Episode 04 - Act 3",
      },
      {
        id: 13,
        name: "Episode 05 - Act 1",
      },
      {
        id: 14,
        name: "Episode 05 - Act 2",
      },
      {
        id: 15,
        name: "Episode 05 - Act 3",
      },
      {
        id: 16,
        name: "Episode 06 - Act 1",
      },
      {
        id: 17,
        name: "Episode 06 - Act 2",
      },
    ],
  },
];

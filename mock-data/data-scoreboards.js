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
        logo: "https://res.cloudinary.com/gloot/image/upload/f_auto/v1679653549/Stryda/logos/scoreboards/scoreboard_valorant_allstars.svg",
        background: "https://res.cloudinary.com/gloot/image/upload/f_auto/v1679765506/Stryda/demo/valorant_scoreboards_allstars.jpg",
        video: "https://res.cloudinary.com/gloot/video/upload/Stryda/videos/Stryda_Ladders_All_Stars.mp4",
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
            section: 0,
            value: 0,
          },
          {
            id: 1,
            section: 0,
            value: 0,
          },
          {
            id: 2,
            section: 0,
            value: 0,
          },
          {
            id: 3,
            section: 0,
            value: 0,
          },
          {
            id: 4,
            section: 0,
            value: 0,
          },
          {
            id: 5,
            section: 0,
            value: 0,
          },
        ],
      },
      {
        id: 1,
        name: "Level-up Champions",
        slug: "levelup-champions",
        description: "The Level-Up Champions ranks players based on the number of XP.",
        logo: "https://res.cloudinary.com/gloot/image/upload/f_auto/v1679653551/Stryda/logos/scoreboards/scoreboard_valorant_levelupchampions.svg",
        background: "https://res.cloudinary.com/gloot/image/upload/f_auto/v1679765506/Stryda/demo/valorant_scoreboards_levelupchampions.jpg",
        video: "https://res.cloudinary.com/gloot/video/upload/Stryda/videos/Stryda_Ladders_Level-up_Champions.mp4",
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
            section: 0,
            value: 0,
          },
          {
            id: 1,
            section: 0,
            value: 0,
          },
          {
            id: 2,
            section: 0,
            value: 0,
          },
          {
            id: 3,
            section: 0,
            value: 0,
          },
          {
            id: 4,
            section: 0,
            value: 0,
          },
          {
            id: 5,
            section: 0,
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
    defaulSection: 0,
    defaultItem: 0,
    sections: [
      {
        id: 0,
        label: "Free filters",
        options: [
          {
            id: 0,
            value: "All",
            label: "All",
          },
        ],
      },
      {
        id: 1,
        label: "Premium only",
        options: [
          {
            id: 0,
            value: "Astra",
            label: "Astra",
          },
          {
            id: 1,
            value: "Breach",
            label: "Breach",
          },
          {
            id: 2,
            value: "Brimstone",
            label: "Brimstone",
          },
          {
            id: 3,
            value: "Chamber",
            label: "Chamber",
          },
          {
            id: 4,
            value: "Cypher",
            label: "Cypher",
          },
          {
            id: 5,
            value: "Jett",
            label: "Jett",
          },
          {
            id: 6,
            value: "KAY/O",
            label: "KAY/O",
          },
          {
            id: 7,
            value: "Killjoy",
            label: "Killjoy",
          },
          {
            id: 8,
            value: "Neon",
            label: "Neon",
          },
          {
            id: 9,
            value: "Omen",
            label: "Omen",
          },
          {
            id: 10,
            value: "Phoenix",
            label: "Phoenix",
          },
          {
            id: 11,
            value: "Raze",
            label: "Raze",
          },
          {
            id: 12,
            value: "Reyna",
            label: "Reyna",
          },
          {
            id: 13,
            value: "Sage",
            label: "Sage",
          },
          {
            id: 14,
            value: "Skye",
            label: "Skye",
          },
          {
            id: 15,
            value: "Sova",
            label: "Sova",
          },
          {
            id: 16,
            value: "Viper",
            label: "Viper",
          },
          {
            id: 17,
            value: "Yoru",
            label: "Yoru",
          },
          {
            id: 18,
            value: "Fade",
            label: "Fade",
          },
          {
            id: 19,
            value: "Harbor",
            label: "Harbor",
          },
          {
            id: 20,
            value: "Gekko",
            label: "Gekko",
          },
        ],
      },
    ]
  },
  {
    id: 1,
    name: "Maps",
    slug: "maps",
    icon: "",
    defaultItem: 9,
    sections: [
      {
        id: 0,
        label: "Free filters",
        options: [
          {
            id: 0,
            value: "All",
            label: "All",
          },
        ],
      },
      {
        id: 1,
        label: "Premium only",
        options: [
          {
            id: 0,
            value: "Ascent",
            label: "Ascent",
          },
          {
            id: 1,
            value: "Bind",
            label: "Bind",
          },
          {
            id: 2,
            value: "Breeze",
            label: "Breeze",
          },
          {
            id: 3,
            value: "Fracture",
            label: "Fracture",
          },
          {
            id: 4,
            value: "Haven",
            label: "Haven",
          },
          {
            id: 5,
            value: "Icebox",
            label: "Icebox",
          },
          {
            id: 6,
            value: "Split",
            label: "Split",
          },
          {
            id: 7,
            value: "Pearl",
            label: "Pearl",
          },
          {
            id: 8,
            value: "Lotus",
            label: "Lotus",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Game mode",
    slug: "game-mode",
    icon: "",
    defaultItem: 0,
    sections: [
      {
        id: 0,
        label: "Free filters",
        options: [
          {
            id: 0,
            value: "All",
            label: "All",
          },
        ],
      },
      {
        id: 1,
        label: "Premium only",
        options: [
          {
            id: 0,
            value: "Competitive",
            label: "Competitive",
          },
          {
            id: 1,
            value: "Unrated",
            label: "Unrated",
          },
          {
            id: 2,
            value: "Spike Rush",
            label: "Spike Rush",
          },
          {
            id: 3,
            value: "Swiftplay",
            label: "Swiftplay",
          },
          {
            id: 4,
            value: "Deathmatch",
            label: "Deathmatch",
          },
          /*
          {
            id: 5,
            value: "Premier",
            label: "Premier",
          },
          {
            id: 7,
            value: "Escalation",
            label: "Escalation",
          },
          {
            id: 8,
            value: "Replication",
            label: "Replication",
          },
          {
            id: 9,
            value: "Snowball Fight",
            label: "Snowball Fight",
          },
          */
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Rank",
    slug: "rank",
    icon: "",
    defaultItem: 0,
    sections: [
      {
        id: 0,
        label: "Free filters",
        options: [
          {
            id: 0,
            value: "All",
            label: "All",
          },
        ],
      },
      {
        id: 1,
        label: "Premium only",
        options: [
          {
            id: 1,
            value: "Iron 1",
            label: "Iron 1",
          },
          {
            id: 2,
            value: "Iron 2",
            label: "Iron 2",
          },
          {
            id: 3,
            value: "Iron 3",
            label: "Iron 3",
          },
          {
            id: 4,
            value: "Bronze 1",
            label: "Bronze 1",
          },
          {
            id: 5,
            value: "Bronze 2",
            label: "Bronze 2",
          },
          {
            id: 6,
            value: "Bronze 3",
            label: "Bronze 3",
          },
          {
            id: 7,
            value: "Silver 1",
            label: "Silver 1",
          },
          {
            id: 8,
            value: "Silver 2",
            label: "Silver 2",
          },
          {
            id: 9,
            value: "Silver 3",
            label: "Silver 3",
          },
          {
            id: 10,
            value: "Gold 1",
            label: "Gold 1",
          },
          {
            id: 11,
            value: "Gold 2",
            label: "Gold 2",
          },
          {
            id: 12,
            value: "Gold 3",
            label: "Gold 3",
          },
          {
            id: 13,
            value: "Platinum 1",
            label: "Platinum 1",
          },
          {
            id: 14,
            value: "Platinum 2",
            label: "Platinum 2",
          },
          {
            id: 15,
            value: "Platinum 3",
            label: "Platinum 3",
          },
          {
            id: 16,
            value: "Diamond 1",
            label: "Diamond 1",
          },
          {
            id: 17,
            value: "Diamond 2",
            label: "Diamond 2",
          },
          {
            id: 18,
            value: "Diamond 3",
            label: "Diamond 3",
          },
          {
            id: 19,
            value: "Ascendant 1",
            label: "Ascendant 1",
          },
          {
            id: 20,
            value: "Ascendant 2",
            label: "Ascendant 2",
          },
          {
            id: 21,
            value: "Ascendant 3",
            label: "Ascendant 3",
          },
          {
            id: 22,
            value: "Immortal 1",
            label: "Immortal 1",
          },
          {
            id: 23,
            value: "Immortal 2",
            label: "Immortal 2",
          },
          {
            id: 24,
            value: "Immortal 3",
            label: "Immortal 3",
          },
          {
            id: 25,
            value: "Radiant",
            label: "Radiant",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Location",
    slug: "location",
    icon: "",
    defaultItem: 0,
    sections: [
      {
        id: 0,
        label: "Free filters",
        options: [
          {
            id: 0,
            value: "Global",
            label: "Global",
          },
        ],
      },
      {
        id: 1,
        label: "Premium only",
        options: [
          {
            id: 0,
            value: "NA",
            label: "NA",
          },
          {
            id: 1,
            value: "LATAM",
            label: "LATAM",
          },
          {
            id: 2,
            value: "BR",
            label: "BR",
          },
          {
            id: 3,
            value: "EU",
            label: "EU",
          },
          {
            id: 4,
            value: "KR",
            label: "KR",
          },
          {
            id: 5,
            value: "AP",
            label: "AP",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Players",
    slug: "players",
    icon: "",
    defaultItem: 0,
    sections: [
      {
        id: 0,
        label: "Free filters",
        options: [
          {
            id: 0,
            value: "All",
            label: "All",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Time period",
    slug: "time-period",
    icon: "",
    defaultItem: 0,
    sections: [
      {
        id: 0,
        label: "Free filters",
        options: [
          {
            id: 0,
            value: "All time",
            label: "All time",
          },
          {
            id: 1,
            value: "Episode 06 - Act 2",
            label: "Episode 06 - Act 2",
          },
          {
            id: 2,
            value: "Episode 06 - Act 1",
            label: "Episode 06 - Act 1",
          },
          
        ],
      },
      {
        id: 1,
        label: "Premium only",
        options: [
          {
            id: 1,
            value: "Episode 05 - Act 3",
            label: "Episode 05 - Act 3",
          },
          {
            id: 2,
            value: "Episode 05 - Act 2",
            label: "Episode 05 - Act 2",
          },
          {
            id: 3,
            value: "Episode 05 - Act 1",
            label: "Episode 05 - Act 1",
          },
          {
            id: 4,
            value: "Episode 04 - Act 3",
            label: "Episode 04 - Act 3",
          },
          {
            id: 5,
            value: "Episode 04 - Act 2",
            label: "Episode 04 - Act 2",
          },
          {
            id: 6,
            value: "Episode 04 - Act 1",
            label: "Episode 04 - Act 1",
          },
          {
            id: 7,
            value: "Episode 03 - Act 3",
            label: "Episode 03 - Act 3",
          },
          {
            id: 8,
            value: "Episode 03 - Act 2",
            label: "Episode 03 - Act 2",
          },
          {
            id: 9,
            value: "Episode 03 - Act 1",
            label: "Episode 03 - Act 1",
          },
          {
            id: 10,
            value: "Episode 02 - Act 3",
            label: "Episode 02 - Act 3",
          },
          {
            id: 11,
            value: "Episode 02 - Act 2",
            label: "Episode 02 - Act 2",
          },
          {
            id: 12,
            value: "Episode 02 - Act 1",
            label: "Episode 02 - Act 1",
          },
          {
            id: 13,
            value: "Episode 01 - Act 3",
            label: "Episode 01 - Act 3",
          },
          {
            id: 14,
            value: "Episode 01 - Act 2",
            label: "Episode 01 - Act 2",
          },
          {
            id: 15,
            value: "Episode 01 - Act 1",
            label: "Episode 01 - Act 1",
          },
        ],
      },
    ],
  },
];

export const DataClanLeaderboards = [
  {
    id: 0,
    game: 1,
    leaderboards: [
      {
        id: 0,
        name: "Clan Season 3",
        slug: "clan-season-3",
        description: "Who has the best win rate in VALORANT? Measure yourself with everyone else.",
        objective: "Play together in a 5 people clan party.",
        gameMode: "Competitive",
        tieBreaker: "Headshots from your 3 best matches decide a tie.",
        logo: "https://res.cloudinary.com/gloot/image/upload/v1679653549/Stryda/logos/scoreboards/scoreboard_valorant_allstars.svg",
        background: "https://res.cloudinary.com/gloot/image/upload/v1679765506/Stryda/demo/valorant_scoreboards_allstars.jpg",
        video: "https://res.cloudinary.com/gloot/video/upload/Stryda/videos/Stryda_Ladders_All_Stars.mp4",
        clans: [1,2,3,4,5],
        isEligible: true,
        scores: {
          top: 10,
          placement: 11,
          min: 0,
          max: 85,
          objective: "Win",
          label: "%",
        },
      },
    ],
  },
];
export const DataFeedItems = [
  {
    id: 0,
    type: "match",
    author: 4,
    meta: {
      game: 1,
      gameMode: "Competitive",
      map: "Split",
      dateTimeStarted: "",
      dateTimeEnded: "4 min. ago",
      text: "We won big time!"
    },
    social: {
      views: {
        total: 253,
        users: [2,5,6,8,9],
      },
      likes: {
        total: 1,
        hasLiked: true,
        users: [1,2],
      },
      comments: [
        {
          author: 2,
          text: "Well done man!",
          likes: [2,5,6],
        },
        {
          author: 5,
          text: "🔥🔥🔥",
          likes: [],
        },
      ],
    },
    stats: {
      hasWon: true,
      scoreOwn: 12,
      scoreOpposite: 8,
      mainStats: [
        {
          label: "Position",
          value: "3rd",
        },
        {
          label: "K/D/A",
          value: "16/0/11",
        },
        {
          label: "K/D",
          value: "1.9",
        },
        {
          label: "HS%",
          value: "34",
        },
        {
          label: "ACS",
          value: "175",
        },
      ],
      teamA: {
        players: [
          {
            user: 5,
            position: 3,
            KDA: {
              K: 14,
              D: 10,
              A: 7,
            },
            KDRatio: 1.5,
            HS: 24,
            ACS: 153, 
          },
        ],
      },
    },
  }
]
export const dataGames = [
  {
    id: 1,
    maintenance: false,
    needsSteam: false,
    needsRiot: true,
    isFavorite: true,
    hasAPI: true,
    hasReward: false,
    name: "Valorant",
    shortName: "Valorant",
    slug: "valorant",
    type: "FPS hero shooter",
    assets: {
      cover:
        "https://res.cloudinary.com/gloot/image/upload/v1644677000/Marketing/202109_gloot2/Game_cover_Valorant.jpg",
      heroMission:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-4.webp",
      heroLadder:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-3.webp",
      heroClanEvent:
        "https://res.cloudinary.com/gloot/image/upload/v1686817579/Stryda/illustrations/ClansSeason_bg.jpg",
    },
    missions: [
      {
        id: 1,
        name: "Get 15 kills with the Operator",
        category: 3,
        label: "kills",
        current: 15,
        target: 15,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 100,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1677242971/Stryda/demo/mission-valorant_1.jpg",
      },
      {
        id: 2,
        name: "Get 6 assists",
        category: 1,
        label: "assists",
        current: 3,
        target: 6,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1677242971/Stryda/demo/mission-valorant_3.jpg",
      },
      {
        id: 3,
        name: "Get 2 knife kills in Competitive",
        category: 4,
        label: "double kills",
        current: 0,
        target: 2,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 300,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1677242971/Stryda/demo/mission-valorant_2.jpg",
      },
      {
        id: 4,
        name: "Get 5 headshots",
        category: 1,
        label: "headshots",
        current: 0,
        target: 5,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1677242971/Stryda/demo/mission-valorant_4.jpg",
      },
      {
        id: 5,
        name: "Win 3 games of Spike Rush",
        category: 2,
        label: "win",
        current: 0,
        target: 3,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1677242971/Stryda/demo/mission-valorant_5.jpg",
      },
      {
        id: 6,
        name: "Get 25 kills",
        category: 3,
        label: "kills",
        current: 0,
        target: 25,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 100,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1677242971/Stryda/demo/mission-valorant_6.jpg",
      },
      {
        id: 7,
        name: "Get 50 kills",
        category: 4,
        label: "kills",
        current: 0,
        target: 50,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 100,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1677242971/Stryda/demo/mission-valorant_6.jpg",
      },
      {
        id: 8,
        name: "Join a Clan",
        category: 3,
        label: "clan",
        current: 0,
        target: 1,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 300,
        image:
          "https://res.cloudinary.com/gloot/image/upload/Missions/Specials/Platform%20missions/mission-platform-10.jpg",
      },
      {
        id: 9,
        name: "Earn 500 coins",
        category: 2,
        label: "coins",
        current: 0,
        target: 500,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 100,
        image:
          "https://res.cloudinary.com/gloot/image/upload/Missions/Specials/Platform%20missions/mission-platform-1.jpg",
      },
    ],
    ladders: [
      {
        id: 0,
        solo: true,
        clan: false,
        name: "Premium Spike Rush",
        isPremium: true,
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1677087781/Stryda/demo/Spike_Rush_Premium_1.jpg",
        status: "ongoing",
        gameMode: "Competitive",
        sponsor: false,
        isPowerPlay: false,
        rewards: [
          {
            type: "coin",
            value: 3000000,
          },
        ],
        isEnrolled: false,
        progress: 0,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 6800,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 4000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 3300,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 2700,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 2300,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 2000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 1800,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [1, 5, 6],
      },
      {
        id: 1,
        solo: true,
        clan: false,
        name: "Power Play",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1677087506/Stryda/demo/PowerPlay_Valorant1.jpg",
        status: "ongoing",
        gameMode: "Competitive",
        sponsor: false,
        isPowerPlay: true,
        rewards: [
          {
            type: "coin",
            value: 300000000,
          },
        ],
        isEnrolled: true,
        progress: 0,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 1,
            rewards: [],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: null,
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: null,
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [1, 5, 6],
      },
      {
        id: 2,
        solo: true,
        clan: true,
        name: "Premium clan & solo unrated",
        isPremium: true,
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1677087781/Stryda/demo/Unrated_Premium_1.jpg",
        status: "ongoing",
        gameMode: "Competitive",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: true,
        progress: 2,
        progressClan: 1,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 3,
        solo: true,
        clan: true,
        name: "Ladder - the Fall edition",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-5.webp",
        status: "finished",
        gameMode: "Competitive",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: true,
        progress: 2,
        progressClan: 1,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 4,
        solo: true,
        clan: true,
        name: "Solo & Clan Unrated",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-7.webp",
        status: "finished",
        gameMode: "Unrated",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: true,
        hasClaim: true,
        progress: 3,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 5,
        solo: true,
        clan: true,
        name: "Spike Rush",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-7.webp",
        status: "ongoing",
        gameMode: "Spike Rush",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: false,
        hasClaim: false,
        progress: 3,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 6,
        solo: true,
        clan: true,
        name: "Spike Rush",
        isPremium: true,
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-6.webp",
        status: "finished",
        gameMode: "Competitive",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: true,
        hasClaim: false,
        progress: 3,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 7,
        solo: true,
        clan: true,
        name: "Spike Rush clan & solo",
        isPremium: false,
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-1.webp",
        status: "upcoming",
        gameMode: "Spike Rush",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: false,
        hasClaim: false,
        progress: 0,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 8,
        solo: true,
        clan: false,
        name: "Competitive",
        isPremium: true,
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-2.webp",
        status: "upcoming",
        gameMode: "Competitive",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: false,
        hasClaim: false,
        progress: 0,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 10,
        solo: true,
        clan: false,
        name: "Power Play Finished",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1677087506/Stryda/demo/PowerPlay_Valorant1.jpg",
        status: "finished",
        gameMode: "Competitive",
        sponsor: false,
        isPowerPlay: true,
        rewards: [
          {
            type: "coin",
            value: 300000000,
          },
        ],
        isEnrolled: true,
        progress: 0,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [1, 5, 6],
      },
      {
        id: 11,
        solo: true,
        clan: true,
        name: "Empty Unrated",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-3.webp",
        status: "ongoing",
        gameMode: "Unrated",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: false,
        hasClaim: false,
        progress: 3,
        progressClan: 0,
        soloLeaderboard: false,
        clanLeaderboard: false,
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
    ],
    clanLeaderboards: [
      {
        id: 0,
        isCurrent: true,
        status: "ongoing",
        name: "Nordic Clash qualifiers",
        logo: "https://res.cloudinary.com/gloot/image/upload/v1689149063/Stryda/demo/NordicClash_logo.png",
        video:
          null,
        bg: "https://res.cloudinary.com/gloot/image/upload/v1689149063/Stryda/demo/NordicClash_bg.jpg",
        meta: {
          objective:
            "Have the most wins in a party composed of 5 clan members",
          gameMode: "Competitive",
          tieBreaker: "Total number of kills decide a tie",
        },
        rewards: [
          {
            type: "coin",
            value: 3000000,
          },
        ],
        isEnrolled: false,
        progress: 0,
        progressClan: 0,
        leaderboard: [
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 700,
              },
              {
                type: "avatarframe",
                value: 4,
              },
              {
                type: "profilebanner",
                value: 33,
              },
            ],
            stats: {
              wins: 42,
              losses: 12,
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 500,
              },
              {
                type: "profilebanner",
                value: 31,
              },
            ],
            stats: {
              wins: 41,
              losses: 11,
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 400,
              },
            ],
            stats: {
              wins: 38,
              losses: 9,
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 33,
              losses: 4,
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 41,
              losses: 14,
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 44,
              losses: 25,
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 29,
              losses: 10,
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 29,
              losses: 14,
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
      },
      {
        id: 1,
        isCurrent: false,
        status: "finished",
        hasClaim: true,
        name: "Easter Battle",
        logo: "https://res.cloudinary.com/gloot/image/upload/Stryda/demo/easterbattle-logo.png",
        bg: "https://res.cloudinary.com/gloot/image/upload/v1681913805/Stryda/demo/easterbattle-bg.jpg",
        meta: {
          objective:
            "Have the most wins in a party composed of 5 clan members",
          gameMode: "Competitive",
          tieBreaker: "Total number of kills decide a tie",
        },
        rewards: [
          {
            type: "coin",
            value: 1000,
          },
          {
            type: "token",
            value: 100,
          },
          {
            type: "powertoken",
            value: 5,
          },
        ],
        isEnrolled: false,
        progress: 0,
        progressClan: 0,
        leaderboard: [
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 700,
              },
              {
                type: "avatarframe",
                value: 4,
              },
              {
                type: "profilebanner",
                value: 33,
              },
            ],
            stats: {
              wins: 13,
              losses: 1,
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 500,
              },
              {
                type: "profilebanner",
                value: 31,
              },
            ],
            stats: {
              wins: 10,
              losses: 2,
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 400,
              },
            ],
            stats: {
              wins: 10,
              losses: 3,
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 8,
              losses: 2,
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 6,
              losses: 3,
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 5,
              losses: 2,
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 5,
              losses: 3,
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 4,
              losses: 3,
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
      },
      {
        id: 2,
        isCurrent: false,
        status: "finished",
        name: "Winter Mayhem",
        logo: "https://res.cloudinary.com/gloot/image/upload/v1686313273/Stryda/demo/wintermayhem-logo.png",
        bg: "https://res.cloudinary.com/gloot/image/upload/v1686313274/Stryda/demo/wintermayhem-bg.jpg",
        meta: {
          objective:
            "Have the most wins in a party composed of 5 clan members",
          gameMode: "Competitive",
          tieBreaker: "Total number of kills decide a tie",
        },
        rewards: [
          {
            type: "coin",
            value: 1000,
          },
          {
            type: "token",
            value: 100,
          },
          {
            type: "powertoken",
            value: 5,
          },
        ],
        isEnrolled: false,
        progress: 0,
        progressClan: 0,
        leaderboard: [
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 700,
              },
              {
                type: "avatarframe",
                value: 4,
              },
              {
                type: "profilebanner",
                value: 33,
              },
            ],
            stats: {
              wins: 13,
              losses: 1,
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 500,
              },
              {
                type: "profilebanner",
                value: 31,
              },
            ],
            stats: {
              wins: 10,
              losses: 2,
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 400,
              },
            ],
            stats: {
              wins: 10,
              losses: 3,
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 8,
              losses: 2,
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 6,
              losses: 3,
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 5,
              losses: 2,
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 5,
              losses: 3,
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 4,
              losses: 3,
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
      },
      {
        id: 3,
        isCurrent: false,
        status: "upcoming",
        name: "Phoenix Clash",
        logo: "https://res.cloudinary.com/gloot/image/upload/v1687335839/Stryda/demo/phoenixclash-logo.png",
        bg: "https://res.cloudinary.com/gloot/image/upload/v1687160240/Stryda/demo/spaceclash-bg.jpg",
        video:
          "https://res.cloudinary.com/gloot/video/upload/v1687351323/Stryda/videos/Stryda_ClanSeason_PhoenixClash.mp4",
        meta: {
          objective:
            "Have the most wins in a party composed of 5 clan members",
          gameMode: "Competitive",
          tieBreaker: "Total number of kills decide a tie",
        },
        rewards: [
          {
            type: "coin",
            value: 1000,
          },
          {
            type: "token",
            value: 100,
          },
          {
            type: "powertoken",
            value: 5,
          },
        ],
        isEnrolled: false,
        progress: 0,
        progressClan: 0,
        leaderboard: [
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 700,
              },
              {
                type: "avatarframe",
                value: 4,
              },
              {
                type: "profilebanner",
                value: 33,
              },
            ],
            stats: {
              wins: 13,
              losses: 1,
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 500,
              },
              {
                type: "profilebanner",
                value: 31,
              },
            ],
            stats: {
              wins: 10,
              losses: 2,
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 400,
              },
            ],
            stats: {
              wins: 10,
              losses: 3,
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 8,
              losses: 2,
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 6,
              losses: 3,
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 5,
              losses: 2,
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 5,
              losses: 3,
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 4,
              losses: 3,
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
      },
      {
        id: 5,
        isCurrent: true,
        status: "ongoing",
        name: "Clan Rush",
        logo: "https://res.cloudinary.com/gloot/image/upload/v1689151603/Stryda/demo/Spike_Clan_Rush_logo.png",
        video:
          null,
        bg: "https://res.cloudinary.com/gloot/image/upload/v1689151404/Stryda/demo/Spike_Clan_Rush_bg.jpg",
        meta: {
          objective:
            "Have the most wins in a party composed of 5 clan members",
          gameMode: "Spike Rush",
          tieBreaker: "Total number of kills decide a tie",
        },
        rewards: [
          {
            type: "coin",
            value: 3000000,
          },
        ],
        isEnrolled: false,
        progress: 0,
        progressClan: 0,
        leaderboard: [
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 700,
              },
              {
                type: "avatarframe",
                value: 4,
              },
              {
                type: "profilebanner",
                value: 33,
              },
            ],
            stats: {
              wins: 42,
              losses: 12,
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 500,
              },
              {
                type: "profilebanner",
                value: 31,
              },
            ],
            stats: {
              wins: 41,
              losses: 11,
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 400,
              },
            ],
            stats: {
              wins: 38,
              losses: 9,
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 33,
              losses: 4,
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 41,
              losses: 14,
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 44,
              losses: 25,
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 29,
              losses: 10,
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 200,
              },
            ],
            stats: {
              wins: 29,
              losses: 14,
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
      },
    ],
    tournaments: [
      {
        id: 1,
        type: "skirmish",
        name: "Valorant Open Tour",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-2.webp",
        status: "ongoing",
        sponsor: false,
        details: {
          region: "Global",
          date: "2023-02-19T18:00:00Z",
          entryFee: [
            {
              type: "token",
              value: 1,
            },
          ],
          gameType: "Squad FPP",
          leaderboardType: "brackets",
          availableSlots: 12,
          schedule: [
            {
              type: "BO3",
              value: "Miramar, Erangel, Miramar",
            },
          ],
        },
        rewards: [
          {
            type: "coin",
            value: 120000,
          },
        ],
        prizepool: [
          {
            level: "1st",
            rewards: [
              {
                type: "coin",
                value: 66000,
              },
            ],
          },
          {
            level: "2nd",
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
          },
          {
            level: "3rd",
            rewards: [
              {
                type: "coin",
                value: 16000,
              },
            ],
          },
          {
            level: "4th",
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
          },
        ],
        clans: [1, 2, 3, 4, 5, 6, 7],
        stats: {
          placement: 0,
          kills: 0,
        },
      },
      {
        id: 2,
        type: "showdown",
        name: "Valorant European Champions",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-3.webp",
        status: "registration",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        details: {
          region: "NA",
          date: "2023-02-19T18:00:00Z",
          entryFee: [
            {
              type: "token",
              value: 1,
            },
          ],
          gameType: "Squad FPP",
          leaderboardType: "brackets",
          availableSlots: 12,
          schedule: [
            {
              type: "BO3",
              value: "Miramar, Erangel, Miramar",
            },
          ],
        },
        rewards: [
          {
            type: "coin",
            value: 120000,
          },
        ],
        prizepool: [
          {
            level: "1st",
            rewards: [
              {
                type: "coin",
                value: 66000,
              },
            ],
          },
          {
            level: "2nd",
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
          },
          {
            level: "3rd",
            rewards: [
              {
                type: "coin",
                value: 16000,
              },
            ],
          },
          {
            level: "4th",
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
          },
        ],
        clans: [1, 2, 3, 4, 5, 6, 7],
        stats: {
          placement: 0,
          kills: 0,
        },
      },
      {
        id: 3,
        type: "custom",
        customLogo:
          "https://images.squarespace-cdn.com/content/v1/61a700ec7413220d43316e53/fdd9d73c-be2a-45c7-9b60-ecebe4bc6baa/VCTA22_Logo_H_Light.png?format=1000w",
        host: "Riot Games",
        name: "Valorant 2022 Champions Tour",
        cover:
          "https://images.squarespace-cdn.com/content/v1/61a700ec7413220d43316e53/14672157-dacd-4278-b72c-8a8344be8389/hero-background.jpg?format=original",
        status: "registration",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        details: {
          region: "Europe",
          date: "2023-02-19T18:00:00Z",
          entryFee: "free",
          gameType: "Squad FPP",
          leaderboardType: "brackets",
          availableSlots: 12,
          schedule: [
            {
              type: "BO3",
              value: "Miramar, Erangel, Miramar",
            },
          ],
        },
        rewards: [
          {
            type: "coin",
            value: 120000,
          },
        ],
        prizepool: [
          {
            level: "1st",
            rewards: [
              {
                type: "coin",
                value: 66000,
              },
            ],
          },
          {
            level: "2nd",
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
          },
          {
            level: "3rd",
            rewards: [
              {
                type: "coin",
                value: 16000,
              },
            ],
          },
          {
            level: "4th",
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
          },
        ],
        clans: [1, 2, 3, 4, 5, 6, 7],
        stats: {
          placement: 0,
          kills: 0,
        },
      },
      {
        id: 4,
        type: "open",
        name: "Valorant New Zealand Champions",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-5.webp",
        status: "finished",
        sponsor: false,
        details: {
          region: "Europe",
          date: "2023-02-19T18:00:00Z",
          entryFee: [
            {
              type: "token",
              value: 2,
            },
          ],
          gameType: "Squad FPP",
          leaderboardType: "brackets",
          availableSlots: 12,
          schedule: [
            {
              type: "BO3",
              value: "Miramar, Erangel, Miramar",
            },
          ],
        },
        rewards: [
          {
            type: "coin",
            value: 120000,
          },
        ],
        prizepool: [
          {
            level: "1st",
            rewards: [
              {
                type: "coin",
                value: 66000,
              },
            ],
          },
          {
            level: "2nd",
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
          },
          {
            level: "3rd",
            rewards: [
              {
                type: "coin",
                value: 16000,
              },
            ],
          },
          {
            level: "4th",
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
          },
        ],
        clans: [1, 2, 3, 4, 5, 6, 7],
        stats: {
          placement: 0,
          kills: 0,
        },
      },
    ],
    demo: {
      mainStats: [
        {
          label: "Dmg/round",
          value: "111",
        },
        {
          label: "K/D ratio",
          value: "1.22",
        },
        {
          label: "Headshot %",
          value: "33.53%",
        },
        {
          label: "Win %",
          value: "75.2%",
        },
      ],
    },
  },
  {
    id: 6,
    maintenance: false,
    needsSteam: false,
    needsRiot: true,
    isFavorite: true,
    hasAPI: true,
    name: "League of Legends",
    shortName: "League of Legends",
    slug: "leagueoflegends",
    type: "MOBA",
    assets: {
      cover:
        "https://res.cloudinary.com/gloot/image/upload/v1622103228/GNOG%20assets/Games/league_of_legends/cover.png",
      heroMission:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-2.webp",
      heroLadder:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-1.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-3.webp",
    },
    missions: [
      {
        id: 1,
        name: "Get 12 assists",
        category: 1,
        label: "assists",
        current: 12,
        target: 12,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1679059843/Missions/League%20Of%20Legends/assists-7.jpg",
      },
      {
        id: 2,
        name: "Get 9 assists",
        category: 1,
        label: "assists",
        current: 0,
        target: 9,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1679059849/Missions/League%20Of%20Legends/assists-4.jpg",
      },
      {
        id: 3,
        name: "Get 60 jungle CS",
        category: 2,
        label: "jungle CS",
        current: 0,
        target: 60,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 75,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1679059845/Missions/League%20Of%20Legends/getjunglecs-1.jpg",
      },
      {
        id: 4,
        name: "Get 100 CS",
        category: 1,
        label: "headshots",
        current: 50,
        target: 100,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1679059843/Missions/League%20Of%20Legends/getcs-1.jpg",
      },
      {
        id: 5,
        name: "Get 20 assists",
        category: 3,
        label: "win",
        current: 0,
        target: 20,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 100,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1679059843/Missions/League%20Of%20Legends/assists-5.jpg",
      },
      {
        id: 6,
        name: "Get 40 assists",
        category: 4,
        label: "kills",
        current: 0,
        target: 40,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 125,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1679059843/Missions/League%20Of%20Legends/assists-6.jpg",
      },
      {
        id: 7,
        name: "Get 100 jungle CS",
        category: 4,
        label: "jungle CS",
        current: 0,
        target: 100,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 125,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1679059845/Missions/League%20Of%20Legends/getjunglecs-2.jpg",
      },
      {
        id: 8,
        name: "Get 200 CS",
        category: 4,
        label: "clan",
        current: 0,
        target: 200,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 125,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1679059843/Missions/League%20Of%20Legends/getcs-2.jpg",
      },
      {
        id: 9,
        name: "Earn 500 coins",
        category: 2,
        label: "coins",
        current: 0,
        target: 500,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 100,
        image:
          "https://res.cloudinary.com/gloot/image/upload/Missions/Specials/Platform%20missions/mission-platform-1.jpg",
      },
    ],
    ladders: [
      {
        id: 0,
        solo: true,
        clan: true,
        name: "Competitive & Clan Ladder",
        isPremium: false,
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1676474968/Ladders/League%20Of%20Legends/LeagueOfLegends_Competitive2.jpg",
        status: "ongoing",
        gameMode: "Ranked Flex & Solo/Duo",
        sponsor: false,
        isPowerPlay: false,
        rewards: [
          {
            type: "coin",
            value: 4000,
          },
        ],
        isEnrolled: false,
        progress: 0,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 4000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 3500,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 3000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 2500,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 2000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 1500,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 1000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 800,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [1, 5, 6],
      },
      {
        id: 1,
        solo: true,
        clan: false,
        name: "Weekly Aram Ladder",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1676474968/Ladders/League%20Of%20Legends/LeagueOfLegends_ARAM1.jpg",
        status: "ongoing",
        gameMode: "ARAM",
        sponsor: false,
        isPowerPlay: false,
        rewards: [
          {
            type: "coin",
            value: 3000,
          },
        ],
        isEnrolled: true,
        progress: 0,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 1500,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 1250,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 1000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 900,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 800,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 700,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 600,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 500,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 1,
            rewards: [],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: null,
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: null,
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [1, 5, 6],
      },
      {
        id: 2,
        solo: true,
        clan: true,
        name: "Weekly Blind/Draft Pick Ladder",
        isPremium: true,
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1676474968/Ladders/League%20Of%20Legends/LeagueOfLegends_Blind_Draft_Pick_1.jpg",
        status: "upcoming",
        gameMode: "Blind Pick & Draft Pick",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: true,
        progress: 2,
        progressClan: 1,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 3,
        solo: true,
        clan: true,
        name: "Competitive & Clan Ladder",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1676474968/Ladders/League%20Of%20Legends/LeagueOfLegends_Competitive2.jpg",
        status: "finished",
        gameMode: "Competitive",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: true,
        progress: 2,
        progressClan: 1,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 4,
        solo: true,
        clan: true,
        name: "Weekly Aram Ladder",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-2.webp",
        status: "finished",
        gameMode: "ARAM",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: true,
        hasClaim: true,
        progress: 3,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
      {
        id: 5,
        solo: true,
        clan: false,
        name: "Empty Ladder",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1676474968/Ladders/League%20Of%20Legends/LeagueOfLegends_Blind_Draft_Pick_1.jpg",
        status: "ongoing",
        gameMode: "Unrated",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: false,
        hasClaim: false,
        progress: 3,
        progressClan: 0,
        soloLeaderboard: false,
        clanLeaderboard: false,
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
    ],
    demo: {
      mainStats: [
        {
          label: "Win ratio %",
          value: "57.2",
        },
        {
          label: "KDA",
          value: "7.3 / 6.4 / 8.2",
        },
        {
          label: "CS/min",
          value: "104",
        },
        {
          label: "Vision score",
          value: "71%",
        },
      ],
    },
  },
  {
    id: 2,
    maintenance: false,
    needsSteam: true,
    needsRiot: false,
    isFavorite: true,
    hasReward: true,
    name: "PUBG: BATTLEGROUNDS",
    shortName: "PUBG: BATTLEGROUNDS",
    slug: "pubg",
    type: "Squad FPP",
    assets: {
      cover:
        "https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_PUBG_Battlegrounds.jpg",
      heroMission:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-1.webp",
      heroLadder:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-3.webp",
    },
    missions: [
      {
        id: 1,
        name: "Get 15 kills",
        category: 1,
        label: "kills",
        current: 15,
        target: 15,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 300,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1672672870/Stryda/demo/mission-pubg_1.jpg",
      },
      {
        id: 2,
        name: "Get 1 kill from more than 100m away",
        category: 2,
        label: "kill",
        current: 0,
        target: 1,
        isPremium: false,
        isVisible: false,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1672672870/Stryda/demo/mission-pubg_2.jpg",
      },
      {
        id: 3,
        name: "Walk for 3000m",
        category: 3,
        label: "",
        current: 0,
        target: 1,
        isPremium: false,
        isVisible: false,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1672672870/Stryda/demo/mission-pubg_3.jpg",
      },
      {
        id: 4,
        name: "Get 8 headshot kills",
        category: 4,
        label: "headshot kills",
        current: 0,
        target: 8,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1672672870/Stryda/demo/mission-pubg_4.jpg",
      },
      {
        id: 5,
        name: "Revive your teammates twice",
        category: 3,
        label: "revive",
        current: 0,
        target: 2,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 100,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1672672870/Stryda/demo/mission-pubg_5.jpg",
      },
      {
        id: 6,
        name: "Get 30 kills",
        category: 4,
        label: "kills",
        current: 0,
        target: 30,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 300,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1672672870/Stryda/demo/mission-pubg_6.jpg",
      },
    ],
    ladders: [
      {
        id: 1,
        solo: true,
        clan: true,
        name: "Competitive Ladder",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-4.webp",
        status: "ongoing",
        gameMode: "Competitive",
        sponsor: false,
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: false,
        hasClaim: true,
        progress: 0,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        result: {
          placement: 67,
          movement: 12,
          isPositive: true,
        },
        topPerformers: [5, 7, 8],
      },
      {
        id: 2,
        solo: true,
        clan: false,
        name: "Ladder - the Winter edition",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-5.webp",
        status: "finished",
        gameMode: "Competitive",
        sponsor:
          "https://res.cloudinary.com/gloot/image/upload/v1637592332/GNOG%20assets/Icons/hyperx_logo.png",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: false,
        progress: 3,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        result: {
          placement: 4,
          movement: 2,
          isPositive: false,
        },
        topPerformers: [5, 1, 4],
      },
    ],
    tournaments: [
      {
        id: 1,
        type: "custom",
        customLogo:
          "https://res.cloudinary.com/gloot/image/upload/v1655121508/Logos%20for%20tournaments/G-Loot_PUBG_S6_-_wordmark_textured_az2upn.webp",
        name: "Season 6 | Grand Final",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1655724447/Backgrounds%20for%20events/platform-banner_4_va1sn1_zrhcim.webp",
        status: "ongoing",
        sponsor: false,
        details: {
          region: "Global",
          date: "2023-07-14T18:00:00Z",
          entryFee: [
            {
              type: "token",
              value: 1,
            },
          ],
          gameType: "Squad FPP",
          leaderboardType: "table",
          availableSlots: 12,
          schedule: [
            {
              type: "BO3",
              value: "Miramar, Erangel, Miramar",
            },
          ],
        },
        rewards: [
          {
            type: "coin",
            value: 120000,
          },
        ],
        prizepool: [
          {
            level: "1st",
            rewards: [
              {
                type: "coin",
                value: 66000,
              },
            ],
          },
          {
            level: "2nd",
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
          },
          {
            level: "3rd",
            rewards: [
              {
                type: "coin",
                value: 16000,
              },
            ],
          },
          {
            level: "4th",
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
          },
        ],
        clans: [1, 2, 3, 4, 5, 6, 7],
        stats: {
          placement: 0,
          kills: 0,
        },
      },
    ],
  },
  {
    id: 3,
    maintenance: false,
    needsSteam: true,
    needsRiot: false,
    isFavorite: false,
    name: "Apex Legends",
    shortName: "Apex Legends",
    slug: "apexlegends",
    type: "Battle royale-hero shooter",
    assets: {
      cover:
        "https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Apex_Legends.jpg",
      heroMission:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-1.webp",
      heroLadder:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        category: 1,
        label: "kills",
        current: 11,
        target: 22,
        isPremium: false,
        xp: 50,
        isVisible: false,
        hasClaimed: false,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_1.webp",
      },
      {
        name: "Get 22 kills",
        category: 1,
        label: "kills",
        current: 11,
        target: 22,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_2.webp",
      },
    ],
  },
  {
    id: 4,
    maintenance: false,
    needsSteam: false,
    needsRiot: false,
    isFavorite: false,
    name: "CS:GO",
    shortName: "CS:GO",
    slug: "csgo",
    type: "FPS",
    assets: {
      cover:
        "https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_CSGO.jpg",
      heroMission:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-csgo-1.webp",
      heroLadder:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-csgo-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-csgo-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        category: 1,
        label: "kills",
        current: 11,
        target: 22,
        isPremium: false,
        xp: 50,
        isVisible: false,
        hasClaimed: false,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-csgo_1.webp",
      },
      {
        name: "Get 22 kills",
        category: 1,
        label: "kills",
        current: 11,
        target: 22,
        isPremium: true,
        xp: 50,
        isVisible: false,
        hasClaimed: false,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-csgo_2.webp",
      },
    ],
  },
  {
    id: 5,
    maintenance: false,
    needsSteam: false,
    needsRiot: false,
    isFavorite: false,
    name: "Dota 2",
    shortName: "Dota 2",
    slug: "dota2",
    type: "MOBA",
    assets: {
      cover:
        "https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Dota_2.jpg",
      heroMission:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-dota2-1.webp",
      heroLadder:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-dota2-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-dota2-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        category: 1,
        label: "kills",
        current: 11,
        target: 22,
        isPremium: false,
        xp: 50,
        isVisible: false,
        hasClaimed: false,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-dota2_1.webp",
      },
      {
        name: "Get 40 kills",
        category: 4,
        label: "kills",
        current: 11,
        target: 22,
        isPremium: true,
        xp: 50,
        isVisible: false,
        hasClaimed: false,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-dota2_2.webp",
      },
    ],
  },
  {
    id: 7,
    maintenance: false,
    needsSteam: false,
    needsRiot: false,
    isFavorite: false,
    name: "Rocket League",
    shortName: "Rocket League",
    slug: "rocketleague",
    type: "Vehicular soccer",
    assets: {
      cover:
        "https://res.cloudinary.com/gloot/image/upload/v1644676999/Marketing/202109_gloot2/Game_cover_Rocket_League.jpg",
      heroMission:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-rocketleague-1.webp",
      heroLadder:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-rocketleague-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-rocketleague-3.webp",
    },
    missions: [
      {
        name: "Score 20 goals",
        category: 3,
        label: "goals",
        current: 20,
        target: 20,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 100,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634600/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_6.webp",
      },
      {
        name: "Score 19 goals",
        category: 1,
        label: "goals",
        current: 3,
        target: 19,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634600/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_5.webp",
      },
      {
        name: "Score 15 goals",
        category: 4,
        label: "goals",
        current: 0,
        target: 15,
        isPremium: false,
        isVisible: true,
        hasClaimed: false,
        xp: 300,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634600/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_4.webp",
      },
      {
        name: "Score 12 goals",
        category: 1,
        label: "goals",
        current: 0,
        target: 12,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634600/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_3.webp",
      },
      {
        name: "Score 10 goals",
        category: 1,
        label: "goals",
        current: 0,
        target: 10,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 50,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634600/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_1.webp",
      },
      {
        name: "Score 20 goals",
        category: 2,
        label: "kills",
        current: 0,
        target: 30,
        isPremium: true,
        isVisible: false,
        hasClaimed: false,
        xp: 100,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634600/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_2.webp",
      },
    ],
    ladders: [
      {
        id: 1,
        solo: true,
        clan: true,
        name: "Competitive Ladder",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1657634600/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_2.webp",
        status: "ongoing",
        gameMode: "Competitive",
        rewards: [
          {
            type: "coin",
            value: 10000,
          },
        ],
        isEnrolled: false,
        progress: 3,
        progressClan: 0,
        soloLeaderboard: [
          {
            user: 1,
            rewards: [
              {
                type: "coin",
                value: 250000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 2,
            rewards: [
              {
                type: "coin",
                value: 200000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 3,
            rewards: [
              {
                type: "coin",
                value: 150000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 8,
            rewards: [
              {
                type: "coin",
                value: 75000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 4,
            rewards: [
              {
                type: "coin",
                value: 50000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 5,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 6,
            rewards: [
              {
                type: "coin",
                value: 25000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            user: 7,
            rewards: [
              {
                type: "coin",
                value: 10000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 8,
            rewards: [
              {
                type: "coin",
                value: 30000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "coin",
                value: 20000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "coin",
                value: 12000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 8000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "coin",
                value: 7000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "coin",
                value: 6000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 97,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 6,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 78,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 7,
            rewards: [
              {
                type: "coin",
                value: 5000,
              },
            ],
            stats: {
              placement: 27,
              ladderPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        soloResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        clanResults: {
          placement: 23,
          points: 84,
          movement: 2,
          isPositive: true,
        },
        topPerformers: [2, 3, 4],
      },
    ],
  },
];

export default {
  dataGames,
};

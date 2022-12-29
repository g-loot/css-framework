export const dataGames = [
  {
    id: 1,
    maintenance: false,
    needsSteam: false,
    isFavorite: true,
    hasReward: false,
    name: "Valorant",
    shortName: "Valorant",
    slug: "valorant",
    type: "FPS hero shooter",
    assets: {
      cover:
        "https://res.cloudinary.com/gloot/image/upload/v1644677000/Marketing/202109_gloot2/Game_cover_Valorant.jpg",
      heroMission:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-1.webp",
      heroBrawl:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 22,
        target: 22,
        ispremium: false,
        isvisible: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_1.webp",
      },
      {
        name: "Get 3 double kills",
        label: "double kills",
        current: 1,
        target: 3,
        ispremium: false,
        isvisible: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_2.webp",
      },
      {
        name: "Get 6 assists",
        label: "assists",
        current: 0,
        target: 6,
        ispremium: false,
        isvisible: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_3.webp",
      },
      {
        name: "Get 5 headshots",
        label: "headshots",
        current: 5,
        target: 5,
        ispremium: true,
        isvisible: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_4.webp",
      },
      {
        name: "Win 6 rounds",
        label: "rounds",
        current: 0,
        target: 6,
        ispremium: true,
        isvisible: false,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_5.webp",
      },
      {
        name: "Get 15 kills",
        label: "kills",
        current: 0,
        target: 15,
        ispremium: true,
        isvisible: false,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_6.webp",
      },
    ],
    brawls: [
      {
        id: 1,
        solo: true,
        clan: false,
        name: "Unrated Brawl",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-4.webp",
        status: "ongoing",
        gameMode: "Competitive",
        sponsor: false,
        rewards: [
          {
            type: "coin",
            value: 10000,
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
              brawlPoints: 123,
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
              brawlPoints: 115,
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
              brawlPoints: 113,
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
              brawlPoints: 108,
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
              brawlPoints: 98,
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
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
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
              brawlPoints: 123,
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
              brawlPoints: 115,
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
              brawlPoints: 113,
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
              brawlPoints: 108,
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
              brawlPoints: 98,
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
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
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
        name: "Brawl - the Winter edition",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-5.webp",
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
        isEnrolled: false,
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
              brawlPoints: 123,
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
              brawlPoints: 115,
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
              brawlPoints: 113,
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
              brawlPoints: 108,
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
              brawlPoints: 98,
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
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 1,
            rewards: [
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 123,
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
              brawlPoints: 115,
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
              brawlPoints: 113,
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
              brawlPoints: 108,
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
              brawlPoints: 98,
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
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
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
        name: "Competitive Brawl",
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
              brawlPoints: 123,
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
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 115,
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
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 113,
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
              {
                type: "coin",
                value: 100000,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 108,
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
              brawlPoints: 98,
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
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
        ],
        clanLeaderboard: [
          {
            clan: 1,
            rewards: [
              {
                type: "ticket",
                value: 1,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [
              {
                type: "ticket",
                value: 1,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [
              {
                type: "ticket",
                value: 1,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [
              {
                type: "ticket",
                value: 1,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [
              {
                type: "ticket",
                value: 1,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [
              {
                type: "ticket",
                value: 1,
              },
            ],
            stats: {
              placement: 27,
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
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
  },
  {
    id: 2,
    maintenance: false,
    needsSteam: true,
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
      heroBrawl:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 22,
        target: 22,
        ispremium: false,
        isvisible: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_1.webp",
      },
      {
        name: "Get 3 double kills",
        label: "double kills",
        current: 3,
        target: 3,
        ispremium: false,
        isvisible: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_2.webp",
      },
      {
        name: "Get 6 assists",
        label: "assists",
        current: 6,
        target: 6,
        ispremium: false,
        isvisible: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_3.webp",
      },
      {
        name: "Get 5 headshots",
        label: "headshots",
        current: 5,
        target: 5,
        ispremium: true,
        isvisible: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_4.webp",
      },
      {
        name: "Win 6 rounds",
        label: "rounds",
        current: 2,
        target: 6,
        ispremium: true,
        isvisible: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_5.webp",
      },
      {
        name: "Get 15 kills",
        label: "kills",
        current: 0,
        target: 15,
        ispremium: true,
        isvisible: false,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_6.webp",
      },
    ],
    brawls: [
      {
        id: 1,
        solo: true,
        clan: true,
        name: "Competitive Brawl",
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
              brawlPoints: 123,
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
              brawlPoints: 115,
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
              brawlPoints: 113,
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
              brawlPoints: 108,
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
              brawlPoints: 98,
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
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
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
              brawlPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
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
        name: "Brawl - the Winter edition",
        cover:
          "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-5.webp",
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
              brawlPoints: 123,
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
              brawlPoints: 115,
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
              brawlPoints: 113,
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
              brawlPoints: 108,
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
              brawlPoints: 98,
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
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
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
              brawlPoints: 123,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 2,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 115,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 3,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 113,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 8,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 108,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 4,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 98,
              matchPlayed: 11,
              tiebreakerPoints: 1402,
              gameScore: 143,
            },
          },
          {
            clan: 5,
            rewards: [],
            stats: {
              placement: 27,
              brawlPoints: 97,
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
              brawlPoints: 78,
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
              brawlPoints: 77,
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
      heroBrawl:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_1.webp",
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_2.webp",
      },
    ],
  },
  {
    id: 4,
    maintenance: false,
    needsSteam: false,
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
      heroBrawl:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-csgo-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-csgo-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-csgo_1.webp",
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-csgo_2.webp",
      },
    ],
  },
  {
    id: 5,
    maintenance: false,
    needsSteam: false,
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
      heroBrawl:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-dota2-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-dota2-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-dota2_1.webp",
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-dota2_2.webp",
      },
    ],
  },
  {
    id: 6,
    maintenance: false,
    needsSteam: false,
    isFavorite: false,
    name: "League of Legends",
    shortName: "League of Legends",
    slug: "leagueoflegends",
    type: "MOBA",
    assets: {
      cover:
        "https://res.cloudinary.com/gloot/image/upload/v1645621586/Marketing/202109_gloot2/Game_cover_League_of_Legends.jpg",
      heroMission:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-1.webp",
      heroBrawl:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-leagueoflegends_1.webp",
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-leagueoflegends_2.webp",
      },
    ],
  },
  {
    id: 7,
    maintenance: false,
    needsSteam: false,
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
      heroBrawl:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-rocketleague-2.webp",
      heroTournament:
        "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-rocketleague-3.webp",
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_1.webp",
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_2.webp",
      },
    ],
  },
];

export default {
  dataGames,
};

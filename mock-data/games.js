const gamesData = [
  {
    id: 0,
    maintenance: false,
    needsSteam: false,
    name: "Valorant",
    shortName: "Valorant",
    slug: "valorant",
    assets: {
      heroMission: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-valorant-1.webp",
      heroBrawl: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-valorant-2.webp",
      heroTournament: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-valorant-3.webp"
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_1.webp"
      },
      {
        name: "Get 3 double kills",
        label: "double kills",
        current: 0,
        target: 3,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_2.webp"
      },
      {
        name: "Get 6 assists",
        label: "assists",
        current: 6,
        target: 6,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_3.webp"
      },
      {
        name: "Get 5 headshots",
        label: "headshots",
        current: 5,
        target: 5,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_4.webp"
      },
      {
        name: "Win 6 rounds",
        label: "rounds",
        current: 2,
        target: 6,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_5.webp"
      },
      {
        name: "Get 15 kills",
        label: "kills",
        current: 11,
        target: 15,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_6.webp"
      }
    ],
    brawls: [
      {
        id: 0,
        solo: true,
        clan: true,
        name: "Competitive Brawl",
        cover: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-valorant-4.webp",
        status: "ongoing",
        gameMode: "Competitive",
        rewards: [
          {
            type: "coin",
            value: 10000
          },
          {
            type: "ticket",
            value: 5
          }
        ],
        progress: 0
      },
      {
        id: 1,
        solo: true,
        clan: true,
        name: "Brawl - the Winter edition",
        cover: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-valorant-5.webp",
        status: "ongoing",
        gameMode: "Competitive",
        rewards: [
          {
            type: "coin",
            value: 10000
          },
          {
            type: "ticket",
            value: 5
          }
        ],
        progress: 2
      }
    ]
  },
  {
    id: 1,
    maintenance: false,
    needsSteam: true,
    name: "PUBG: BATTLEGROUNDS",
    shortName: "PUBG: BATTLEGROUNDS",
    slug: "pubg",
    assets: {
      heroMission: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-pubg-1.webp",
      heroBrawl: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-pubg-2.webp",
      heroTournament: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-pubg-3.webp"
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_1.webp"
      },
      {
        name: "Get 3 double kills",
        label: "double kills",
        current: 0,
        target: 3,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_2.webp"
      },
      {
        name: "Get 6 assists",
        label: "assists",
        current: 6,
        target: 6,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_3.webp"
      },
      {
        name: "Get 5 headshots",
        label: "headshots",
        current: 5,
        target: 5,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_4.webp"
      },
      {
        name: "Win 6 rounds",
        label: "rounds",
        current: 2,
        target: 6,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_5.webp"
      },
      {
        name: "Get 15 kills",
        label: "kills",
        current: 11,
        target: 15,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-pubg_6.webp"
      }
    ],
    brawls: [
      {
        id: 0,
        solo: true,
        clan: true,
        name: "Competitive Brawl",
        cover: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-pubg-4.webp",
        status: "ongoing",
        gameMode: "Competitive",
        rewards: [
          {
            type: "coin",
            value: 10000
          },
          {
            type: "ticket",
            value: 5
          }
        ],
        progress: 0
      }
    ]
  },
  {
    id: 2,
    maintenance: false,
    needsSteam: true,
    name: "Apex Legends",
    shortName: "Apex Legends",
    slug: "apexlegends",
    assets: {
      heroMission: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-1.webp",
      heroBrawl: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-2.webp",
      heroTournament: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-3.webp"
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_1.webp"
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_2.webp"
      }
    ]
  },
  {
    id: 3,
    maintenance: false,
    needsSteam: false,
    name: "CS:GO",
    shortName: "CS:GO",
    slug: "csgo",
    assets: {
      heroMission: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-csgo-1.webp",
      heroBrawl: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-csgo-2.webp",
      heroTournament: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-csgo-3.webp"
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-csgo_1.webp"
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-csgo_2.webp"
      }
    ]
  },
  {
    id: 4,
    maintenance: false,
    needsSteam: false,
    name: "Dota 2",
    shortName: "Dota 2",
    slug: "dota2",
    assets: {
      heroMission: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-dota2-1.webp",
      heroBrawl: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-dota2-2.webp",
      heroTournament: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-dota2-3.webp"
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-dota2_1.webp"
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-dota2_2.webp"
      }
    ]
  },
  {
    id: 5,
    maintenance: false,
    needsSteam: false,
    name: "League of Legends",
    shortName: "League of Legends",
    slug: "leagueoflegends",
    assets: {
      heroMission: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-1.webp",
      heroBrawl: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-2.webp",
      heroTournament: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-leagueoflegends-3.webp"
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-leagueoflegends_1.webp"
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-leagueoflegends_2.webp"
      }
    ]
  },
  {
    id: 6,
    maintenance: false,
    needsSteam: false,
    name: "Rocket League",
    shortName: "Rocket League",
    slug: "rocketleague",
    assets: {
      heroMission: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-rocketleague-1.webp",
      heroBrawl: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-rocketleague-2.webp",
      heroTournament: "https://res.cloudinary.com/gloot/image/upload/v1657636877/Marketing/2022_prototype/DummyContent/banners/banner-rocketleague-3.webp"
    },
    missions: [
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: false,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_1.webp"
      },
      {
        name: "Get 22 kills",
        label: "kills",
        current: 11,
        target: 22,
        ispremium: true,
        xp: 55,
        image: "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-rocketleague_2.webp"
      }
    ]
  }
]
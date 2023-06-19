const valorantLadders = {
  content: [
    {
      id: '1c4910f9-bcc6-4e93-afd6-b4af9a754711',
      gameId: '1892449706',
      details: {
        name: 'Ladder #205',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-02-01T11:10:15.579100Z',
      startsAt: '2022-02-01T08:00:00Z',
      endsAt: '2022-02-08T09:30:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'bd4eb5ee-e571-4d8e-be12-d3494c20ab6a',
      gameId: '1892449706',
      details: {
        name: 'Ladder #205',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-02-01T09:17:11.403056Z',
      startsAt: '2022-02-01T08:00:00Z',
      endsAt: '2022-02-01T09:30:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: '40bc0f42-88ea-4b10-9f7e-606413934835',
      gameId: '1892449706',
      details: {
        name: 'Ladder #206',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-02-08T10:23:40.164379Z',
      startsAt: '2022-02-08T08:00:00Z',
      endsAt: '2022-02-08T10:33:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'ea50c320-7afa-42bc-b0eb-5224e683d558',
      gameId: '1892449706',
      details: {
        name: 'Ladder #206',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-02-10T13:05:08.192515Z',
      startsAt: '2022-02-10T08:00:00Z',
      endsAt: '2022-02-17T10:33:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: '5da23963-b590-48b7-93ad-7e8a01880643',
      gameId: '1892449706',
      details: {
        name: 'Ladder #207',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-02-17T11:23:15.497753Z',
      startsAt: '2022-02-17T08:00:00Z',
      endsAt: '2022-02-19T17:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'd2a177cb-8c5f-46c7-8473-14fd93cd78b3',
      gameId: '1892449706',
      details: {
        name: 'Ladder #207',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-02-18T13:46:56.930528Z',
      startsAt: '2022-02-18T08:00:00Z',
      endsAt: '2022-02-25T17:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'dfe88d0c-7470-478c-a6c7-11a0117501d5',
      gameId: '1892449706',
      details: {
        name: 'Ladder #209',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: ['test2', 'test1'],
      gameTypes: [],
      createdAt: '2022-03-02T15:53:46.696834Z',
      startsAt: '2022-03-01T08:00:00Z',
      endsAt: '2022-03-04T17:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core. core.assists}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.knockDowns}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'e5785bcf-b4be-4195-bbe9-de1c231186fa',
      gameId: '1892449706',
      details: {
        name: 'Ladder #209',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: ['test2', 'test1'],
      gameTypes: [],
      createdAt: '2022-03-02T15:51:16.784255Z',
      startsAt: '2022-03-01T08:00:00Z',
      endsAt: '2022-03-04T17:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core. core.assists}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.knockDowns}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'e7d5a561-5bc6-4378-a431-e75df764d474',
      gameId: '1892449706',
      details: {
        name: 'Ladder #209',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-03-01T09:44:01.471033Z',
      startsAt: '2022-03-01T08:00:00Z',
      endsAt: '2022-03-03T17:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: '4a6f332f-974a-44c2-be4c-4462f161c3c4',
      gameId: '1892449706',
      details: {
        name: 'Ladder #210',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-03-07T13:39:04.990923Z',
      startsAt: '2022-03-07T08:00:00Z',
      endsAt: '2022-03-10T17:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'd1244d54-e25a-4e92-b0c9-6c08dbf65ce3',
      gameId: '1892449706',
      details: {
        name: 'Ladder #210',
        objective: 'this is an objective',
        description: 'This is a placement ladder. Play 3 matches and progress to the ladder and win fett med para',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-04-25T11:00:36.962076Z',
      startsAt: '2022-03-10T08:00:00Z',
      endsAt: '2022-03-10T12:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: true,
      leaderboardCap: 10,
      group: 'harris_test',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'ac8a66ea-bacb-464a-8c62-8412011b7364',
      gameId: '1892449706',
      details: {
        name: 'Ladder #210',
        objective: 'this is an objective',
        description: 'This is a placement ladder. Play 3 matchess and progress to the ladder and win fett med para',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-04-25T10:42:45.385011Z',
      startsAt: '2022-03-10T08:00:00Z',
      endsAt: '2022-03-10T12:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: true,
      leaderboardCap: 10,
      group: 'harris_test',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'ff6e2be5-2134-4ffd-83bf-4c12e9d00e89',
      gameId: '1892449706',
      details: {
        name: 'Ladder #210',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: ['VALORANT__COMPETITIVE'],
      gameTypes: [],
      createdAt: '2022-03-11T14:06:42.097233Z',
      startsAt: '2022-03-11T08:00:00Z',
      endsAt: '2022-03-12T17:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: '9895aeab-39ae-4f2b-99bc-74d234ec0d3d',
      gameId: '1892449706',
      details: {
        name: 'Ladder #211',
        objective: 'this is an objective',
        description:
          'Each week, you have 5 days to play as many Ladder matches as you want. Your 3 best scores will be added together and that total score will be used to rank you in the leaderboard.',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: ['VALORANT__COMPETITIVE'],
      gameTypes: [],
      createdAt: '2022-03-14T09:07:47.988051Z',
      startsAt: '2022-03-14T08:00:00Z',
      endsAt: '2022-03-16T17:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: null,
      group: 'ladder',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'a427c5c5-8ff7-43a8-a1de-dbbab927128f',
      gameId: '1892449706',
      details: {
        name: 'Ladder #217',
        objective: 'this is an objective',
        description: 'This is a ladder. Japp people in your game and win fett med para',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-04-26T11:48:27.378755Z',
      startsAt: '2022-04-25T08:00:00Z',
      endsAt: '2022-04-29T12:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
        {
          value: 'valorant_bucket1',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: false,
      leaderboardCap: 10,
      group: 'harris_test',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: 'f6afcf09-b569-4e21-ab98-a1c25d74b951',
      gameId: '1892449706',
      details: {
        name: 'Ladder #217',
        objective: 'this is an objective',
        description: 'This is a placement ladder. Play 3 matches and progress to the ladder and win fett med para',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-04-25T11:00:57.633488Z',
      startsAt: '2022-04-25T08:00:00Z',
      endsAt: '2022-04-26T12:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: true,
      leaderboardCap: 10,
      group: 'harris_test',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
    {
      id: '17a56de8-72a7-461c-89ec-bff7a98217cc',
      gameId: '1892449706',
      details: {
        name: 'Ladder #217',
        objective: 'this is an objective',
        description: 'This is a ladder. Japp people in your game and win fett med para',
        termsAndConditions: 'terms and conditions',
        imageUrl: 'https: //http.cat/200',
        heroImage: 'https: //coolimage.com/1234.jpg',
        costCenter: 'Product',
        gameModes: 'competitive 2v2 & 3v3 (Ranked only)',
        tiebreakers: null,
      },
      gameModes: [],
      gameTypes: [],
      createdAt: '2022-04-26T12:30:16.316922Z',
      startsAt: '2022-04-25T08:00:00Z',
      endsAt: '2022-04-29T12:00:00Z',
      scoring: [
        {
          index: 0,
          name: 'kills',
          expression: '{core.kills}',
        },
        {
          index: 1,
          name: 'headshots',
          expression: '{core.headshots}',
        },
        {
          index: 2,
          name: 'assists',
          expression: '{core.assists}',
        },
      ],
      labels: {},
      countedNumberOfRounds: 3,
      weight: 0,
      filterKeys: [
        {
          value: 'na-timezone',
        },
        {
          value: 'eu-timezone',
        },
      ],
      rewardAgreementId: '7Al0m9T5XA1oeRMuhvecSz',
      state: 'ENDED',
      refresh: false,
      placement: true,
      leaderboardCap: 10,
      group: 'harris_test',
      reward: {
        id: '7Al0m9T5XA1oeRMuhvecSz',
        closed: false,
        paymentOptions: [
          {
            id: '5KHUilyZ2997OhdYo0aIHi',
            provider: 'COIN',
            parameters: {
              coinId: 'token',
              amount: 1,
              timeout: 604800,
              gameId: '535353',
              itemInfo: {
                name: 'Ladder',
                description: null,
                image: null,
                url: null,
              },
            },
          },
        ],
        rewardRules: [
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 1,
              to: 1,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1ya8TW8ChUW5G93Qf8uB4n',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 24000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 2,
              to: 2,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '1C8vbZMuKTBkNmxfSNheM0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 18600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 3,
              to: 3,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '24fLCG118oqP7xIih61p3q',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 14000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 4,
              to: 4,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3VZpLvTRNSAK7pZoBjdlq6',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 11000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 5,
              to: 5,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '536mqRhRvaogiEJk4pjIHB',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 9000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 6,
              to: 6,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3qjPghr98opiP5Xw6SXlAE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 7200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 7,
              to: 7,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6aeF7Btq8mPJ9BQo7AgY5N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 5700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 8,
              to: 8,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2pbqH0cVfOCs0aqqftbkzj',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 4600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 9,
              to: 9,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2nhzUqzD90pZJ5hbA7iDcb',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 10,
              to: 10,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '4OpUT7IU1yUV8P86Xo9HbF',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 3200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 11,
              to: 11,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5MdXaw44hdBWIByxTDJoIE',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2700,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 12,
              to: 12,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IDlNxhyvIGbW6W96fmjLd',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 13,
              to: 13,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6ZdbPzSgHbpeuPdZFQsE3N',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 2000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 14,
              to: 14,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: 'IdjyoUgz4JjhT5m5Lv43M',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1800,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 15,
              to: 15,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '6rvtByPahrMJVW4poCAdU0',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1600,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 16,
              to: 16,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '13XQ4QOmYyuGKX0ij4RC2p',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1450,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 17,
              to: 17,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '7IzREHPsC6TIVqAKoGOr4I',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1300,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 18,
              to: 18,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '5CugnXMEQPDrfCazEduv3o',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1200,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 19,
              to: 19,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '2sL5R5BA31tcGuHrQTVdSR',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1100,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
          {
            predicate: {
              type: 'LEADERBOARD',
              from: 20,
              to: 20,
            },
            rewardSpecification: {
              providerId: 'COIN',
              rewardId: '3oUMk6yoYvchsTmn9TF8Fx',
              automaticClaim: false,
              rewardData: {
                provider: 'COIN',
                amounts: {
                  coin: 1000,
                },
                gameId: '535353',
                itemInfo: null,
              },
            },
          },
        ],
        createdBy: '5782556301066240',
        prizePool: [
          {
            currency: 'coin',
            amount: 117550,
          },
        ],
      },
      rewardSummary: [
        {
          from: 1,
          to: 1,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 24000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 2,
          to: 2,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 18600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 3,
          to: 3,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 14000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 4,
          to: 4,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 11000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 5,
          to: 5,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 9000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 6,
          to: 6,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 7200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 7,
          to: 7,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 5700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 8,
          to: 8,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 4600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 9,
          to: 9,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 10,
          to: 10,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 3200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 11,
          to: 11,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2700,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 12,
          to: 12,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 13,
          to: 13,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 2000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 14,
          to: 14,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1800,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 15,
          to: 15,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1600,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 16,
          to: 16,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1450,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 17,
          to: 17,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1300,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 18,
          to: 18,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1200,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 19,
          to: 19,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1100,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
        {
          from: 20,
          to: 20,
          rewardData: {
            provider: 'COIN',
            amounts: {
              coin: 1000,
            },
            gameId: '535353',
            itemInfo: null,
          },
        },
      ],
    },
  ],
  pageable: {
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 20,
    paged: true,
    unpaged: false,
  },
  totalPages: 1,
  totalElements: 17,
  last: true,
  size: 20,
  number: 0,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  numberOfElements: 17,
  first: true,
  empty: false,
};

export default valorantLadders;

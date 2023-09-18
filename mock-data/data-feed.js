export const dataFeedItems = [
  {
    id: 0,
    type: "match",
    itemID: 0,
    social: {
      views: [2, 5, 6, 8, 9, 10, 11, 12, 13],
      likes: [7, 2],
      comments: [
        {
          author: 2,
          date: "1 min. ago",
          text: "Well done man!",
          likes: [1, 2, 5, 6],
        },
        {
          author: 5,
          date: "1 min. ago",
          text: "🔥🔥🔥",
          likes: [],
        },
      ],
    },
  },
  {
    id: 1,
    type: "match",
    itemID: 1,
    social: {
      views: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      likes: [1],
      comments: [
        {
          author: 2,
          date: "1 hour ago",
          text: "Better luck next time",
          likes: false,
        },
      ],
    },
  },
  {
    id: 11,
    type: "post",
    title: "Calling all Valorant players",
    text: "Introducing: Big Clan Battle for League of Legends! Compete with your fellow clan members in a month-long, clan-only Ladder. In Big Clan Battle, every clan can submit 20 individual results to decide their total Ladder score and take home the biggest prize pool yet!",
    image: "https://res.cloudinary.com/gloot/image/upload/v1694459768/Stryda/demo/nordic-clash-ad.webp",
    url: "/stryda/clanevents/valorant/0",
    social: {
      views: [8],
      likes: [],
      comments: [
        {
          author: 5,
          date: "3 hours ago",
          text: "Shock dart! Shock dart!",
          likes: [],
        },
        {
          author: 8,
          date: "3 hours ago",
          text: "My heart gets a Shock Bolt when you walk into site.",
          likes: [],
        },
      ],
    },
  },
  {
    id: 2,
    type: "ladders",
    ladders: [
    
      {
        game: "valorant",
        id: 5,
      },
      {
        game: "leagueoflegends",
        id: 0,
      },
      {
        game: "valorant",
        id: 0,
      },
      {
        game: "pubg",
        id: 2,
      },
    ]
  },
  /*
  {
    id: 2,
    type: "live",
    userID: 3,
  },
  */
  {
    id: 3,
    type: "match",
    itemID: 5,
    social: {
      views: [8],
      likes: [],
      comments: [
        {
          author: 5,
          date: "3 hours ago",
          text: "Shock dart! Shock dart!",
          likes: [],
        },
        {
          author: 8,
          date: "3 hours ago",
          text: "My heart gets a Shock Bolt when you walk into site.",
          likes: [],
        },
      ],
    },
  },
  {
    id: 4,
    type: "advertising",
    author: {
      name: "HyperX",
      avatar: "https://res.cloudinary.com/gloot/image/upload/v1694459773/Stryda/demo/hyperX-logo.jpg",
    },
    title: "Cloud III Wireless",
    text: "Cloud III Wireless brings you 120 hours of uninterrupted comfy gaming 😊",
    image: "https://res.cloudinary.com/gloot/image/upload/v1694459771/Stryda/demo/hyperX-ad-1.jpg",
    url: "https://hyperx.com/",
    social: {
      views: [12, 13, 11, 5, 6, 8, 9, 10, 2, 3],
      likes: [7, 2, 5, 6, 8],
      comments: [
        {
          author: 8,
          date: "1 min. ago",
          text: "I like this headset!",
          likes: [1, 2, 5, 6],
        },
        {
          author: 9,
          date: "1 min. ago",
          text: "Yeah me too",
          likes: [],
        },
      ],
    },
  },
  {
    id: 5,
    type: "match",
    itemID: 3,
    social: {
      views: [7, 8, 9, 10, 11, 1, 2],
      likes: [7, 2, 3, 4, 5, 6],
      comments: [],
    },
  },
  {
    id: 6,
    type: "match",
    itemID: 4,
    social: {
      views: [7, 8, 9, 10, 11],
      likes: [],
      comments: [
        {
          author: 5,
          date: "3 hours ago",
          text: "🔥🔥",
          likes: [],
        },
      ],
    },
  },
  {
    id: 7,
    type: "advertising",
    author: {
      name: "Razer",
      avatar: "https://res.cloudinary.com/gloot/image/upload/v1694461288/Stryda/demo/razer-logo.jpg",
    },
    title: "Razer Cobra Pro",
    text: "Tap into a new level of wireless performance with the Razer Cobra Pro. Powered by Razer HyperSpeed Wireless, pair it with the Razer Mouse Dock Pro to unlock a true 4000 Hz polling rate for next-gen responsiveness.",
    image: "https://res.cloudinary.com/gloot/image/upload/v1694459771/Stryda/demo/razer-ad-1.jpg",
    url: "https://razer.com/",
    social: {
      views: [12, 13, 11, 5, 6, 8, 9, 10, 2, 3],
      likes: [7, 2, 5, 6, 8],
      comments: [
        {
          author: 8,
          date: "1 min. ago",
          text: "I like this headset!",
          likes: [1, 2, 5, 6],
        },
        {
          author: 9,
          date: "1 min. ago",
          text: "Yeah me too",
          likes: [],
        },
      ],
    },
  },
  {
    id: 8,
    type: "match",
    itemID: 2,
    social: {
      views: [7, 8, 9, 10, 11],
      likes: [],
      comments: [
        {
          author: 5,
          date: "3 hours ago",
          text: "Boom Boom",
          likes: [],
        },
      ],
    },
  },
  {
    id: 9,
    type: "match",
    itemID: 6,
    social: {
      views: [1,4,5,6],
      likes: [],
      comments: [
        {
          author: 5,
          date: "3 hours ago",
          text: "Boom Boom",
          likes: [],
        },
      ],
    },
  },
  {
    id: 10,
    type: "advertising",
    author: {
      name: "Logitech",
      avatar: "https://res.cloudinary.com/gloot/image/upload/v1694461288/Stryda/demo/logitech-logo.jpg",
    },
    title: "PROX Superlight 2",
    text: "Let's hear it. Which would you add to your setup 🖤 💗 🤍",
    image: "https://res.cloudinary.com/gloot/image/upload/v1694459771/Stryda/demo/logitech-ad-1.jpg",
    url: "https://www.logitechg.com/sv-se/products/gaming-mice/pro-x-superlight-wireless-mouse.html",
    social: {
      views: [5, 6, 7, 11, 2, 3, 3, 10],
      likes: [7, 2, 5, 6, 8],
      comments: [
        {
          author: 9,
          date: "1 min. ago",
          text: "Not a big fan of these 🤮",
          likes: [1, 2, 5, 6],
        },
      ],
    },
  },
];

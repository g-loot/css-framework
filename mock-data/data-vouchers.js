export const dataVouchers = [
  {
    id: 1,
    validity: "United States & Europe",
    image:
      "https://res.cloudinary.com/gloot/image/upload/f_auto/v1677838794/Stryda/shop/giftcards/store_giftcard_riot.jpg",
    url: "riot-games",
    name: "Riot Games",
    description:
      "Want to turn your wins into some sweet skins or even a new character? Choose a Riot Games gift card.",
    sections: [
      {
        id: 1,
        name: "Europe",
        countries: [
          {
            name: "Austria",
            flag: "at",
          },
          {
            name: "Belgium",
            flag: "be",
          },
          {
            name: "Bulgaria",
            flag: "be",
          },
          {
            name: "Cyprus",
            flag: "cy",
          },
          {
            name: "Denmark",
            flag: "dk",
          },
          {
            name: "Estonia",
            flag: "ee",
          },
          {
            name: "Finland",
            flag: "fi",
          },
          {
            name: "France",
            flag: "fr",
          },
          {
            name: "Germany",
            flag: "de",
          },
          {
            name: "Greece",
            flag: "gr",
          },
          {
            name: "Ireland",
            flag: "ie",
          },
          {
            name: "Italy",
            flag: "it",
          },
          {
            name: "Kosovo",
            flag: "xk",
          },
          {
            name: "Latvia",
            flag: "lv",
          },
          {
            name: "Lithuania",
            flag: "lt",
          },
          {
            name: "Luxembourg",
            flag: "lu",
          },
          {
            name: "Malta",
            flag: "mt",
          },
          {
            name: "Netherlands",
            flag: "nl",
          },
          {
            name: "Portugal",
            flag: "pt",
          },
          {
            name: "Slovakia",
            flag: "sk",
          },
          {
            name: "Slovenia",
            flag: "si",
          },
          {
            name: "Spain",
            flag: "es",
          },
          {
            name: "Sweden",
            flag: "se",
          },
          {
            name: "United Kingdom",
            flag: "gb",
          },
        ],
        giftcards: [
          {
            id: 1,
            amount: "5€",
            price: 5500,
          },
          {
            id: 2,
            amount: "10€",
            price: 9000,
          },
          {
            id: 3,
            amount: "20€",
            price: 15000,
          },
          {
            id: 4,
            amount: "50€",
            price: 34000,
          },
          {
            id: 5,
            amount: "100€",
            price: 59000,
          },
        ],
      },
      {
        id: 2,
        name: "United States",
        giftcards: [
          {
            id: 1,
            amount: "$5",
            price: 5500,
          },
          {
            id: 2,
            amount: "$10",
            price: 9000,
          },
          {
            id: 3,
            amount: "$20",
            price: 15000,
          },
          {
            id: 4,
            amount: "$50",
            price: 34000,
          },
          {
            id: 5,
            amount: "$100",
            price: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    validity: "Worldwide",
    image:
      "https://res.cloudinary.com/gloot/image/upload/f_auto/v1677838794/Stryda/shop/giftcards/store_giftcard_amazon.jpg",
    url: "amazon",
    name: "Amazon.com",
    exception:
      "Available worldwide but only redeemable through Amazon US (amazon.com)",
    description:
      "Turn your wins into games, movies, snacks, and more. With an Amazon gift card, you have millions of items to choose from. What will you pick?",
    alert: {
      title: "Please note",
      description:
        "Available worldwide but only redeemable through Amazon US (amazon.com).",
    },
    sections: [
      {
        id: 1,
        name: "Worldwide",
        giftcards: [
          {
            id: 1,
            amount: "$20",
            price: 15000,
          },
          {
            id: 2,
            amount: "$50",
            price: 34000,
          },
          {
            id: 3,
            amount: "$100",
            price: 59000,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    validity: "United States, Europe, Philippines & Brazil",
    image:
      "https://res.cloudinary.com/gloot/image/upload/f_auto/v1677838794/Stryda/shop/giftcards/store_giftcard_steam.jpg",
    url: "steam",
    name: "Steam",
    description:
      "What if playing games could give you new games? When you buy a Steam gift card through Stryda, that’s exactly what happens. Choose from thousands of games, software, and even hardware from Steam.",
    sections: [
      {
        id: 1,
        name: "Europe",
        countries: [
          {
            name: "Austria",
            flag: "at",
          },
          {
            name: "Belgium",
            flag: "be",
          },
          {
            name: "Bulgaria",
            flag: "be",
          },
          {
            name: "Cyprus",
            flag: "cy",
          },
          {
            name: "Denmark",
            flag: "dk",
          },
          {
            name: "Estonia",
            flag: "ee",
          },
          {
            name: "Finland",
            flag: "fi",
          },
          {
            name: "France",
            flag: "fr",
          },
          {
            name: "Germany",
            flag: "de",
          },
          {
            name: "Greece",
            flag: "gr",
          },
          {
            name: "Ireland",
            flag: "ie",
          },
          {
            name: "Italy",
            flag: "it",
          },
          {
            name: "Kosovo",
            flag: "xk",
          },
          {
            name: "Latvia",
            flag: "lv",
          },
          {
            name: "Lithuania",
            flag: "lt",
          },
          {
            name: "Luxembourg",
            flag: "lu",
          },
          {
            name: "Malta",
            flag: "mt",
          },
          {
            name: "Netherlands",
            flag: "nl",
          },
          {
            name: "Portugal",
            flag: "pt",
          },
          {
            name: "Slovakia",
            flag: "sk",
          },
          {
            name: "Slovenia",
            flag: "si",
          },
          {
            name: "Spain",
            flag: "es",
          },
          {
            name: "Sweden",
            flag: "se",
          },
        ],
        giftcards: [
          {
            id: 1,
            amount: "20€",
            price: 16500,
          },
          {
            id: 2,
            amount: "50€",
            price: 38000,
          },
          {
            id: 3,
            amount: "100€",
            price: 65500,
          },
        ],
      },
      {
        id: 2,
        name: "United States",
        giftcards: [
          {
            id: 1,
            amount: "$20",
            price: 15000,
          },
        ],
      },
      {
        id: 3,
        name: "United Kingdom",
        giftcards: [
          {
            id: 1,
            amount: "£20",
            price: 20000,
          },
          {
            id: 2,
            amount: "£50",
            price: 46500,
          },
          {
            id: 3,
            amount: "£100",
            price: 79000,
          },
        ],
      },

      {
        id: 4,
        name: "Brazil",
        giftcards: [
          {
            id: 1,
            amount: "R$20",
            price: 15000,
          },
          {
            id: 2,
            amount: "R$50",
            price: 27000,
          },
        ],
      },
      {
        id: 5,
        name: "Philippines",
        giftcards: [
          {
            id: 1,
            amount: "1000PHP",
            price: 16500,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    validity: "Worldwide",
    image:
      "https://res.cloudinary.com/gloot/image/upload/f_auto/v1677838912/Stryda/shop/giftcards/store_giftcard_drkn.jpg",
    url: "drkn",
    name: "DRKN Gaming Streetwear",
    description:
      "This is not your average gamer gear. DRKN creates chic, fashionable streetwear for everyone from casual gamers to esports enthusiasts. Level-up your look with high-quality clothes from DRKN.",
    sections: [
      {
        id: 1,
        name: "Europe",
        giftcards: [
          {
            id: 1,
            amount: "20€",
            price: 16500,
          },
          {
            id: 2,
            amount: "50€",
            price: 38000,
          },
          {
            id: 3,
            amount: "100€",
            price: 65500,
          },
        ],
      },
      {
        id: 2,
        name: "Rest of the world",
        giftcards: [
          {
            id: 1,
            amount: "$20",
            price: 15000,
          },
          {
            id: 2,
            amount: "$50",
            price: 34000,
          },
          {
            id: 3,
            amount: "$100",
            price: 59000,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    validity: "Worldwide",
    image:
      "https://res.cloudinary.com/gloot/image/upload/f_auto/v1677838794/Stryda/shop/giftcards/store_giftcard_gcoins.jpg",
    url: "pubg",
    name: "PUBG G-COINS",
    description:
      "Turn your hard work and successes into rewards you can enjoy! Will you invest in some new gaming gear or just treat yourself to something you've had your eye on? Earn more coins to spend in the shop by finishing Missions or competing in Ladders.",
    sections: [
      {
        id: 1,
        name: "Worldwide",
        giftcards: [
          {
            id: 1,
            amount: "$10 (1000 G-COINS)",
            price: 9000,
          },
          {
            id: 2,
            amount: "$20 (2000 G-COINS)",
            price: 15000,
          },
        ],
      },
    ],
  },
];

export default {
  dataVouchers,
};

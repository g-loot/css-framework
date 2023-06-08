export const dataPatchNotes = [
  {
    id: 0,
    slug: "1.0.22",
    name: "Patch note 1.0.22",
    sections: [
      {
        id: 0,
        name: "Home",
        notes: [
          {
            id: 0,
            text: "Added a banner to highlight the top 3 placed clans in the <a href='#' class='link'>BIG CLAN BATTLE - May Edition</a>!",
          },
        ],
      },
      {
        id: 1,
        name: "Achievements",
        notes: [
          {
            id: 0,
            text: "Added achievements to the <b>player profile</b>.",
          },
          {
            id: 1,
            text: "Added notifications that shows every time you earn an achievement.",
          },
          {
            id: 2,
            text: "Added your highest leveled achievement to your player card.",
          },
          {
            id: 2,
            text: "Added a banner to promote the release of achievements.",
            image:
              "https://cdn.braze.eu/appboy/communication/marketing/content_cards_message_variations/images/6478915e34c0421749a4ca6b/beb8d4963480ac5543e913fba1d757e23f5d22a7/original.png?1685624261",
          },
        ],
      },
      {
        id: 2,
        name: "Ladders",
        notes: [
          {
            id: 0,
            text: "Made improvements to countdowns shown on ladder cards to be more clear when the countdown is on 7 days.",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    slug: "1.0.21",
    name: "Patch note 1.0.21",
    sections: [
      {
        id: 0,
        name: "General",
        notes: [
          {
            id: 0,
            text: "The <a href='#' class='link'>premium</a> page and the <a href='#' class='link'>how-it-works</a> page can now be reached without logging in to the platform.",
            image:
              "https://res.cloudinary.com/gloot/image/upload/v1680527672/Stryda/illustrations/picture_premium_missions_2.png",
          },
          {
            id: 1,
            text: "SEO improvements adding descriptions and titles to multiple pages.",
          },
        ],
      },
      {
        id: 1,
        name: "Ladders",
        notes: [
          {
            id: 0,
            text: "Performance improvements to enrolling.",
          },
        ],
      },
      {
        id: 2,
        name: "Clan Ladders",
        notes: [
          {
            id: 0,
            text: "Performance improvements to loading.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "1.0.20",
    name: "Patch note 1.0.20",
    sections: [
      {
        id: 0,
        name: "General",
        notes: [
          {
            id: 0,
            text: "Fixed a bug that caused users to get logged out when they shouldnt be i.e after they open their notifications.",
          },
        ],
      },
      {
        id: 1,
        name: "Premium",
        notes: [
          {
            id: 0,
            text: "Changed the color of the avatar frame for <a href='#' class='link'>premium</a> back to purple.",
            image:
              "https://res.cloudinary.com/gloot/image/upload/v1680527489/Stryda/illustrations/picture_premium_ladders_2.png",
          },
        ],
      },
      {
        id: 2,
        name: "Ladder results modal",
        notes: [
          {
            id: 0,
            text: "Added avatar frames and player levels of the top 3 players in the modal.",
          },
          {
            id: 1,
            text: "Fixed a bug that was causing the player card to show behind the modal instead of in front.",
          },
        ],
      },
    ],
  },
];

export default {
  dataPatchNotes,
};

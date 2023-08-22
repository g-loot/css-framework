export const dataFeedItems = [
  {
    id: 0,
    type: "match",
    itemID: 0,
    social: {
      views: [2, 5, 6, 8, 9, 10, 11, 12, 13],
      likes: {
        hasLiked: false,
        users: [1, 2],
      },
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
      likes: {
        hasLiked: false,
        users: [],
      },
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
    id: 2,
    type: "live",
    userID: 3,
  },
  {
    id: 3,
    type: "match",
    itemID: 5,
    social: {
      views: [8],
      likes: {
        hasLiked: false,
        users: [],
      },
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
  },
  {
    id: 5,
    type: "match",
    itemID: 3,
    social: {
      views: [7, 8, 9, 10, 11],
      likes: {
        hasLiked: false,
        users: [1, 2, 3, 4, 5, 6],
      },
      comments: [],
    },
  },
  {
    id: 6,
    type: "match",
    itemID: 4,
    social: {
      views: [7, 8, 9, 10, 11],
      likes: {
        hasLiked: false,
        users: [],
      },
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
  },
  {
    id: 8,
    type: "match",
    itemID: 2,
    social: {
      views: [7, 8, 9, 10, 11],
      likes: {
        hasLiked: false,
        users: [],
      },
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
      likes: {
        hasLiked: true,
        users: [],
      },
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
  },
];

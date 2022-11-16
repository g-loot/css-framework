function getImageUrl(fileName) {
  return `https://res.cloudinary.com/gloot/image/upload/v1668591099/Marketing/2022_VALORANT_agent_generator/images/${fileName}`;
}

export const StatsValorantMaps = [
  {
    id: 0,
    name: 'ascent',
    picturePath: getImageUrl('map-ascent.webp'),
  },
  {
    id: 1,
    name: 'bind',
    picturePath: getImageUrl('map-bind.webp'),
  },
  {
    id: 2,
    name: 'breeze',
    picturePath: getImageUrl('map-breeze.webp'),
  },
  {
    id: 3,
    name: 'fracture',
    picturePath: getImageUrl('map-fracture.webp'),
  },
  {
    id: 4,
    name: 'haven',
    picturePath: getImageUrl('map-haven.webp'),
  },
  {
    id: 5,
    name: 'icebox',
    picturePath: getImageUrl('map-icebox.webp'),
  },
  {
    id: 6,
    name: 'split',
    picturePath: getImageUrl('map-split.webp'),
  },
];

export const StatsValorantRanks = [
  {
    id: 0,
    name: 'iron',
    picturePath: getImageUrl('rank-iron.webp'),
  },
  {
    id: 1,
    name: 'bronze',
    picturePath: getImageUrl('rank-bronze.webp'),
  },
  {
    id: 2,
    name: 'silver',
    picturePath: getImageUrl('rank-silver.webp'),
  },
  {
    id: 3,
    name: 'gold',
    picturePath: getImageUrl('rank-gold.webp'),
  },
  {
    id: 4,
    name: 'platinum',
    picturePath: getImageUrl('rank-platinum.webp'),
  },
  {
    id: 5,
    name: 'diamond',
    picturePath: getImageUrl('rank-diamond.webp'),
  },
  {
    id: 6,
    name: 'immortal',
    picturePath: getImageUrl('rank-immortal.webp'),
  },
  {
    id: 7,
    name: 'radiant',
    picturePath: getImageUrl('rank-radiant.webp'),
  },
];

export const StatsValorantAgents = [
  {
    id: 0,
    name: 'astra',
    role: {
      id: 0,
      name: 'controller',
      color: '#5A15A5',
      picturePath: getImageUrl('role-controller.webp'),
    },
    picturePath: getImageUrl('agent-avatar-astra.webp'),
  },
  {
    id: 1,
    name: 'breach',
    role: {
      id: 2,
      name: 'initiator',
      color: '#E7B633',
      picturePath: getImageUrl('role-initiator.webp'),
    },
    picturePath: getImageUrl('agent-avatar-breach.webp'),
  },
  {
    id: 2,
    name: 'brimstone',
    role: {
      id: 0,
      name: 'controller',
      color: '#5A15A5',
      picturePath: getImageUrl('role-controller.webp'),
    },
    picturePath: getImageUrl('agent-avatar-brimstone.webp'),
  },
  {
    id: 3,
    name: 'chamber',
    role: {
      id: 3,
      name: 'sentinel',
      color: '#941C73',
      picturePath: getImageUrl('role-sentinel.webp'),
    },
    picturePath: getImageUrl('agent-avatar-chamber.webp'),
  },
  {
    id: 4,
    name: 'cypher',
    role: {
      id: 3,
      name: 'sentinel',
      color: '#941C73',
      picturePath: getImageUrl('role-sentinel.webp'),
    },
    picturePath: getImageUrl('agent-avatar-cypher.webp'),
  },
  {
    id: 5,
    name: 'jett',
    role: {
      id: 1,
      name: 'duelist',
      color: '#18990B',
      picturePath: getImageUrl('role-duelist.webp'),
    },
    picturePath: getImageUrl('agent-avatar-jett.webp'),
  },
  {
    id: 6,
    name: 'KAY/O',
    role: {
      id: 2,
      name: 'initiator',
      color: '#E7B633',
      picturePath: getImageUrl('role-initiator.webp'),
    },
    picturePath: getImageUrl('agent-avatar-kayo.webp'),
  },
  {
    id: 7,
    name: 'killjoy',
    role: {
      id: 3,
      name: 'sentinel',
      color: '#941C73',
      picturePath: getImageUrl('role-sentinel.webp'),
    },
    picturePath: getImageUrl('agent-avatar-killjoy.webp'),
  },
  {
    id: 8,
    name: 'neon',
    role: {
      id: 1,
      name: 'duelist',
      color: '#18990B',
      picturePath: getImageUrl('role-duelist.webp'),
    },
    picturePath: getImageUrl('agent-avatar-neon.webp'),
  },
  {
    id: 9,
    name: 'omen',
    role: {
      id: 0,
      name: 'controller',
      color: '#5A15A5',
      picturePath: getImageUrl('role-controller.webp'),
    },
    picturePath: getImageUrl('agent-avatar-omen.webp'),
  },
  {
    id: 10,
    name: 'phoenix',
    role: {
      id: 1,
      name: 'duelist',
      color: '#18990B',
      picturePath: getImageUrl('role-duelist.webp'),
    },
    picturePath: getImageUrl('agent-avatar-phoenix.webp'),
  },
  {
    id: 11,
    name: 'raze',
    role: {
      id: 1,
      name: 'duelist',
      color: '#18990B',
      picturePath: getImageUrl('role-duelist.webp'),
    },
    picturePath: getImageUrl('agent-avatar-raze.webp'),
  },
  {
    id: 12,
    name: 'reyna',
    role: {
      id: 1,
      name: 'duelist',
      color: '#18990B',
      picturePath: getImageUrl('role-duelist.webp'),
    },
    picturePath: getImageUrl('agent-avatar-reyna.webp'),
  },
  {
    id: 13,
    name: 'sage',
    role: {
      id: 3,
      name: 'sentinel',
      color: '#941C73',
      picturePath: getImageUrl('role-sentinel.webp'),
    },
    picturePath: getImageUrl('agent-avatar-sage.webp'),
  },
  {
    id: 14,
    name: 'skye',
    role: {
      id: 2,
      name: 'initiator',
      color: '#E7B633',
      picturePath: getImageUrl('role-initiator.webp'),
    },
    picturePath: getImageUrl('agent-avatar-skye.webp'),
  },
  {
    id: 15,
    name: 'sova',
    role: {
      id: 2,
      name: 'initiator',
      color: '#E7B633',
      picturePath: getImageUrl('role-initiator.webp'),
    },
    picturePath: getImageUrl('agent-avatar-sova.webp'),
  },
  {
    id: 16,
    name: 'viper',
    role: {
      id: 0,
      name: 'controller',
      color: '#5A15A5',
      picturePath: getImageUrl('role-controller.webp'),
    },
    picturePath: getImageUrl('agent-avatar-viper.webp'),
  },
  {
    id: 17,
    name: 'yoru',
    role: {
      id: 1,
      name: 'duelist',
      color: '#18990B',
      picturePath: getImageUrl('role-duelist.webp'),
    },
    picturePath: getImageUrl('agent-avatar-yoru.webp'),
  },
  {
    id: 18,
    name: 'fade',
    role: {
      id: 2,
      name: 'initiator',
      color: '#E7B633',
      picturePath: getImageUrl('role-initiator.webp'),
    },
    picturePath: getImageUrl('agent-avatar-fade.webp'),
  },
];
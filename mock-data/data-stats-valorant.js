function getImageUrl(fileName) {
  return `https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/${fileName}`;
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
  {
    id: 7,
    name: 'pearl',
    picturePath: getImageUrl('map-pearl.webp'),
  },
  {
    id: 8,
    name: 'lotus',
    picturePath: getImageUrl('map-lotus.jpg'),
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
  {
    id: 8,
    name: 'acendant',
    picturePath: getImageUrl('rank-acendant.webp'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-astra.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-breach.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-brimstone.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-chamber.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-cypher.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-jett.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-kayo.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-killjoy.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-neon.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-omen.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-phoenix.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-raze.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-reyna.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-sage.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-skye.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-sova.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-viper.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-yoru.jpg'),
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
    backgroundPath: getImageUrl('valorant-stats-hero-fade.jpg'),
  },
  {
    id: 19,
    name: 'harbor',
    role: {
      id: 0,
      name: 'controller',
      color: '#5A15A5',
      picturePath: getImageUrl('role-controller.webp'),
    },
    picturePath: getImageUrl('agent-avatar-harbor.webp'),
    backgroundPath: getImageUrl('valorant-stats-hero-harbor.jpg'),
  },
];

export const StatsValorantWeapons = [
  {
    id: 0,
    name: 'classic',
    type: 'sidearm',
    picturePath: getImageUrl('weapon-classic.webp'),
  },
  {
    id: 1,
    name: 'shorty',
    type: 'sidearm',
    picturePath: getImageUrl('weapon-shorty.webp'),
  },
  {
    id: 2,
    name: 'frenzy',
    type: 'sidearm',
    picturePath: getImageUrl('weapon-frenzy.webp'),
  },
  {
    id: 3,
    name: 'ghost',
    type: 'sidearm',
    picturePath: getImageUrl('weapon-ghost.webp'),
  },
  {
    id: 4,
    name: 'sheriff',
    type: 'sidearm',
    picturePath: getImageUrl('weapon-sheriff.webp'),
  },
  {
    id: 5,
    name: 'stinger',
    type: 'SMG',
    picturePath: getImageUrl('weapon-stinger.webp'),
  },
  {
    id: 6,
    name: 'spectre',
    type: 'SMG',
    picturePath: getImageUrl('weapon-spectre.webp'),
  },
  {
    id: 7,
    name: 'bucky',
    type: 'shotgun',
    picturePath: getImageUrl('weapon-bucky.webp'),
  },
  {
    id: 8,
    name: 'judge',
    type: 'shotgun',
    picturePath: getImageUrl('weapon-judge.webp'),
  },
  {
    id: 9,
    name: 'bulldog',
    type: 'rifle',
    picturePath: getImageUrl('weapon-bulldog.webp'),
  },
  {
    id: 10,
    name: 'bulldog',
    type: 'rifle',
    picturePath: getImageUrl('weapon-bulldog.webp'),
  },
  {
    id: 11,
    name: 'guardian',
    type: 'rifle',
    picturePath: getImageUrl('weapon-guardian.webp'),
  },
  {
    id: 12,
    name: 'phantom',
    type: 'rifle',
    picturePath: getImageUrl('weapon-phantom.webp'),
  },
  {
    id: 13,
    name: 'vandal',
    type: 'rifle',
    picturePath: getImageUrl('weapon-vandal.webp'),
  },
  {
    id: 14,
    name: 'marshal',
    type: 'sniper rifle',
    picturePath: getImageUrl('weapon-marshal.webp'),
  },
  {
    id: 15,
    name: 'operator',
    type: 'sniper rifle',
    picturePath: getImageUrl('weapon-operator.webp'),
  },
  {
    id: 16,
    name: 'ares',
    type: 'machine gun',
    picturePath: getImageUrl('weapon-ares.webp'),
  },
  {
    id: 17,
    name: 'odin',
    type: 'machine gun',
    picturePath: getImageUrl('weapon-odin.webp'),
  },
  {
    id: 18,
    name: 'tactical knife',
    type: 'melee',
    picturePath: getImageUrl('weapon-tacticalknife.webp'),
  },
  {
    id: 19,
    name: 'golden gun',
    type: 'sidearm',
    picturePath: getImageUrl('weapon-goldengun.png'),
  },
  {
    id: 20,
    name: 'overdrive',
    type: 'melee',
    picturePath: getImageUrl('weapon-overdrive.png'),
  },
];
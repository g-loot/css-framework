function getImageUrl(fileName) {
  return `https://res.cloudinary.com/gloot/image/upload/Stryda/stats/leagueoflegends/${fileName}`;
}

export const StatsLeagueOfLegendsRanks = [
  {
    id: 0,
    name: "Iron",
    picturePath: getImageUrl("rank-iron.png"),
  },
  {
    id: 1,
    name: "Bronze",
    picturePath: getImageUrl("rank-bronze.png"),
  },
  {
    id: 2,
    name: "Silver",
    picturePath: getImageUrl("rank-silver.png"),
  },
  {
    id: 3,
    name: "Gold",
    picturePath: getImageUrl("rank-gold.png"),
  },
  {
    id: 4,
    name: "Platinum",
    picturePath: getImageUrl("rank-platinum.png"),
  },
  {
    id: 5,
    name: "Diamond",
    picturePath: getImageUrl("rank-diamond.png"),
  },
  {
    id: 6,
    name: "Master",
    picturePath: getImageUrl("rank-master.png"),
  },
  {
    id: 7,
    name: "Grandmaster",
    picturePath: getImageUrl("rank-grandmaster.png"),
  },
  {
    id: 8,
    name: "Challenger",
    picturePath: getImageUrl("rank-challenger.png"),
  },
];

export const StatsLeagueOfLegendsGameModes = {
  "CLASSIC": "Classic Summoner's Rift and Twisted Treeline",
  "ODIN": "Dominion/Crystal Scar",
  "ARAM": "ARAM",
  "TUTORIAL": "Tutorial",
  "URF": "URF",
  "DOOMBOTSTEEMO": "Doom Bot",
  "ONEFORALL": "One for All",
  "ASCENSION": "Ascension",
  "FIRSTBLOOD": "Snowdown Showdown",
  "KINGPORO": "Legend of the Poro King",
  "SIEGE": "Nexus Siege",
  "ASSASSINATE": "Blood Hunt Assassin",
  "ARSR": "All Random Summoner's Rift",
  "DARKSTAR": "Dark Star: Singularity",
  "STARGUARDIAN": "Star Guardian Invasion",
  "PROJECT": "PROJECT: Hunters",
  "GAMEMODEX": "Nexus Blitz",
  "ODYSSEY": "Odyssey: Extraction",
  "NEXUSBLITZ": "Nexus Blitz",
  "ULTBOOK": "Ultimate Spellbook"
};

export const StatsLeagueOfLegendsChampions = {
  "266": {
    "name": "Aatrox",
    "image": {
      "full": "Aatrox.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "103": {
    "name": "Ahri",
    "image": {
      "full": "Ahri.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Assassin"
    ]
  },
  "84": {
    "name": "Akali",
    "image": {
      "full": "Akali.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin"
    ]
  },
  "166": {
    "name": "Akshan",
    "image": {
      "full": "Akshan.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Assassin"
    ]
  },
  "12": {
    "name": "Alistar",
    "image": {
      "full": "Alistar.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Support"
    ]
  },
  "32": {
    "name": "Amumu",
    "image": {
      "full": "Amumu.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Mage"
    ]
  },
  "34": {
    "name": "Anivia",
    "image": {
      "full": "Anivia.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "1": {
    "name": "Annie",
    "image": {
      "full": "Annie.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "523": {
    "name": "Aphelios",
    "image": {
      "full": "Aphelios.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "22": {
    "name": "Ashe",
    "image": {
      "full": "Ashe.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Support"
    ]
  },
  "136": {
    "name": "Aurelion Sol",
    "image": {
      "full": "AurelionSol.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "268": {
    "name": "Azir",
    "image": {
      "full": "Azir.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Marksman"
    ]
  },
  "432": {
    "name": "Bard",
    "image": {
      "full": "Bard.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "200": {
    "name": "Bel'Veth",
    "image": {
      "full": "Belveth.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 144,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter"
    ]
  },
  "53": {
    "name": "Blitzcrank",
    "image": {
      "full": "Blitzcrank.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 192,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "63": {
    "name": "Brand",
    "image": {
      "full": "Brand.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 240,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "201": {
    "name": "Braum",
    "image": {
      "full": "Braum.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 288,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Tank"
    ]
  },
  "51": {
    "name": "Caitlyn",
    "image": {
      "full": "Caitlyn.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 336,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "164": {
    "name": "Camille",
    "image": {
      "full": "Camille.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 384,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "69": {
    "name": "Cassiopeia",
    "image": {
      "full": "Cassiopeia.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 432,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "31": {
    "name": "Cho'Gath",
    "image": {
      "full": "Chogath.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 0,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Mage"
    ]
  },
  "42": {
    "name": "Corki",
    "image": {
      "full": "Corki.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 48,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "122": {
    "name": "Darius",
    "image": {
      "full": "Darius.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 96,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "131": {
    "name": "Diana",
    "image": {
      "full": "Diana.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 144,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Mage"
    ]
  },
  "119": {
    "name": "Draven",
    "image": {
      "full": "Draven.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 192,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "36": {
    "name": "Dr. Mundo",
    "image": {
      "full": "DrMundo.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 240,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "245": {
    "name": "Ekko",
    "image": {
      "full": "Ekko.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 288,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Fighter"
    ]
  },
  "60": {
    "name": "Elise",
    "image": {
      "full": "Elise.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 336,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Fighter"
    ]
  },
  "28": {
    "name": "Evelynn",
    "image": {
      "full": "Evelynn.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 384,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Mage"
    ]
  },
  "81": {
    "name": "Ezreal",
    "image": {
      "full": "Ezreal.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 432,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Mage"
    ]
  },
  "9": {
    "name": "Fiddlesticks",
    "image": {
      "full": "Fiddlesticks.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "114": {
    "name": "Fiora",
    "image": {
      "full": "Fiora.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "105": {
    "name": "Fizz",
    "image": {
      "full": "Fizz.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Fighter"
    ]
  },
  "3": {
    "name": "Galio",
    "image": {
      "full": "Galio.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Mage"
    ]
  },
  "41": {
    "name": "Gangplank",
    "image": {
      "full": "Gangplank.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter"
    ]
  },
  "86": {
    "name": "Garen",
    "image": {
      "full": "Garen.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "150": {
    "name": "Gnar",
    "image": {
      "full": "Gnar.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "79": {
    "name": "Gragas",
    "image": {
      "full": "Gragas.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Mage"
    ]
  },
  "104": {
    "name": "Graves",
    "image": {
      "full": "Graves.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "887": {
    "name": "Gwen",
    "image": {
      "full": "Gwen.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "120": {
    "name": "Hecarim",
    "image": {
      "full": "Hecarim.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "74": {
    "name": "Heimerdinger",
    "image": {
      "full": "Heimerdinger.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "420": {
    "name": "Illaoi",
    "image": {
      "full": "Illaoi.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "39": {
    "name": "Irelia",
    "image": {
      "full": "Irelia.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 144,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "427": {
    "name": "Ivern",
    "image": {
      "full": "Ivern.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 192,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "40": {
    "name": "Janna",
    "image": {
      "full": "Janna.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 240,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "59": {
    "name": "Jarvan IV",
    "image": {
      "full": "JarvanIV.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 288,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "24": {
    "name": "Jax",
    "image": {
      "full": "Jax.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 336,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "126": {
    "name": "Jayce",
    "image": {
      "full": "Jayce.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 384,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Marksman"
    ]
  },
  "202": {
    "name": "Jhin",
    "image": {
      "full": "Jhin.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 432,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Mage"
    ]
  },
  "222": {
    "name": "Jinx",
    "image": {
      "full": "Jinx.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 0,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "145": {
    "name": "Kai'Sa",
    "image": {
      "full": "Kaisa.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 48,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "429": {
    "name": "Kalista",
    "image": {
      "full": "Kalista.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 96,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "43": {
    "name": "Karma",
    "image": {
      "full": "Karma.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 144,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "30": {
    "name": "Karthus",
    "image": {
      "full": "Karthus.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 192,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "38": {
    "name": "Kassadin",
    "image": {
      "full": "Kassadin.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 240,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Mage"
    ]
  },
  "55": {
    "name": "Katarina",
    "image": {
      "full": "Katarina.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 288,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Mage"
    ]
  },
  "10": {
    "name": "Kayle",
    "image": {
      "full": "Kayle.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 336,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Support"
    ]
  },
  "141": {
    "name": "Kayn",
    "image": {
      "full": "Kayn.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 384,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "85": {
    "name": "Kennen",
    "image": {
      "full": "Kennen.png",
      "sprite": "champion1.png",
      "group": "champion",
      "x": 432,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Marksman"
    ]
  },
  "121": {
    "name": "Kha'Zix",
    "image": {
      "full": "Khazix.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin"
    ]
  },
  "203": {
    "name": "Kindred",
    "image": {
      "full": "Kindred.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "240": {
    "name": "Kled",
    "image": {
      "full": "Kled.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "96": {
    "name": "Kog'Maw",
    "image": {
      "full": "KogMaw.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Mage"
    ]
  },
  "897": {
    "name": "K'Sante",
    "image": {
      "full": "KSante.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "7": {
    "name": "LeBlanc",
    "image": {
      "full": "Leblanc.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Mage"
    ]
  },
  "64": {
    "name": "Lee Sin",
    "image": {
      "full": "LeeSin.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "89": {
    "name": "Leona",
    "image": {
      "full": "Leona.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Support"
    ]
  },
  "876": {
    "name": "Lillia",
    "image": {
      "full": "Lillia.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Mage"
    ]
  },
  "127": {
    "name": "Lissandra",
    "image": {
      "full": "Lissandra.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "236": {
    "name": "Lucian",
    "image": {
      "full": "Lucian.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "117": {
    "name": "Lulu",
    "image": {
      "full": "Lulu.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "99": {
    "name": "Lux",
    "image": {
      "full": "Lux.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "54": {
    "name": "Malphite",
    "image": {
      "full": "Malphite.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 144,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "90": {
    "name": "Malzahar",
    "image": {
      "full": "Malzahar.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 192,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Assassin"
    ]
  },
  "57": {
    "name": "Maokai",
    "image": {
      "full": "Maokai.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 240,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Mage"
    ]
  },
  "11": {
    "name": "Master Yi",
    "image": {
      "full": "MasterYi.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 288,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Fighter"
    ]
  },
  "902": {
    "name": "Milio",
    "image": {
      "full": "Milio.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 336,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support"
    ]
  },
  "21": {
    "name": "Miss Fortune",
    "image": {
      "full": "MissFortune.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 384,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "62": {
    "name": "Wukong",
    "image": {
      "full": "MonkeyKing.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 432,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "82": {
    "name": "Mordekaiser",
    "image": {
      "full": "Mordekaiser.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 0,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter"
    ]
  },
  "25": {
    "name": "Morgana",
    "image": {
      "full": "Morgana.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 48,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "267": {
    "name": "Nami",
    "image": {
      "full": "Nami.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 96,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "75": {
    "name": "Nasus",
    "image": {
      "full": "Nasus.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 144,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "111": {
    "name": "Nautilus",
    "image": {
      "full": "Nautilus.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 192,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Support"
    ]
  },
  "518": {
    "name": "Neeko",
    "image": {
      "full": "Neeko.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 240,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "76": {
    "name": "Nidalee",
    "image": {
      "full": "Nidalee.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 288,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Mage"
    ]
  },
  "895": {
    "name": "Nilah",
    "image": {
      "full": "Nilah.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 336,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "56": {
    "name": "Nocturne",
    "image": {
      "full": "Nocturne.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 384,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Fighter"
    ]
  },
  "20": {
    "name": "Nunu & Willump",
    "image": {
      "full": "Nunu.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 432,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "2": {
    "name": "Olaf",
    "image": {
      "full": "Olaf.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "61": {
    "name": "Orianna",
    "image": {
      "full": "Orianna.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "516": {
    "name": "Ornn",
    "image": {
      "full": "Ornn.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "80": {
    "name": "Pantheon",
    "image": {
      "full": "Pantheon.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "78": {
    "name": "Poppy",
    "image": {
      "full": "Poppy.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "555": {
    "name": "Pyke",
    "image": {
      "full": "Pyke.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Assassin"
    ]
  },
  "246": {
    "name": "Qiyana",
    "image": {
      "full": "Qiyana.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Fighter"
    ]
  },
  "133": {
    "name": "Quinn",
    "image": {
      "full": "Quinn.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Assassin"
    ]
  },
  "497": {
    "name": "Rakan",
    "image": {
      "full": "Rakan.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support"
    ]
  },
  "33": {
    "name": "Rammus",
    "image": {
      "full": "Rammus.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "421": {
    "name": "Rek'Sai",
    "image": {
      "full": "RekSai.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter"
    ]
  },
  "526": {
    "name": "Rell",
    "image": {
      "full": "Rell.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Support"
    ]
  },
  "888": {
    "name": "Renata Glasc",
    "image": {
      "full": "Renata.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "58": {
    "name": "Renekton",
    "image": {
      "full": "Renekton.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 144,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "107": {
    "name": "Rengar",
    "image": {
      "full": "Rengar.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 192,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Fighter"
    ]
  },
  "92": {
    "name": "Riven",
    "image": {
      "full": "Riven.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 240,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "68": {
    "name": "Rumble",
    "image": {
      "full": "Rumble.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 288,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Mage"
    ]
  },
  "13": {
    "name": "Ryze",
    "image": {
      "full": "Ryze.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 336,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Fighter"
    ]
  },
  "360": {
    "name": "Samira",
    "image": {
      "full": "Samira.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 384,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "113": {
    "name": "Sejuani",
    "image": {
      "full": "Sejuani.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 432,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "235": {
    "name": "Senna",
    "image": {
      "full": "Senna.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 0,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Support"
    ]
  },
  "147": {
    "name": "Seraphine",
    "image": {
      "full": "Seraphine.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 48,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "875": {
    "name": "Sett",
    "image": {
      "full": "Sett.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 96,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "35": {
    "name": "Shaco",
    "image": {
      "full": "Shaco.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 144,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin"
    ]
  },
  "98": {
    "name": "Shen",
    "image": {
      "full": "Shen.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 192,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank"
    ]
  },
  "102": {
    "name": "Shyvana",
    "image": {
      "full": "Shyvana.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 240,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "27": {
    "name": "Singed",
    "image": {
      "full": "Singed.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 288,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "14": {
    "name": "Sion",
    "image": {
      "full": "Sion.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 336,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "15": {
    "name": "Sivir",
    "image": {
      "full": "Sivir.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 384,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "72": {
    "name": "Skarner",
    "image": {
      "full": "Skarner.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 432,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "37": {
    "name": "Sona",
    "image": {
      "full": "Sona.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "16": {
    "name": "Soraka",
    "image": {
      "full": "Soraka.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "50": {
    "name": "Swain",
    "image": {
      "full": "Swain.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Fighter"
    ]
  },
  "517": {
    "name": "Sylas",
    "image": {
      "full": "Sylas.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Assassin"
    ]
  },
  "134": {
    "name": "Syndra",
    "image": {
      "full": "Syndra.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "223": {
    "name": "Tahm Kench",
    "image": {
      "full": "TahmKench.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Tank"
    ]
  },
  "163": {
    "name": "Taliyah",
    "image": {
      "full": "Taliyah.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "91": {
    "name": "Talon",
    "image": {
      "full": "Talon.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin"
    ]
  },
  "44": {
    "name": "Taric",
    "image": {
      "full": "Taric.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Fighter"
    ]
  },
  "17": {
    "name": "Teemo",
    "image": {
      "full": "Teemo.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Assassin"
    ]
  },
  "412": {
    "name": "Thresh",
    "image": {
      "full": "Thresh.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Fighter"
    ]
  },
  "18": {
    "name": "Tristana",
    "image": {
      "full": "Tristana.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Assassin"
    ]
  },
  "48": {
    "name": "Trundle",
    "image": {
      "full": "Trundle.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "23": {
    "name": "Tryndamere",
    "image": {
      "full": "Tryndamere.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 144,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "4": {
    "name": "Twisted Fate",
    "image": {
      "full": "TwistedFate.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 192,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "29": {
    "name": "Twitch",
    "image": {
      "full": "Twitch.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 240,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Assassin"
    ]
  },
  "77": {
    "name": "Udyr",
    "image": {
      "full": "Udyr.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 288,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "6": {
    "name": "Urgot",
    "image": {
      "full": "Urgot.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 336,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "110": {
    "name": "Varus",
    "image": {
      "full": "Varus.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 384,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Mage"
    ]
  },
  "67": {
    "name": "Vayne",
    "image": {
      "full": "Vayne.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 432,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman",
      "Assassin"
    ]
  },
  "45": {
    "name": "Veigar",
    "image": {
      "full": "Veigar.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 0,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "161": {
    "name": "Vel'Koz",
    "image": {
      "full": "Velkoz.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 48,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "711": {
    "name": "Vex",
    "image": {
      "full": "Vex.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 96,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "254": {
    "name": "Vi",
    "image": {
      "full": "Vi.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 144,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "234": {
    "name": "Viego",
    "image": {
      "full": "Viego.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 192,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Fighter"
    ]
  },
  "112": {
    "name": "Viktor",
    "image": {
      "full": "Viktor.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 240,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "8": {
    "name": "Vladimir",
    "image": {
      "full": "Vladimir.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 288,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "106": {
    "name": "Volibear",
    "image": {
      "full": "Volibear.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 336,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "19": {
    "name": "Warwick",
    "image": {
      "full": "Warwick.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 384,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "498": {
    "name": "Xayah",
    "image": {
      "full": "Xayah.png",
      "sprite": "champion4.png",
      "group": "champion",
      "x": 432,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "101": {
    "name": "Xerath",
    "image": {
      "full": "Xerath.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "5": {
    "name": "Xin Zhao",
    "image": {
      "full": "XinZhao.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "157": {
    "name": "Yasuo",
    "image": {
      "full": "Yasuo.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Assassin"
    ]
  },
  "777": {
    "name": "Yone",
    "image": {
      "full": "Yone.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin",
      "Fighter"
    ]
  },
  "83": {
    "name": "Yorick",
    "image": {
      "full": "Yorick.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Fighter",
      "Tank"
    ]
  },
  "350": {
    "name": "Yuumi",
    "image": {
      "full": "Yuumi.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "154": {
    "name": "Zac",
    "image": {
      "full": "Zac.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Tank",
      "Fighter"
    ]
  },
  "238": {
    "name": "Zed",
    "image": {
      "full": "Zed.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Assassin"
    ]
  },
  "221": {
    "name": "Zeri",
    "image": {
      "full": "Zeri.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Marksman"
    ]
  },
  "115": {
    "name": "Ziggs",
    "image": {
      "full": "Ziggs.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage"
    ]
  },
  "26": {
    "name": "Zilean",
    "image": {
      "full": "Zilean.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Support",
      "Mage"
    ]
  },
  "142": {
    "name": "Zoe",
    "image": {
      "full": "Zoe.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  },
  "143": {
    "name": "Zyra",
    "image": {
      "full": "Zyra.png",
      "sprite": "champion5.png",
      "group": "champion",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    },
    "tags": [
      "Mage",
      "Support"
    ]
  }
};

export const StatsLeagueOfLegendsSpells = {
  "21": {
    "id": "SummonerBarrier",
    "name": "Barrier",
    "image": {
      "full": "SummonerBarrier.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1": {
    "id": "SummonerBoost",
    "name": "Cleanse",
    "image": {
      "full": "SummonerBoost.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "14": {
    "id": "SummonerDot",
    "name": "Ignite",
    "image": {
      "full": "SummonerDot.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3": {
    "id": "SummonerExhaust",
    "name": "Exhaust",
    "image": {
      "full": "SummonerExhaust.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4": {
    "id": "SummonerFlash",
    "name": "Flash",
    "image": {
      "full": "SummonerFlash.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "6": {
    "id": "SummonerHaste",
    "name": "Ghost",
    "image": {
      "full": "SummonerHaste.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "7": {
    "id": "SummonerHeal",
    "name": "Heal",
    "image": {
      "full": "SummonerHeal.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "13": {
    "id": "SummonerMana",
    "name": "Clarity",
    "image": {
      "full": "SummonerMana.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "30": {
    "id": "SummonerPoroRecall",
    "name": "To the King!",
    "image": {
      "full": "SummonerPoroRecall.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "31": {
    "id": "SummonerPoroThrow",
    "name": "Poro Toss",
    "image": {
      "full": "SummonerPoroThrow.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "11": {
    "id": "SummonerSmite",
    "name": "Smite",
    "image": {
      "full": "SummonerSmite.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "39": {
    "id": "SummonerSnowURFSnowball_Mark",
    "name": "Mark",
    "image": {
      "full": "SummonerSnowURFSnowball_Mark.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "32": {
    "id": "SummonerSnowball",
    "name": "Mark",
    "image": {
      "full": "SummonerSnowball.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "12": {
    "id": "SummonerTeleport",
    "name": "Teleport",
    "image": {
      "full": "SummonerTeleport.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 144,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "54": {
    "id": "Summoner_UltBookPlaceholder",
    "name": "Placeholder",
    "image": {
      "full": "Summoner_UltBookPlaceholder.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 192,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "55": {
    "id": "Summoner_UltBookSmitePlaceholder",
    "name": "Placeholder and Attack-Smite",
    "image": {
      "full": "Summoner_UltBookSmitePlaceholder.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 240,
      "y": 48,
      "w": 48,
      "h": 48
    }
  }
};

export const StatsLeagueOfLegendsItems = {
  "1001": {
    "name": "Boots",
    "image": {
      "full": "1001.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1004": {
    "name": "Faerie Charm",
    "image": {
      "full": "1004.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1006": {
    "name": "Rejuvenation Bead",
    "image": {
      "full": "1006.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1011": {
    "name": "Giant's Belt",
    "image": {
      "full": "1011.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1018": {
    "name": "Cloak of Agility",
    "image": {
      "full": "1018.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1026": {
    "name": "Blasting Wand",
    "image": {
      "full": "1026.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1027": {
    "name": "Sapphire Crystal",
    "image": {
      "full": "1027.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1028": {
    "name": "Ruby Crystal",
    "image": {
      "full": "1028.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1029": {
    "name": "Cloth Armor",
    "image": {
      "full": "1029.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1031": {
    "name": "Chain Vest",
    "image": {
      "full": "1031.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "1033": {
    "name": "Null-Magic Mantle",
    "image": {
      "full": "1033.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1035": {
    "name": "Emberknife",
    "image": {
      "full": "1035.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1036": {
    "name": "Long Sword",
    "image": {
      "full": "1036.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1037": {
    "name": "Pickaxe",
    "image": {
      "full": "1037.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1038": {
    "name": "B. F. Sword",
    "image": {
      "full": "1038.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1039": {
    "name": "Hailblade",
    "image": {
      "full": "1039.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1040": {
    "name": "Obsidian Edge",
    "image": {
      "full": "1040.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1042": {
    "name": "Dagger",
    "image": {
      "full": "1042.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1043": {
    "name": "Recurve Bow",
    "image": {
      "full": "1043.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1052": {
    "name": "Amplifying Tome",
    "image": {
      "full": "1052.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "1053": {
    "name": "Vampiric Scepter",
    "image": {
      "full": "1053.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1054": {
    "name": "Doran's Shield",
    "image": {
      "full": "1054.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1055": {
    "name": "Doran's Blade",
    "image": {
      "full": "1055.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1056": {
    "name": "Doran's Ring",
    "image": {
      "full": "1056.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1057": {
    "name": "Negatron Cloak",
    "image": {
      "full": "1057.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1058": {
    "name": "Needlessly Large Rod",
    "image": {
      "full": "1058.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1082": {
    "name": "Dark Seal",
    "image": {
      "full": "1082.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1083": {
    "name": "Cull",
    "image": {
      "full": "1083.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1101": {
    "name": "Scorchclaw Pup",
    "image": {
      "full": "1101.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1102": {
    "name": "Gustwalker Hatchling",
    "image": {
      "full": "1102.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "1103": {
    "name": "Mosstomper Seedling",
    "image": {
      "full": "1103.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1104": {
    "name": "Eye of the Herald",
    "image": {
      "full": "1104.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1500": {
    "name": "Penetrating Bullets",
    "image": {
      "full": "1500.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1501": {
    "name": "Fortification",
    "image": {
      "full": "1501.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1502": {
    "name": "Reinforced Armor",
    "image": {
      "full": "1502.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1503": {
    "name": "Warden's Eye",
    "image": {
      "full": "1503.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1504": {
    "name": "Vanguard",
    "image": {
      "full": "1504.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1505": {
    "name": "Lightning Rod",
    "image": {
      "full": "1505.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1506": {
    "name": "Reinforced Armor",
    "image": {
      "full": "1506.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1507": {
    "name": "Overcharged",
    "image": {
      "full": "1507.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "1508": {
    "name": "Anti-tower Socks",
    "image": {
      "full": "1508.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1509": {
    "name": "Gusto",
    "image": {
      "full": "1509.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1510": {
    "name": "Phreakish Gusto",
    "image": {
      "full": "1510.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1511": {
    "name": "Super Mech Armor",
    "image": {
      "full": "1511.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1512": {
    "name": "Super Mech Power Field",
    "image": {
      "full": "1512.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1515": {
    "name": "Turret Plating",
    "image": {
      "full": "1515.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1516": {
    "name": "Structure Bounty",
    "image": {
      "full": "1516.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1517": {
    "name": "Structure Bounty",
    "image": {
      "full": "1517.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1518": {
    "name": "Structure Bounty",
    "image": {
      "full": "1518.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1519": {
    "name": "Structure Bounty",
    "image": {
      "full": "1519.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "1520": {
    "name": "OvererchargedHA",
    "image": {
      "full": "1520.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "1521": {
    "name": "Fortification",
    "image": {
      "full": "1521.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "1522": {
    "name": "Tower Power-Up",
    "image": {
      "full": "1522.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "2003": {
    "name": "Health Potion",
    "image": {
      "full": "2003.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "2010": {
    "name": "Total Biscuit of Everlasting Will",
    "image": {
      "full": "2010.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "2015": {
    "name": "Kircheis Shard",
    "image": {
      "full": "2015.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "2019": {
    "name": "Steel Sigil",
    "image": {
      "full": "2019.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "2031": {
    "name": "Refillable Potion",
    "image": {
      "full": "2031.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "2033": {
    "name": "Corrupting Potion",
    "image": {
      "full": "2033.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "2051": {
    "name": "Guardian's Horn",
    "image": {
      "full": "2051.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "2052": {
    "name": "Poro-Snax",
    "image": {
      "full": "2052.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2055": {
    "name": "Control Ward",
    "image": {
      "full": "2055.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2065": {
    "name": "Shurelya's Battlesong",
    "image": {
      "full": "2065.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2138": {
    "name": "Elixir of Iron",
    "image": {
      "full": "2138.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2139": {
    "name": "Elixir of Sorcery",
    "image": {
      "full": "2139.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2140": {
    "name": "Elixir of Wrath",
    "image": {
      "full": "2140.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2403": {
    "name": "Minion Dematerializer",
    "image": {
      "full": "2403.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2419": {
    "name": "Commencing Stopwatch",
    "image": {
      "full": "2419.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2420": {
    "name": "Stopwatch",
    "image": {
      "full": "2420.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2421": {
    "name": "Broken Stopwatch",
    "image": {
      "full": "2421.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "2422": {
    "name": "Slightly Magical Footwear",
    "image": {
      "full": "2422.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "2423": {
    "name": "Perfectly Timed Stopwatch",
    "image": {
      "full": "2423.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "2424": {
    "name": "Broken Stopwatch",
    "image": {
      "full": "2424.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3001": {
    "name": "Evenshroud",
    "image": {
      "full": "3001.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3003": {
    "name": "Archangel's Staff",
    "image": {
      "full": "3003.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3004": {
    "name": "Manamune",
    "image": {
      "full": "3004.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3006": {
    "name": "Berserker's Greaves",
    "image": {
      "full": "3006.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3009": {
    "name": "Boots of Swiftness",
    "image": {
      "full": "3009.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3011": {
    "name": "Chemtech Putrifier",
    "image": {
      "full": "3011.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3012": {
    "name": "Chalice of Blessing",
    "image": {
      "full": "3012.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3020": {
    "name": "Sorcerer's Shoes",
    "image": {
      "full": "3020.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3023": {
    "name": "Lifewell Pendant",
    "image": {
      "full": "3023.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3024": {
    "name": "Glacial Buckler",
    "image": {
      "full": "3024.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3026": {
    "name": "Guardian Angel",
    "image": {
      "full": "3026.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3031": {
    "name": "Infinity Edge",
    "image": {
      "full": "3031.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3033": {
    "name": "Mortal Reminder",
    "image": {
      "full": "3033.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3035": {
    "name": "Last Whisper",
    "image": {
      "full": "3035.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3036": {
    "name": "Lord Dominik's Regards",
    "image": {
      "full": "3036.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3040": {
    "name": "Seraph's Embrace",
    "image": {
      "full": "3040.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3041": {
    "name": "Mejai's Soulstealer",
    "image": {
      "full": "3041.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3042": {
    "name": "Muramana",
    "image": {
      "full": "3042.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 0,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3044": {
    "name": "Phage",
    "image": {
      "full": "3044.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 48,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3046": {
    "name": "Phantom Dancer",
    "image": {
      "full": "3046.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 96,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3047": {
    "name": "Plated Steelcaps",
    "image": {
      "full": "3047.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 144,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3050": {
    "name": "Zeke's Convergence",
    "image": {
      "full": "3050.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 192,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3051": {
    "name": "Hearthbound Axe",
    "image": {
      "full": "3051.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 240,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3053": {
    "name": "Sterak's Gage",
    "image": {
      "full": "3053.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 288,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3057": {
    "name": "Sheen",
    "image": {
      "full": "3057.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 336,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3065": {
    "name": "Spirit Visage",
    "image": {
      "full": "3065.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 384,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3066": {
    "name": "Winged Moonplate",
    "image": {
      "full": "3066.png",
      "sprite": "item0.png",
      "group": "item",
      "x": 432,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3067": {
    "name": "Kindlegem",
    "image": {
      "full": "3067.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3068": {
    "name": "Sunfire Aegis",
    "image": {
      "full": "3068.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3070": {
    "name": "Tear of the Goddess",
    "image": {
      "full": "3070.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3071": {
    "name": "Black Cleaver",
    "image": {
      "full": "3071.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3072": {
    "name": "Bloodthirster",
    "image": {
      "full": "3072.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3074": {
    "name": "Ravenous Hydra",
    "image": {
      "full": "3074.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3075": {
    "name": "Thornmail",
    "image": {
      "full": "3075.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3076": {
    "name": "Bramble Vest",
    "image": {
      "full": "3076.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3077": {
    "name": "Tiamat",
    "image": {
      "full": "3077.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3078": {
    "name": "Trinity Force",
    "image": {
      "full": "3078.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "3082": {
    "name": "Warden's Mail",
    "image": {
      "full": "3082.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3083": {
    "name": "Warmog's Armor",
    "image": {
      "full": "3083.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3084": {
    "name": "Heartsteel",
    "image": {
      "full": "3084.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3085": {
    "name": "Runaan's Hurricane",
    "image": {
      "full": "3085.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3086": {
    "name": "Zeal",
    "image": {
      "full": "3086.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3087": {
    "name": "Statikk Shiv",
    "image": {
      "full": "3087.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3089": {
    "name": "Rabadon's Deathcap",
    "image": {
      "full": "3089.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3091": {
    "name": "Wit's End",
    "image": {
      "full": "3091.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3094": {
    "name": "Rapid Firecannon",
    "image": {
      "full": "3094.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3095": {
    "name": "Stormrazor",
    "image": {
      "full": "3095.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "3100": {
    "name": "Lich Bane",
    "image": {
      "full": "3100.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3102": {
    "name": "Banshee's Veil",
    "image": {
      "full": "3102.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3105": {
    "name": "Aegis of the Legion",
    "image": {
      "full": "3105.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3107": {
    "name": "Redemption",
    "image": {
      "full": "3107.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3108": {
    "name": "Fiendish Codex",
    "image": {
      "full": "3108.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3109": {
    "name": "Knight's Vow",
    "image": {
      "full": "3109.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3110": {
    "name": "Frozen Heart",
    "image": {
      "full": "3110.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3111": {
    "name": "Mercury's Treads",
    "image": {
      "full": "3111.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3112": {
    "name": "Guardian's Orb",
    "image": {
      "full": "3112.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3113": {
    "name": "Aether Wisp",
    "image": {
      "full": "3113.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "3114": {
    "name": "Forbidden Idol",
    "image": {
      "full": "3114.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3115": {
    "name": "Nashor's Tooth",
    "image": {
      "full": "3115.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3116": {
    "name": "Rylai's Crystal Scepter",
    "image": {
      "full": "3116.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3117": {
    "name": "Mobility Boots",
    "image": {
      "full": "3117.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3119": {
    "name": "Winter's Approach",
    "image": {
      "full": "3119.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3121": {
    "name": "Fimbulwinter",
    "image": {
      "full": "3121.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3123": {
    "name": "Executioner's Calling",
    "image": {
      "full": "3123.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3124": {
    "name": "Guinsoo's Rageblade",
    "image": {
      "full": "3124.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3133": {
    "name": "Caulfield's Warhammer",
    "image": {
      "full": "3133.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3134": {
    "name": "Serrated Dirk",
    "image": {
      "full": "3134.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "3135": {
    "name": "Void Staff",
    "image": {
      "full": "3135.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3139": {
    "name": "Mercurial Scimitar",
    "image": {
      "full": "3139.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3140": {
    "name": "Quicksilver Sash",
    "image": {
      "full": "3140.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3142": {
    "name": "Youmuu's Ghostblade",
    "image": {
      "full": "3142.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3143": {
    "name": "Randuin's Omen",
    "image": {
      "full": "3143.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3145": {
    "name": "Hextech Alternator",
    "image": {
      "full": "3145.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3152": {
    "name": "Hextech Rocketbelt",
    "image": {
      "full": "3152.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3153": {
    "name": "Blade of The Ruined King",
    "image": {
      "full": "3153.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3155": {
    "name": "Hexdrinker",
    "image": {
      "full": "3155.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3156": {
    "name": "Maw of Malmortius",
    "image": {
      "full": "3156.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "3157": {
    "name": "Zhonya's Hourglass",
    "image": {
      "full": "3157.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3158": {
    "name": "Ionian Boots of Lucidity",
    "image": {
      "full": "3158.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3161": {
    "name": "Spear Of Shojin",
    "image": {
      "full": "3161.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3165": {
    "name": "Morellonomicon",
    "image": {
      "full": "3165.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3177": {
    "name": "Guardian's Blade",
    "image": {
      "full": "3177.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3179": {
    "name": "Umbral Glaive",
    "image": {
      "full": "3179.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3181": {
    "name": "Hullbreaker",
    "image": {
      "full": "3181.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3184": {
    "name": "Guardian's Hammer",
    "image": {
      "full": "3184.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3190": {
    "name": "Locket of the Iron Solari",
    "image": {
      "full": "3190.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3191": {
    "name": "Seeker's Armguard",
    "image": {
      "full": "3191.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "3193": {
    "name": "Gargoyle Stoneplate",
    "image": {
      "full": "3193.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3211": {
    "name": "Spectre's Cowl",
    "image": {
      "full": "3211.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3222": {
    "name": "Mikael's Blessing",
    "image": {
      "full": "3222.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3330": {
    "name": "Scarecrow Effigy",
    "image": {
      "full": "3330.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3340": {
    "name": "Stealth Ward",
    "image": {
      "full": "3340.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3363": {
    "name": "Farsight Alteration",
    "image": {
      "full": "3363.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3364": {
    "name": "Oracle Lens",
    "image": {
      "full": "3364.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3400": {
    "name": "Your Cut",
    "image": {
      "full": "3400.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3504": {
    "name": "Ardent Censer",
    "image": {
      "full": "3504.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3508": {
    "name": "Essence Reaver",
    "image": {
      "full": "3508.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "3513": {
    "name": "Eye of the Herald",
    "image": {
      "full": "3513.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3599": {
    "name": "Kalista's Black Spear",
    "image": {
      "full": "3599.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3600": {
    "name": "Kalista's Black Spear",
    "image": {
      "full": "3600.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3742": {
    "name": "Dead Man's Plate",
    "image": {
      "full": "3742.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3748": {
    "name": "Titanic Hydra",
    "image": {
      "full": "3748.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3801": {
    "name": "Crystalline Bracer",
    "image": {
      "full": "3801.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3802": {
    "name": "Lost Chapter",
    "image": {
      "full": "3802.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3803": {
    "name": "Catalyst of Aeons",
    "image": {
      "full": "3803.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3814": {
    "name": "Edge of Night",
    "image": {
      "full": "3814.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3850": {
    "name": "Spellthief's Edge",
    "image": {
      "full": "3850.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "3851": {
    "name": "Frostfang",
    "image": {
      "full": "3851.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3853": {
    "name": "Shard of True Ice",
    "image": {
      "full": "3853.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3854": {
    "name": "Steel Shoulderguards",
    "image": {
      "full": "3854.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3855": {
    "name": "Runesteel Spaulders",
    "image": {
      "full": "3855.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3857": {
    "name": "Pauldrons of Whiterock",
    "image": {
      "full": "3857.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3858": {
    "name": "Relic Shield",
    "image": {
      "full": "3858.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3859": {
    "name": "Targon's Buckler",
    "image": {
      "full": "3859.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3860": {
    "name": "Bulwark of the Mountain",
    "image": {
      "full": "3860.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3862": {
    "name": "Spectral Sickle",
    "image": {
      "full": "3862.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3863": {
    "name": "Harrowing Crescent",
    "image": {
      "full": "3863.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 384,
      "w": 48,
      "h": 48
    }
  },
  "3864": {
    "name": "Black Mist Scythe",
    "image": {
      "full": "3864.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 0,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3901": {
    "name": "<rarityLegendary>Fire at Will</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
    "image": {
      "full": "3901.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 48,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3902": {
    "name": "<rarityLegendary>Death's Daughter</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
    "image": {
      "full": "3902.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 96,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3903": {
    "name": "<rarityLegendary>Raise Morale</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
    "image": {
      "full": "3903.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 144,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "3916": {
    "name": "Oblivion Orb",
    "image": {
      "full": "3916.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 192,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "4005": {
    "name": "Imperial Mandate",
    "image": {
      "full": "4005.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 240,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "4401": {
    "name": "Force of Nature",
    "image": {
      "full": "4401.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 288,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "4403": {
    "name": "The Golden Spatula",
    "image": {
      "full": "4403.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 336,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "4628": {
    "name": "Horizon Focus",
    "image": {
      "full": "4628.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 384,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "4629": {
    "name": "Cosmic Drive",
    "image": {
      "full": "4629.png",
      "sprite": "item1.png",
      "group": "item",
      "x": 432,
      "y": 432,
      "w": 48,
      "h": 48
    }
  },
  "4630": {
    "name": "Blighting Jewel",
    "image": {
      "full": "4630.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4632": {
    "name": "Verdant Barrier",
    "image": {
      "full": "4632.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 48,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4633": {
    "name": "Riftmaker",
    "image": {
      "full": "4633.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 96,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4635": {
    "name": "Leeching Leer",
    "image": {
      "full": "4635.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 144,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4636": {
    "name": "Night Harvester",
    "image": {
      "full": "4636.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4637": {
    "name": "Demonic Embrace",
    "image": {
      "full": "4637.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 240,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4638": {
    "name": "Watchful Wardstone",
    "image": {
      "full": "4638.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 288,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4641": {
    "name": "Stirring Wardstone",
    "image": {
      "full": "4641.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 336,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4642": {
    "name": "Bandleglass Mirror",
    "image": {
      "full": "4642.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 384,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4643": {
    "name": "Vigilant Wardstone",
    "image": {
      "full": "4643.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    }
  },
  "4644": {
    "name": "Crown of the Shattered Queen",
    "image": {
      "full": "4644.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 0,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "4645": {
    "name": "Shadowflame",
    "image": {
      "full": "4645.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 48,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "6029": {
    "name": "Ironspike Whip",
    "image": {
      "full": "6029.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 96,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "6035": {
    "name": "Silvermere Dawn",
    "image": {
      "full": "6035.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 144,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "6333": {
    "name": "Death's Dance",
    "image": {
      "full": "6333.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 192,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "6609": {
    "name": "Chempunk Chainsword",
    "image": {
      "full": "6609.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 240,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "6616": {
    "name": "Staff of Flowing Water",
    "image": {
      "full": "6616.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 288,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "6617": {
    "name": "Moonstone Renewer",
    "image": {
      "full": "6617.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 336,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "6620": {
    "name": "Echoes of Helia",
    "image": {
      "full": "6620.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 384,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "6630": {
    "name": "Goredrinker",
    "image": {
      "full": "6630.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 432,
      "y": 48,
      "w": 48,
      "h": 48
    }
  },
  "6631": {
    "name": "Stridebreaker",
    "image": {
      "full": "6631.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 0,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6632": {
    "name": "Divine Sunderer",
    "image": {
      "full": "6632.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 48,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6653": {
    "name": "Liandry's Anguish",
    "image": {
      "full": "6653.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 96,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6655": {
    "name": "Luden's Tempest",
    "image": {
      "full": "6655.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 144,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6656": {
    "name": "Everfrost",
    "image": {
      "full": "6656.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 192,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6657": {
    "name": "Rod of Ages",
    "image": {
      "full": "6657.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 240,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6660": {
    "name": "Bami's Cinder",
    "image": {
      "full": "6660.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 288,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6662": {
    "name": "Iceborn Gauntlet",
    "image": {
      "full": "6662.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 336,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6664": {
    "name": "Turbo Chemtank",
    "image": {
      "full": "6664.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 384,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6665": {
    "name": "Jak'Sho, The Protean",
    "image": {
      "full": "6665.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 432,
      "y": 96,
      "w": 48,
      "h": 48
    }
  },
  "6667": {
    "name": "Radiant Virtue",
    "image": {
      "full": "6667.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 0,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6670": {
    "name": "Noonquiver",
    "image": {
      "full": "6670.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 48,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6671": {
    "name": "Galeforce",
    "image": {
      "full": "6671.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 96,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6672": {
    "name": "Kraken Slayer",
    "image": {
      "full": "6672.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 144,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6673": {
    "name": "Immortal Shieldbow",
    "image": {
      "full": "6673.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 192,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6675": {
    "name": "Navori Quickblades",
    "image": {
      "full": "6675.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 240,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6676": {
    "name": "The Collector",
    "image": {
      "full": "6676.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 288,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6677": {
    "name": "Rageknife",
    "image": {
      "full": "6677.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 336,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6691": {
    "name": "Duskblade of Draktharr",
    "image": {
      "full": "6691.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 384,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6692": {
    "name": "Eclipse",
    "image": {
      "full": "6692.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 432,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  "6693": {
    "name": "Prowler's Claw",
    "image": {
      "full": "6693.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 0,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "6694": {
    "name": "Serylda's Grudge",
    "image": {
      "full": "6694.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 48,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "6695": {
    "name": "Serpent's Fang",
    "image": {
      "full": "6695.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 96,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "6696": {
    "name": "Axiom Arc",
    "image": {
      "full": "6696.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 144,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "7000": {
    "name": "Sandshrike's Claw",
    "image": {
      "full": "7000.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 192,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "7001": {
    "name": "Syzygy",
    "image": {
      "full": "7001.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 240,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "7002": {
    "name": "Draktharr's Shadowcarver",
    "image": {
      "full": "7002.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 288,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "7005": {
    "name": "Frozen Fist",
    "image": {
      "full": "7005.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 336,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "7006": {
    "name": "Typhoon",
    "image": {
      "full": "7006.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 384,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "7007": {
    "name": "Wyrmfallen Sacrifice",
    "image": {
      "full": "7007.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 432,
      "y": 192,
      "w": 48,
      "h": 48
    }
  },
  "7008": {
    "name": "Bloodward",
    "image": {
      "full": "7008.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 0,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7009": {
    "name": "Icathia's Curse",
    "image": {
      "full": "7009.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 48,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7010": {
    "name": "Vespertide",
    "image": {
      "full": "7010.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 96,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7011": {
    "name": "Upgraded Aeropack",
    "image": {
      "full": "7011.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 144,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7012": {
    "name": "Liandry's Lament",
    "image": {
      "full": "7012.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 192,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7013": {
    "name": "Eye of Luden",
    "image": {
      "full": "7013.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 240,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7014": {
    "name": "Eternal Winter",
    "image": {
      "full": "7014.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 288,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7015": {
    "name": "Ceaseless Hunger",
    "image": {
      "full": "7015.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 336,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7016": {
    "name": "Dreamshatter",
    "image": {
      "full": "7016.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 384,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7017": {
    "name": "Deicide",
    "image": {
      "full": "7017.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 432,
      "y": 240,
      "w": 48,
      "h": 48
    }
  },
  "7018": {
    "name": "Infinity Force",
    "image": {
      "full": "7018.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 0,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7019": {
    "name": "Reliquary of the Golden Dawn",
    "image": {
      "full": "7019.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 48,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7020": {
    "name": "Shurelya's Requiem",
    "image": {
      "full": "7020.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 96,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7021": {
    "name": "Starcaster",
    "image": {
      "full": "7021.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 144,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7022": {
    "name": "Seat of Command",
    "image": {
      "full": "7022.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 192,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7023": {
    "name": "Equinox",
    "image": {
      "full": "7023.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 240,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7024": {
    "name": "Caesura",
    "image": {
      "full": "7024.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 288,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7025": {
    "name": "Leviathan",
    "image": {
      "full": "7025.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 336,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7026": {
    "name": "The Unspoken Parasite",
    "image": {
      "full": "7026.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 384,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7027": {
    "name": "Primordial Dawn",
    "image": {
      "full": "7027.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 432,
      "y": 288,
      "w": 48,
      "h": 48
    }
  },
  "7028": {
    "name": "Infinite Convergence",
    "image": {
      "full": "7028.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 0,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "7029": {
    "name": "Youmuu's Wake",
    "image": {
      "full": "7029.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 48,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "7030": {
    "name": "Seething Sorrow",
    "image": {
      "full": "7030.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 96,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "7031": {
    "name": "Edge of Finality",
    "image": {
      "full": "7031.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 144,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "7032": {
    "name": "Flicker",
    "image": {
      "full": "7032.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 192,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "7033": {
    "name": "Cry of the Shrieking City",
    "image": {
      "full": "7033.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 240,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "7050": {
    "name": "Gangplank Placeholder",
    "image": {
      "full": "7050.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 288,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "8001": {
    "name": "Anathema's Chains",
    "image": {
      "full": "8001.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 336,
      "y": 336,
      "w": 48,
      "h": 48
    }
  },
  "8020": {
    "name": "Abyssal Mask",
    "image": {
      "full": "8020.png",
      "sprite": "item2.png",
      "group": "item",
      "x": 384,
      "y": 336,
      "w": 48,
      "h": 48
    }
  }
};
export const pokemons_ = [
  {
    id: 25,
    name: {
      english: "Pikachu",
      japanese: "ピカチュウ",
      chinese: "皮卡丘",
      french: "Pikachu",
    },
    type: ["Electric"],
    base: {
      HP: 35,
      Attack: 55,
      Defense: 40,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 90,
    },
    species: "Mouse Pokémon",
    description:
      "While sleeping, it generates electricity in the sacs in its cheeks. If it’s not getting enough sleep, it will be able to use only weak electricity.",
    evolution: {
      prev: ["172", "high Friendship"],
      next: [["26", "use Thunder Stone"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6 kg",
      egg: ["Field", "Fairy"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/025.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/025.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/025.png",
    },
  },
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
      french: "Bulbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Seed Pokémon",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    evolution: { next: [["2", "Level 16"]] },
    profile: {
      height: "0.7 m",
      weight: "6.9 kg",
      egg: ["Monster", "Grass"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
    },
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草",
      french: "Herbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 60,
    },
    species: "Seed Pokémon",
    description:
      "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.",
    evolution: { prev: ["1", "Level 16"], next: [["3", "Level 32"]] },
    profile: {
      height: "1 m",
      weight: "13 kg",
      egg: ["Monster", "Grass"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/002.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/002.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
    },
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
      japanese: "フシギバナ",
      chinese: "妙蛙花",
      french: "Florizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 80,
    },
    species: "Seed Pokémon",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    evolution: { prev: ["2", "Level 32"] },
    profile: {
      height: "2 m",
      weight: "100 kg",
      egg: ["Monster", "Grass"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/003.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/003.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
    },
  },
  {
    id: 4,
    name: {
      english: "Charmander",
      japanese: "ヒトカゲ",
      chinese: "小火龙",
      french: "Salamèche",
    },
    type: ["Fire"],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Lizard Pokémon",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    evolution: { next: [["5", "Level 16"]] },
    profile: {
      height: "0.6 m",
      weight: "8.5 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/004.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/004.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png",
    },
  },
  {
    id: 5,
    name: {
      english: "Charmeleon",
      japanese: "リザード",
      chinese: "火恐龙",
      french: "Reptincel",
    },
    type: ["Fire"],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      Speed: 80,
    },
    species: "Flame Pokémon",
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    evolution: { prev: ["4", "Level 16"], next: [["6", "Level 36"]] },
    profile: {
      height: "1.1 m",
      weight: "19 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/005.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/005.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png",
    },
  },
  {
    id: 6,
    name: {
      english: "Charizard",
      japanese: "リザードン",
      chinese: "喷火龙",
      french: "Dracaufeu",
    },
    type: ["Fire", "Flying"],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      Speed: 100,
    },
    species: "Flame Pokémon",
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    evolution: { prev: ["5", "Level 36"] },
    profile: {
      height: "1.7 m",
      weight: "90.5 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/006.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/006.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png",
    },
  },
  {
    id: 7,
    name: {
      english: "Squirtle",
      japanese: "ゼニガメ",
      chinese: "杰尼龟",
      french: "Carapuce",
    },
    type: ["Water"],
    base: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      Speed: 43,
    },
    species: "Tiny Turtle Pokémon",
    description:
      "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    evolution: { next: [["8", "Level 16"]] },
    profile: {
      height: "0.5 m",
      weight: "9 kg",
      egg: ["Monster", "Water 1"],
      ability: [
        ["Torrent", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/007.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/007.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/007.png",
    },
  },
  {
    id: 8,
    name: {
      english: "Wartortle",
      japanese: "カメール",
      chinese: "卡咪龟",
      french: "Carabaffe",
    },
    type: ["Water"],
    base: {
      HP: 59,
      Attack: 63,
      Defense: 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      Speed: 58,
    },
    species: "Turtle Pokémon",
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.",
    evolution: { prev: ["7", "Level 16"], next: [["9", "Level 36"]] },
    profile: {
      height: "1 m",
      weight: "22.5 kg",
      egg: ["Monster", "Water 1"],
      ability: [
        ["Torrent", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/008.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/008.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/008.png",
    },
  },
  {
    id: 9,
    name: {
      english: "Blastoise",
      japanese: "カメックス",
      chinese: "水箭龟",
      french: "Tortank",
    },
    type: ["Water"],
    base: {
      HP: 79,
      Attack: 83,
      Defense: 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      Speed: 78,
    },
    species: "Shellfish Pokémon",
    description:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    evolution: { prev: ["8", "Level 36"] },
    profile: {
      height: "1.6 m",
      weight: "85.5 kg",
      egg: ["Monster", "Water 1"],
      ability: [
        ["Torrent", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/009.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/009.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/009.png",
    },
  },
  {
    id: 10,
    name: {
      english: "Caterpie",
      japanese: "キャタピー",
      chinese: "绿毛虫",
      french: "Chenipan",
    },
    type: ["Bug"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      Speed: 45,
    },
    species: "Worm Pokémon",
    description:
      "Its body is soft and weak. In nature, its perpetual fate is to be seen by others as food.",
    evolution: { next: [["11", "Level 7"]] },
    profile: {
      height: "0.3 m",
      weight: "2.9 kg",
      egg: ["Bug"],
      ability: [
        ["Shield Dust", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/010.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/010.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/010.png",
    },
  },
];

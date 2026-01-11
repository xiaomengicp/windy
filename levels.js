const LEVELS_DATA = [
  {
    "id": 1,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [],
    "blockages": [
      {
        "col": 3,
        "row": 0,
        "type": "static",
        "id": 1
      },
      {
        "col": 2,
        "row": 1,
        "type": "static",
        "id": 2
      },
      {
        "col": 3,
        "row": 2,
        "type": "static",
        "id": 3
      },
      {
        "col": 3,
        "row": 3,
        "type": "static",
        "id": 4
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "The wind begins its journey here."
  },
  {
    "id": 2,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 3,
        "row": 0
      },
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 2,
        "row": 3
      }
    ],
    "blockages": [
      {
        "col": 1,
        "row": 2,
        "type": "static",
        "id": 1
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "A gentle breeze can move the world."
  },
  {
    "id": 3,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 3,
        "row": 0
      },
      {
        "col": 3,
        "row": 2
      }
    ],
    "blockages": [
      {
        "col": 2,
        "row": 1,
        "type": "static",
        "id": 1
      },
      {
        "col": 2,
        "row": 3,
        "type": "static",
        "id": 2
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [
      {
        "col": 3,
        "row": 3
      }
    ],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "Whispers guide her through the dark."
  },
  {
    "id": 4,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [],
    "blockages": [
      {
        "col": 2,
        "row": 2,
        "type": "static",
        "id": 1
      }
    ],
    "gaps": [
      {
        "col": 3,
        "row": 0
      },
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 3,
        "row": 2
      }
    ],
    "movables": [
      {
        "col": 1,
        "row": 3,
        "type": "plank"
      }
    ],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "Paths open where the air flows free."
  },
  {
    "id": 5,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 3,
        "row": 0
      },
      {
        "col": 2,
        "row": 1
      }
    ],
    "blockages": [
      {
        "col": 0,
        "row": 2,
        "type": "static",
        "id": 1
      },
      {
        "col": 1,
        "row": 3,
        "type": "static",
        "id": 2
      },
      {
        "col": 3,
        "row": 3,
        "type": "static",
        "id": 3
      }
    ],
    "gaps": [
      {
        "col": 3,
        "row": 2
      }
    ],
    "movables": [
      {
        "col": 0,
        "row": 3,
        "type": "plank"
      }
    ],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "Strength is not force, but persistence."
  },
  {
    "id": 6,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [],
    "blockages": [],
    "gaps": [
      {
        "col": 0,
        "row": 0
      },
      {
        "col": 3,
        "row": 0
      },
      {
        "col": 1,
        "row": 1
      },
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 3,
        "row": 2
      },
      {
        "col": 0,
        "row": 3
      },
      {
        "col": 1,
        "row": 3
      }
    ],
    "movables": [
      {
        "col": 1,
        "row": 0,
        "type": "plank"
      }
    ],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "The stone remembers the touch of air."
  },
  {
    "id": 7,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 1,
        "row": 1
      }
    ],
    "blockages": [
      {
        "col": 1,
        "row": 2,
        "type": "static",
        "id": 1
      }
    ],
    "gaps": [
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 3,
        "row": 2
      }
    ],
    "movables": [
      {
        "col": 1,
        "row": 0,
        "type": "plank"
      },
      {
        "col": 1,
        "row": 3,
        "type": "plank"
      }
    ],
    "switches": [],
    "quote": "What is broken can be made whole."
  },
  {
    "id": 8,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [],
    "blockages": [
      {
        "col": 0,
        "row": 0,
        "type": "regen"
      },
      {
        "col": 1,
        "row": 1,
        "type": "regen"
      },
      {
        "col": 2,
        "row": 1,
        "type": "regen"
      },
      {
        "col": 3,
        "row": 2,
        "type": "regen"
      },
      {
        "col": 3,
        "row": 3,
        "type": "regen"
      }
    ],
    "movables": [],
    "gaps": [],
    "switches": [],
    "quote": "She dances with the unseen spirits."
  },
  {
    "id": 9,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 3,
        "row": 2
      }
    ],
    "blockages": [
      {
        "col": 3,
        "row": 0,
        "type": "static",
        "id": 1
      }
    ],
    "gaps": [
      {
        "col": 2,
        "row": 3
      }
    ],
    "movables": [
      {
        "col": 0,
        "row": 0,
        "type": "plank"
      }
    ],
    "switches": [],
    "collectibles": [
      {
        "col": 3,
        "row": 3
      }
    ],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "Gravity is but a law to be bent."
  },
  {
    "id": 10,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 1,
        "row": 1
      }
    ],
    "blockages": [],
    "gaps": [
      {
        "col": 1,
        "row": 2
      },
      {
        "col": 1,
        "row": 3
      }
    ],
    "movables": [
      {
        "col": 0,
        "row": 0,
        "type": "plank"
      }
    ],
    "switches": [],
    "quote": "In silence, the wind speaks loudest."
  },
  {
    "id": 11,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [],
    "blockages": [],
    "gaps": [
      {
        "col": 1,
        "row": 0
      },
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 3,
        "row": 2
      }
    ],
    "movables": [
      {
        "col": 3,
        "row": 3,
        "type": "plank"
      }
    ],
    "switches": [],
    "quote": "The maze is only a challenge of mind."
  },
  {
    "id": 12,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 2,
        "row": 0
      },
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 1,
        "row": 2
      }
    ],
    "blockages": [
      {
        "col": 3,
        "row": 2,
        "type": "static",
        "id": 1
      },
      {
        "col": 0,
        "row": 3,
        "type": "regen"
      },
      {
        "col": 2,
        "row": 3,
        "type": "static",
        "id": 2
      },
      {
        "col": 3,
        "row": 3,
        "type": "static",
        "id": 3
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "Boundaries fade into the horizon."
  },
  {
    "id": 13,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [],
    "blockages": [
      {
        "col": 0,
        "row": 0,
        "type": "regen"
      },
      {
        "col": 1,
        "row": 1,
        "type": "regen"
      },
      {
        "col": 0,
        "row": 2,
        "type": "regen"
      },
      {
        "col": 2,
        "row": 2,
        "type": "regen"
      },
      {
        "col": 1,
        "row": 3,
        "type": "regen"
      },
      {
        "col": 3,
        "row": 3,
        "type": "regen"
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [
      {
        "col": 0,
        "row": 3
      }
    ],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "Time heals the wounds of the earth."
  },
  {
    "id": 14,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 0,
        "row": 0
      },
      {
        "col": 3,
        "row": 0
      },
      {
        "col": 1,
        "row": 1
      },
      {
        "col": 1,
        "row": 2
      },
      {
        "col": 3,
        "row": 2
      },
      {
        "col": 3,
        "row": 3
      }
    ],
    "blockages": [
      {
        "col": 0,
        "row": 3,
        "type": "static",
        "id": 1
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [
      {
        "col": 2,
        "row": 1,
        "id": "hb1"
      }
    ],
    "girlButtons": [
      {
        "col": 1,
        "row": 3,
        "targetId": "hb1"
      }
    ],
    "bells": [],
    "quote": "Iron yields to the patient breath."
  },
  {
    "id": 15,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 1,
        "row": 0
      },
      {
        "col": 3,
        "row": 2
      }
    ],
    "blockages": [],
    "gaps": [],
    "movables": [],
    "switches": [
      {
        "col": 3,
        "row": 0,
        "targetId": 1
      }
    ],
    "collectibles": [],
    "doors": [
      {
        "col": 2,
        "row": 1,
        "id": 1
      }
    ],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "Shadows flee before the gale."
  },
  {
    "id": 16,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 2,
        "row": 0
      },
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 2,
        "row": 2
      }
    ],
    "blockages": [
      {
        "col": 3,
        "row": 2,
        "type": "static",
        "id": 1
      },
      {
        "col": 0,
        "row": 3,
        "type": "regen"
      },
      {
        "col": 2,
        "row": 3,
        "type": "static",
        "id": 2
      },
      {
        "col": 3,
        "row": 3,
        "type": "static",
        "id": 3
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "Every gap is a leap of faith."
  },
  {
    "id": 17,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 1,
        "row": 0
      },
      {
        "col": 1,
        "row": 3
      }
    ],
    "blockages": [
      {
        "col": 2,
        "row": 1,
        "type": "static",
        "id": 1
      },
      {
        "col": 3,
        "row": 2,
        "type": "static",
        "id": 2
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [
      {
        "col": 0,
        "row": 3,
        "targetId": 1
      }
    ],
    "collectibles": [
      {
        "col": 3,
        "row": 3
      }
    ],
    "doors": [
      {
        "col": 2,
        "row": 3,
        "id": 1
      }
    ],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "The storm's heart is calm and still."
  },
  {
    "id": 18,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 0,
        "row": 0
      },
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 2,
        "row": 2
      },
      {
        "col": 2,
        "row": 3
      }
    ],
    "blockages": [
      {
        "col": 1,
        "row": 1,
        "type": "iron_regen"
      },
      {
        "col": 1,
        "row": 2,
        "type": "iron_regen"
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [
      {
        "col": 3,
        "row": 0,
        "id": "hb1"
      }
    ],
    "girlButtons": [
      {
        "col": 0,
        "row": 3,
        "targetId": "hb1"
      }
    ],
    "bells": [],
    "quote": "Echoes of the past lead the way."
  },
  {
    "id": 19,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [],
    "blockages": [],
    "gaps": [
      {
        "col": 3,
        "row": 0
      },
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 3,
        "row": 2
      }
    ],
    "movables": [
      {
        "col": 3,
        "row": 3,
        "type": "plank"
      }
    ],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [
      {
        "col": 1,
        "row": 2
      }
    ],
    "quote": "Barriers dissolve in the wind's embrace."
  },
  {
    "id": 20,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [],
    "blockages": [
      {
        "col": 2,
        "row": 0,
        "type": "static",
        "id": 1
      },
      {
        "col": 2,
        "row": 1,
        "type": "static",
        "id": 2
      },
      {
        "col": 2,
        "row": 2,
        "type": "static",
        "id": 3
      },
      {
        "col": 2,
        "row": 3,
        "type": "static",
        "id": 4
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [
      {
        "col": 3,
        "row": 0
      }
    ],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [
      {
        "col": 0,
        "row": 3
      },
      {
        "col": 3,
        "row": 3
      }
    ],
    "quote": "The final door opens to the sky."
  },
  {
    "id": 21,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [
      {
        "col": 2,
        "row": 1
      },
      {
        "col": 0,
        "row": 2
      },
      {
        "col": 2,
        "row": 2
      },
      {
        "col": 0,
        "row": 3
      }
    ],
    "blockages": [
      {
        "col": 1,
        "row": 0,
        "type": "static",
        "id": 1
      },
      {
        "col": 3,
        "row": 0,
        "type": "static",
        "id": 2
      }
    ],
    "gaps": [
      {
        "col": 2,
        "row": 0
      }
    ],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "She has become the wind itself."
  },
  {
    "id": 22,
    "gridStart": {
      "col": 0,
      "row": 1
    },
    "gridExit": {
      "col": 3,
      "row": 1
    },
    "obstacles": [],
    "blockages": [
      {
        "col": 0,
        "row": 0,
        "type": "static",
        "id": 1
      },
      {
        "col": 1,
        "row": 0,
        "type": "static",
        "id": 2
      },
      {
        "col": 2,
        "row": 0,
        "type": "static",
        "id": 3
      },
      {
        "col": 3,
        "row": 0,
        "type": "static",
        "id": 4
      },
      {
        "col": 1,
        "row": 1,
        "type": "static",
        "id": 5
      },
      {
        "col": 2,
        "row": 1,
        "type": "static",
        "id": 6
      },
      {
        "col": 0,
        "row": 2,
        "type": "static",
        "id": 7
      },
      {
        "col": 1,
        "row": 2,
        "type": "static",
        "id": 8
      },
      {
        "col": 2,
        "row": 2,
        "type": "static",
        "id": 9
      },
      {
        "col": 3,
        "row": 2,
        "type": "static",
        "id": 10
      },
      {
        "col": 0,
        "row": 3,
        "type": "static",
        "id": 11
      },
      {
        "col": 1,
        "row": 3,
        "type": "static",
        "id": 12
      },
      {
        "col": 2,
        "row": 3,
        "type": "static",
        "id": 13
      },
      {
        "col": 3,
        "row": 3,
        "type": "static",
        "id": 14
      }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [],
    "quote": "Freedom is the destination."
  }
];

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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
        "type": "iron_regen"
      },
      {
        "col": 2,
        "row": 3,
        "type": "iron_regen"
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
    "quote": "The wind whispers..."
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
        "col": 3,
        "row": 0
      },
      {
        "col": 0,
        "row": 3
      }
    ],
    "blockages": [
      {
        "col": 1,
        "row": 2,
        "type": "iron_regen"
      },
      {
        "col": 2,
        "row": 3,
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
    "quote": "The wind whispers..."
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
        "col": 3,
        "row": 1,
        "type": "static"
      }
    ],
    "movables": [],
    "gaps": [],
    "switches": [],
    "quote": "The wind whispers..."
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
        "col": 1,
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
        "col": 2,
        "row": 2,
        "type": "static",
        "id": 1,
        "revealsPath": {
          "waypoint": {
            "col": 2,
            "row": 2
          }
        }
      }
    ],
    "movables": [],
    "gaps": [],
    "switches": [],
    "quote": "The wind whispers..."
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
        "col": 2,
        "row": 1,
        "type": "static",
        "id": 1
      }
    ],
    "movables": [],
    "gaps": [],
    "switches": [
      {
        "col": 2,
        "row": 2,
        "targetId": 1
      }
    ],
    "quote": "The wind whispers..."
  },
  {
    "id": 23,
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
        "col": 1,
        "row": 2
      },
      {
        "col": 0,
        "row": 3
      }
    ],
    "blockages": [],
    "gaps": [
      {
        "col": 2,
        "row": 1
      }
    ],
    "movables": [],
    "switches": [],
    "quote": "The wind whispers..."
  },
  {
    "id": 24,
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
    "quote": "The wind whispers..."
  },
  {
    "id": 25,
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
      }
    ],
    "blockages": [
      {
        "col": 3,
        "row": 0,
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
    "gaps": [
      {
        "col": 1,
        "row": 1
      },
      {
        "col": 2,
        "row": 2
      }
    ],
    "movables": [],
    "switches": [],
    "quote": "The wind whispers..."
  },
  {
    "id": 26,
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
    "quote": "The wind whispers..."
  },
  {
    "id": 27,
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
    "quote": "The wind whispers..."
  },
  {
    "id": 28,
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
    "quote": "The wind whispers..."
  },
  {
    "id": 29,
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
    "quote": "The wind whispers..."
  },
  {
    "id": 30,
    "gridStart": {
      "col": 0,
      "row": 0
    },
    "gridExit": {
      "col": 3,
      "row": 3
    },
    "obstacles": [
      {
        "col": 1,
        "row": 0
      }
    ],
    "blockages": [],
    "gaps": [],
    "movables": [],
    "switches": [],
    "quote": "The wind whispers...",
    "collectibles": [
      {
        "col": 2,
        "row": 0
      }
    ],
    "doors": [],
    "hardBlocks": [
      {
        "col": 2,
        "row": 2,
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
    "bells": [
      {
        "col": 3,
        "row": 0
      },
      {
        "col": 0,
        "row": 3
      }
    ]
  },
  {
    "id": 31,
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
    "quote": "The wind whispers..."
  }
];

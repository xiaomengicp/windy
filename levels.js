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
    "quote": "The wind whispers of beginnings..."
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
    "quote": "A gentle breeze guides the way."
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
    "quote": "Paths diverge, but the wind knows the truth."
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
    "quote": "Stone and silence, broken by a breath."
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
    "quote": "She dances with the unseen currents."
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
    "quote": "Memory fades like mist in the morning."
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
    "quote": "The way forward is not always clear."
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
    "quote": "Strength lies in yielding to the flow."
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
    "quote": "Echoes of the past linger here."
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
    "quote": "A gust of hope in a stagnant world."
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
    "quote": "Walls are but illusions to the wind."
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
    "quote": "Through the narrowest gap, freedom flows."
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
    "quote": "The storm gathers, but she is unafraid."
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
    "quote": "What was lost may yet be found."
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
    "quote": "Every blockage has a breaking point."
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
    "quote": "The iron heart yields to persistence."
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
    "quote": "Timeless ruins watch her passing."
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
    "quote": "She carries the weight of the sky."
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
    "quote": "To fly, one must first let go."
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
    "quote": "The labyrinth breathes with her."
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
    "quote": "Shadows lengthen, but the wind persists."
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
    "quote": "A symphony of silence and motion."
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
    "quote": "The unseen path is often the surest."
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
    "quote": "She is the calm within the storm."
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
    "quote": "Fragments of a dream, scattered."
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
    "quote": "The wind knows no boundaries."
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
    "quote": "Gravity is but a suggestion."
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
    "quote": "In the heart of the maze, a song."
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
    "quote": "She is the leaf, and she is the gale."
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
    "quote": "The final door awaits the breath of life.",
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
    "quote": "Beyond the horizon, the wind is free."
  }
];

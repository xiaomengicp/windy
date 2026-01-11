const LEVELS_DATA = [
  {
    "id": 1,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [],
    "blockages": [
      { "col": 3, "row": 1, "type": "static" }
    ],
    "movables": [],
    "gaps": [],
    "switches": [], "quote": "The wind whispers..."
  },
  {
    "id": 2,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [
      { "col": 1, "row": 0 },
      { "col": 2, "row": 1 },
      { "col": 2, "row": 3 }
    ],
    "blockages": [
      {
        "col": 2, "row": 2, "type": "static", "id": 1,
        "revealsPath": { "waypoint": { "col": 2, "row": 2 } }
      }
    ],
    "movables": [],
    "gaps": [],
    "switches": [], "quote": "The wind whispers..."
  },
  {
    "id": 3,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [],
    "blockages": [
      { "col": 2, "row": 1, "type": "static", "id": 1 }
    ],
    "movables": [],
    "gaps": [],
    "switches": [
      { "col": 2, "row": 2, "targetId": 1 }
    ]
  },
  {
    "id": 4,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [
      { "col": 3, "row": 0 },
      { "col": 1, "row": 2 },
      { "col": 0, "row": 3 }
    ],
    "blockages": [],
    "gaps": [
      { "col": 2, "row": 1 }
    ],
    "movables": [],
    "switches": [], "quote": "The wind whispers..."
  },
  {
    "id": 5,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [
      { "col": 1, "row": 1 }
    ],
    "blockages": [
      { "col": 1, "row": 2, "type": "static", "id": 1 }
    ],
    "gaps": [
      { "col": 2, "row": 1 },
      { "col": 3, "row": 2 }
    ],
    "movables": [
      { "col": 1, "row": 0, "type": "plank" },
      { "col": 1, "row": 3, "type": "plank" }
    ],
    "switches": [], "quote": "The wind whispers..."
  },
  {
    "id": 6,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [
      { "col": 2, "row": 1 }
    ],
    "blockages": [
      { "col": 3, "row": 0, "type": "static", "id": 1 },
      { "col": 2, "row": 3, "type": "static", "id": 2 }
    ],
    "gaps": [
      { "col": 1, "row": 1 },
      { "col": 2, "row": 2 }
    ],
    "movables": [],
    "switches": [], "quote": "The wind whispers..."
  },
  {
    "id": 7,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [],
    "blockages": [
      { "col": 0, "row": 0, "type": "regen" },
      { "col": 1, "row": 1, "type": "regen" },
      { "col": 2, "row": 1, "type": "regen" },
      { "col": 3, "row": 2, "type": "regen" },
      { "col": 3, "row": 3, "type": "regen" }
    ],
    "movables": [],
    "gaps": [],
    "switches": [], "quote": "The wind whispers..."
  },
  {
    "id": 8,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [
      { "col": 2, "row": 0 },
      { "col": 2, "row": 1 },
      { "col": 2, "row": 2 }
    ],
    "blockages": [
      { "col": 3, "row": 2, "type": "static", "id": 1 },
      { "col": 0, "row": 3, "type": "regen" },
      { "col": 2, "row": 3, "type": "static", "id": 2 },
      { "col": 3, "row": 3, "type": "static", "id": 3 }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [],
    "girlButtons": [],
    "bells": [], "quote": "The wind whispers..."
  },
  {
    "id": 9,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [
      { "col": 1, "row": 1 }
    ],
    "blockages": [],
    "gaps": [
      { "col": 1, "row": 2 },
      { "col": 1, "row": 3 }
    ],
    "movables": [
      { "col": 0, "row": 0, "type": "plank" }
    ],
    "switches": [], "quote": "The wind whispers..."
  },
  {
    "id": 10,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [],
    "blockages": [],
    "gaps": [
      { "col": 1, "row": 0 },
      { "col": 2, "row": 1 },
      { "col": 3, "row": 2 }
    ],
    "movables": [
      { "col": 3, "row": 3, "type": "plank" }
    ],
    "switches": [], "quote": "The wind whispers..."
  },
  {
    "id": 11,
    "gridStart": { "col": 0, "row": 0 },
    "gridExit": { "col": 3, "row": 3 },
    "obstacles": [
      { "col": 1, "row": 0 }
    ],
    "blockages": [],
    "gaps": [],
    "movables": [],
    "switches": [], "quote": "The wind whispers...",
    "collectibles": [
      { "col": 2, "row": 0 }
    ],
    "doors": [],
    "hardBlocks": [
      { "col": 2, "row": 2, "id": "hb1" }
    ],
    "girlButtons": [
      { "col": 1, "row": 3, "targetId": "hb1" }
    ],
    "bells": [
      { "col": 3, "row": 0 },
      { "col": 0, "row": 3 }
    ]
  },
  {
    "id": 12,
    "gridStart": { "col": 0, "row": 1 },
    "gridExit": { "col": 3, "row": 1 },
    "obstacles": [
      { "col": 0, "row": 0 },
      { "col": 2, "row": 1 },
      { "col": 2, "row": 2 },
      { "col": 2, "row": 3 }
    ],
    "blockages": [
      { "col": 1, "row": 1, "type": "iron_regen" },
      { "col": 1, "row": 2, "type": "iron_regen" }
    ],
    "gaps": [],
    "movables": [],
    "switches": [],
    "collectibles": [],
    "doors": [],
    "hardBlocks": [
      { "col": 3, "row": 0, "id": "hb1" }
    ],
    "girlButtons": [
      { "col": 0, "row": 3, "targetId": "hb1" }
    ],
    "bells": []
  }
];

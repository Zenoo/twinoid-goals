// Game list
export type Games = [
  'alphabounce',
  'dinorpg',
  'hordes',
  'kadokado',
  'monsterhotel',
  'mush',
  'fever',
  'croquemotel',
  'intrusion',
  'kingdom',
  'kube',
  'labrute',
  'majority',
  'motionball2',
  'odyssey',
  'studioquiz',
  'snake',
  'naturalchimie2',
  'rockfallerjourney',
  'streetwriter',
  'teacherstory',
  'arkadeo',
];

export type GameName = Games[number];

// Languages list
export type Languages = ['en', 'fr', 'de', 'es'];

export type Language = Languages[number];

export interface Goal {
  id: string;
  name: Record<Language, string>;
  rare: boolean;
  unlocks: Unlock[];
}

export interface Unlock {
  count: number;
  points: number;
  icon?: string;
  title?: Record<Language, string>;
}

// AlphaBounce
export type AlphaBounceGoalNames = [
  'planets',
  'earth',
  'mission',
  'map',
  'escorp',
  'furi',
];

export type AlphaBounceGoalName = AlphaBounceGoalNames[number];

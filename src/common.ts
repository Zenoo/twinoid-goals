// Game list
export const Games = [
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
] as const;

export type GameName = typeof Games[number];

// Languages list
export const Languages = ['en', 'fr', 'de', 'es'] as const;

export type Language = typeof Languages[number];

export interface Goal {
  id: string;
  name: Record<Language, string>;
  description?: Record<Language, string>;
  rare: number;
  hidden?: boolean;
  unlocks: Unlock[];
}

export interface Unlock {
  count: number;
  points: number;
  icon?: string;
  title?: Record<Language, string>;
  description?: Record<Language, string>;
  prefix?: boolean;
  suffix?: boolean;
}

/**
 * Get the total points for a game
 * @param goals 
 * @returns 
 */
export const getTotalPoints = (goals: Record<string, Goal>) => Object.values(goals)
  .reduce(
    (total, goal) => total + goal.unlocks.reduce(
      (total, unlock) => total + unlock.points,
      0,
    ),
    0,
  );

/**
 * Adjust goal points so that the total is 1000
 * @param goals 
 * @returns 
 */
export const adjustGoals = <T extends string> (goals: Record<T, Goal>): Record<T, Goal> => {
  const totalPoints = getTotalPoints(goals);
  const adjustmentRatio = 1000 / totalPoints;

  const adjustedGoals = Object.values(goals).map(goal => ({
    ...goal as Goal,
    unlocks: (goal as Goal).unlocks.map(unlock => ({
      ...unlock,
      points: Math.round(unlock.points * adjustmentRatio),
    })),
  }));

  return Object.fromEntries(adjustedGoals.map(goal => [goal.id, goal])) as Record<T, Goal>;
};

/**
 * Get a goal by id
 */
export const getGoal = <T extends string> (goals: Record<T, Goal>) => (id: T): Goal | null => {
  const goal = goals[id];
  return goal ? goal : null;
}

/**
 * Get the unlocked goals for a given number of points
 */
export const getUnlockedGoals = <T extends string> (goals: Record<T, Goal>) => (id: T, points: number): Unlock[] => {
  const goal = getGoal(goals)(id);
  if (!goal) return [];

  const unlocked = goal.unlocks.filter(unlock => unlock.points <= points);
  return unlocked;
}
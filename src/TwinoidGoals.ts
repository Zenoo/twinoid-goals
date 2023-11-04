import { AlphaBounceAdjustedGoals } from "./AlphaBounceGoals";
import { DinoRpgAdjustedGoals } from "./DinoRpgGoals";
import { Goal, getGoal, getUnlockedGoals } from "./common";

const generateGameStructure = <T extends string> (goals: Record<T, Goal>) => ({
  goals,
  get: getGoal(goals),
  getUnlocked: getUnlockedGoals(goals),
});

export default {
  alphabounce: generateGameStructure(AlphaBounceAdjustedGoals),
  dinorpg: generateGameStructure(DinoRpgAdjustedGoals),
};

import { AlphaBounceAdjustedGoals, AlphaBounceGoals } from "./AlphaBounceGoals";
import { getTotalPoints } from "./common";


export const TwinoidGoals = {
  alphabounce: {
    goals: AlphaBounceGoals,
    totalPoints: getTotalPoints(AlphaBounceGoals),
    adjustedGoals: AlphaBounceAdjustedGoals,
  },
};

import { Goal, adjustGoals, getGoal, getUnlockedGoals } from "./common";
import alphabounce from "./json/alphabounce.json";
import croquemotel from "./json/croquemotel.json";
import dinorpg from "./json/dinorpg.json";
import fever from "./json/fever.json";
import hordes from "./json/hordes.json";
import intrusion from "./json/intrusion.json";
import kadokado from "./json/kadokado.json";
import kingdom from "./json/kingdom.json";
import kube from "./json/kube.json";
import labrute from "./json/labrute.json";
import majority from "./json/majority.json";
import montionball2 from "./json/motionball2.json";
import mush from "./json/mush.json";
import naturalchimie2 from "./json/naturalchimie2.json";
import odyssey from "./json/odyssey.json";
import snake from "./json/snake.json";
import streetwriter from "./json/streetwriter.json";
import studioquiz from "./json/studioquiz.json";
import teacherstory from "./json/teacherstory.json";

const generateGameStructure = <T extends string> (goals: Record<T, Goal>) => ({
  goals,
  get: getGoal(goals),
  getUnlocked: getUnlockedGoals(goals),
});

export default {
  alphabounce: generateGameStructure(adjustGoals(alphabounce)),
  croquemotel: generateGameStructure(adjustGoals(croquemotel)),
  dinorpg: generateGameStructure(adjustGoals(dinorpg)),
  fever: generateGameStructure(adjustGoals(fever)),
  hordes: generateGameStructure(adjustGoals(hordes)),
  intrusion: generateGameStructure(adjustGoals(intrusion)),
  kadokado: generateGameStructure(adjustGoals(kadokado)),
  kingdom: generateGameStructure(adjustGoals(kingdom)),
  kube: generateGameStructure(adjustGoals(kube)),
  labrute: generateGameStructure(adjustGoals(labrute)),
  majority: generateGameStructure(adjustGoals(majority)),
  motionball2: generateGameStructure(adjustGoals(montionball2)),
  mush: generateGameStructure(adjustGoals(mush)),
  naturalchimie2: generateGameStructure(adjustGoals(naturalchimie2)),
  odyssey: generateGameStructure(adjustGoals(odyssey)),
  snake: generateGameStructure(adjustGoals(snake)),
  streetwriter: generateGameStructure(adjustGoals(streetwriter)),
  studioquiz: generateGameStructure(adjustGoals(studioquiz)),
  teacherstory: generateGameStructure(adjustGoals(teacherstory)),
};

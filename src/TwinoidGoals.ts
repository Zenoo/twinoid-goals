import { Goal, adjustGoals, getGoal, getUnlockedGoals } from "./common";
import alphabounceJson from "./json/alphabounce.json";
import croquemotelJson from "./json/croquemotel.json";
import dinorpgJson from "./json/dinorpg.json";
import feverJson from "./json/fever.json";
import hordesJson from "./json/hordes.json";
import intrusionJson from "./json/intrusion.json";
import kadokadoJson from "./json/kadokado.json";
import kingdomJson from "./json/kingdom.json";
import kubeJson from "./json/kube.json";
import labruteJson from "./json/labrute.json";
import majorityJson from "./json/majority.json";
import montionball2Json from "./json/motionball2.json";
import mushJson from "./json/mush.json";
import naturalchimie2Json from "./json/naturalchimie2.json";
import odysseyJson from "./json/odyssey.json";
import snakeJson from "./json/snake.json";
import streetwriterJson from "./json/streetwriter.json";
import studioquizJson from "./json/studioquiz.json";
import teacherstoryJson from "./json/teacherstory.json";

const generateGameStructure = <T extends string> (goals: Record<T, Goal>) => ({
  goals,
  get: getGoal(goals),
  getUnlocked: getUnlockedGoals(goals),
});

export const alphabounce = generateGameStructure(adjustGoals(alphabounceJson));
export const croquemotel = generateGameStructure(adjustGoals(croquemotelJson));
export const dinorpg = generateGameStructure(adjustGoals(dinorpgJson));
export const fever = generateGameStructure(adjustGoals(feverJson));
export const hordes = generateGameStructure(adjustGoals(hordesJson));
export const intrusion = generateGameStructure(adjustGoals(intrusionJson));
export const kadokado = generateGameStructure(adjustGoals(kadokadoJson));
export const kingdom = generateGameStructure(adjustGoals(kingdomJson));
export const kube = generateGameStructure(adjustGoals(kubeJson));
export const labrute = generateGameStructure(adjustGoals(labruteJson));
export const majority = generateGameStructure(adjustGoals(majorityJson));
export const motionball2 = generateGameStructure(adjustGoals(montionball2Json));
export const mush = generateGameStructure(adjustGoals(mushJson));
export const naturalchimie2 = generateGameStructure(adjustGoals(naturalchimie2Json));
export const odyssey = generateGameStructure(adjustGoals(odysseyJson));
export const snake = generateGameStructure(adjustGoals(snakeJson));
export const streetwriter = generateGameStructure(adjustGoals(streetwriterJson));
export const studioquiz = generateGameStructure(adjustGoals(studioquizJson));
export const teacherstory = generateGameStructure(adjustGoals(teacherstoryJson));

export default {
  alphabounce,
  croquemotel,
  dinorpg,
  fever,
  hordes,
  intrusion,
  kadokado,
  kingdom,
  kube,
  labrute,
  majority,
  motionball2,
  mush,
  naturalchimie2,
  odyssey,
  snake,
  streetwriter,
  studioquiz,
  teacherstory,
};
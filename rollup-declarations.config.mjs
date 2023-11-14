import { dts } from "rollup-plugin-dts";

export default {
  input: 'dist/src/TwinoidGoals.d.ts',
  output: [{ file: 'dist/TwinoidGoals.d.ts', format: 'es' }],
  plugins: [dts()]
};
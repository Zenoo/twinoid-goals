import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/TwinoidGoals.ts',
  output: {
    format: 'cjs',
    file: 'dist/index.js'
  },
  plugins: [typescript()]
};
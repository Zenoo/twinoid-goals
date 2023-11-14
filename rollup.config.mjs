import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

export default {
  input: 'src/TwinoidGoals.ts',
  output: {
    format: 'cjs',
    dir: 'dist',
  },
  plugins: [json(), typescript({
    exclude: ['src/exportXmlAsJson.ts', 'src/parseJson.ts', 'test/**/*'],
    tsconfigDefaults: {
      compilerOptions: {
        moduleResolution: 'node',
        resolveJsonModule: true,
        allowSyntheticDefaultImports: true,
        declaration: true,
      },
    },
  })]
};
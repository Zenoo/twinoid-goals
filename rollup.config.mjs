import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
  input: 'src/TwinoidGoals.ts',
  output: {
    format: 'cjs',
    file: 'dist/index.js'
  },
  plugins: [typescript({
    exclude: ['exportXmlAsJson.ts', 'parseJson.ts'],
    resolveJsonModule: true,
    allowSyntheticDefaultImports: true,
  }), json()]
};
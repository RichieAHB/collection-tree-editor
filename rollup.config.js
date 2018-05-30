import babel from 'rollup-plugin-babel';
import fs from 'fs';

const flowStr = entry =>
  `// @flow

export * from '${entry}';
export { default } from '${entry}';
`;

const addFlowDefs = path => ({
  transformBundle: (_, id) => {
    // const path =
    fs.writeFileSync(`${id.file}.flow`, flowStr(path));
  }
});

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    plugins: [babel(), addFlowDefs('../src/index.js')],
    external: ['react', 'lodash/fp/get', 'lodash/fp/set']
  }
];

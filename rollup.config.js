import babel from 'rollup-plugin-babel';
import fs from 'fs';
import path from 'path';

const flowStr = file =>
`export * from './${path.basename(file)}';
export { default } from './${path.basename(file)}';
`;

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    plugins: [
      babel(),
      {
        transformBundle: (_, { file }) =>
          fs.writeFileSync(`${file}.flow`, flowStr(file))
      }
    ],
    external: ['react', 'lodash/fp/get', 'lodash/fp/set']
  }
];

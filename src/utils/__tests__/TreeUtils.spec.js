import { el, dedupeTree } from '../TreeUtils';

const structure = [
  el('root', 'foos'),
  el('foo', 'foos'),
  el('foo', 'foos'),
  el('foo'),
];

describe('TreeUtils', () => {
  describe('dedupeTree', () => {
    it('mutates the tree and removes duplicates by type', () => {
      const tree = {
        foos: [
          {
            id: 1,
            foos: [
              {
                id: 1,
                foos: [{ id: 2 }, { id: 3 }]
              },
              { id: 2 }
            ]
          },
          { id: 2 },
          { id: 4 },
          {
            id: 3,
            foos: [{ id: 4 }]
          }
        ]
      };

      const [newTree, actions] = dedupeTree(tree, structure);

      expect(newTree).toEqual({
        foos: [
          {
            id: 1,
            foos: [{ id: 2 }]
          },
          { id: 4 },
          {
            id: 3,
            foos: []
          }
        ]
      });
    });
  });
});

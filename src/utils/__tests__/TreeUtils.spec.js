import { dedupe, el } from '../TreeUtils';

describe('TreeUtils', () => {
  describe('dedupe', () => {
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

      dedupe(tree, [el('foo'), el('foo'), el('foo')]);

      expect(tree).toEqual({
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

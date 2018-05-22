import { pathSpec, findAtPath, isSubPath, pathForMove } from '../PathUtils';

describe('PathUtils', () => {
  describe('findAtPath', () => {
    it('returns the deeply nested child in a tree according to a path', () => {
      const tree = {
        a: [
          {
            b: [
              {},
              {
                c: [{}, {}]
              }
            ]
          }
        ]
      };

      expect(
        findAtPath(tree, [pathSpec('a', 0), pathSpec('b', 1), pathSpec('c', 0)])
      ).toBe(tree.a[0].b[1].c[0]);
    });
  });

  describe('isSubPath', () => {
    it('asserts whether a path is a sub path of another', () => {
      const parent = [pathSpec('a', 0), pathSpec('b', 1), pathSpec('c', 0)];
      const sub = [
        pathSpec('a', 0),
        pathSpec('b', 1),
        pathSpec('c', 0),
        pathSpec('c', 1)
      ];
      expect(isSubPath(parent, sub)).toBe(true);
      expect(isSubPath(sub, parent)).toBe(false);
    });

    it('asserts that the same path is not a sub path of itself', () => {
      const parent = [pathSpec('a', 0), pathSpec('b', 1), pathSpec('c', 0)];
      const candidate = [pathSpec('a', 0), pathSpec('b', 1), pathSpec('c', 0)];
      expect(isSubPath(parent, candidate)).toBe(false);
    });
  });

  describe('pathForMove', () => {
    it('changes a destination to account for the absense of source', () => {
      const source = [pathSpec('a', 0), pathSpec('b', 0)];
      const d1 = [pathSpec('a', 0), pathSpec('b', 1)];
      expect(pathForMove(source, d1)).toEqual([
        pathSpec('a', 0),
        pathSpec('b', 0)
      ]);

      const d2 = [...d1, pathSpec('c', 0)];
      expect(pathForMove(source, d2)).toEqual([
        pathSpec('a', 0),
        pathSpec('b', 0),
        pathSpec('c', 0)
      ]);
    });

    it('the same path or sub paths of the same path return the same', () => {
      const source = [pathSpec('a', 0), pathSpec('b', 1)];
      const desination = [pathSpec('a', 0), pathSpec('b', 1), pathSpec('c', 0)];
      expect(pathForMove(source, desination)).toEqual([
        pathSpec('a', 0),
        pathSpec('b', 1),
        pathSpec('c', 0)
      ]);
    });
  });
});

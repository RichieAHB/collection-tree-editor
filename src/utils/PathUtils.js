// @flow

type PathSpec = {|
  key: string,
  index: number,
  type: ?string
|};

type Path = PathSpec[];

const pathSpec = (key: string, index: number, type: ?string = null): PathSpec => ({
  key,
  index,
  type
});

const toPathStr = (path: Path, separateLastIndex: boolean = false): string =>
  path.map(({ key, index }) => `${key}[${index}]`).join('.');

const toPathStrAndIndex = (path: Path): [string, number] => {
  const prePath = path.slice();
  const { key, index } = prePath.pop();

  const str = toPathStr(prePath);

  return [`${str}.${key}`, index];
};

const isSubPath = (parent: Path, sub: Path): boolean =>
  sub.length > parent.length &&
  !parent.some(({ key: kp, index: ip }, i) => {
    const { key: ks, index: is } = sub[i] || {};
    return kp !== ks || ip !== is;
  });

const pathForMove = (source: Path, target: Path): Path => {
  const newPath = [];

  for (let i = 0; i < target.length; i += 1) {
    const targetPathSpec = target[i];
    const { key: kt, index: it, type: tt } = targetPathSpec;
    const { key: ks, index: is } = source[i] || {};

    if (i < source.length - 1 && (ks !== kt || is !== it)) {
      return target;
    } else if (i === source.length - 1 && ks === kt && is < it) {
      newPath.push(pathSpec(kt, it - 1, tt));
    } else {
      newPath.push(targetPathSpec);
    }
  }

  return newPath;
};

export { toPathStr, toPathStrAndIndex, isSubPath, pathForMove, pathSpec };
export type { Path, PathSpec };

const pathSpec = (key, index, type = null) => ({
  key,
  index,
  type
});

const toPathStr = (path, separateLastIndex = false) => {
  if (!separateLastIndex) {
    return path.map(({ key, index }) => `${key}[${index}]`).join('.');
  }

  const prePath = path.slice();
  const { key, index } = prePath.pop();

  const str = toPathStr(prePath);

  return [`${str}.${key}`, index];
}

const isSubPath = (parent, sub) =>
  sub.length > parent.length &&
  !parent.some(({ key: kp, index: ip }, i) => {
    const { key: ks, index: is } = sub[i] || [];
    return kp !== ks || ip !== is;
  });

const pathForMove = (source, target) =>
  target.map((targetPathSpec, i) => {
    const { key: kt, index: it, type: tt } = targetPathSpec;
    if (i === source.length - 1) {
      const { key: ks, index: is } = source[i];

      if (ks === kt && is < it) {
        return pathSpec(kt, it - 1, tt);
      }
    }
    return targetPathSpec;
  });

export { toPathStr, isSubPath, pathForMove, pathSpec };

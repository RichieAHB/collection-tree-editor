const pathSpec = (key, index, type = null) => ({
  key,
  index,
  type
});

const findAtPath = (obj, path) =>
  path.reduce((o, { key, index }) => o[key][index], obj);

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

export { findAtPath, isSubPath, pathForMove, pathSpec };

const buildTree = (entities, rootType, rootId, structure) => {
  const buildNode = (entities, nodeType, nodeId, [childSpec, ...structure]) => {
    const node = entities[nodeType][nodeId];

    if (!childSpec) {
      return node;
    }

    const { childrenKey, modelKey } = childSpec;

    return {
      ...node,
      [childrenKey]: (node[childrenKey] || []).map(childId =>
        buildNode(entities, modelKey, childId, structure)
      )
    };
  };

  return buildNode(entities, rootType, rootId, structure);
};

const pathSpec = (key, index, type) => ({
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

const pathForMove = (source, target) => {
  return target.map((targetPathSpec, i) => {
    const { key: kt, index: it, type: tt } = targetPathSpec;
    if (i === source.length - 1) {
      const { key: ks, index: is } = source[i];

      if (ks === kt && is < it) {
        return pathSpec(kt, it - 1, tt);
      }
    }
    return targetPathSpec;
  });
};

export { buildTree, findAtPath, isSubPath, pathForMove, pathSpec };

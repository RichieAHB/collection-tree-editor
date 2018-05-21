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

const findAtPath = (obj, path) =>
  path.reduce((o, [key, index]) => o[key][index], obj);

const isSubPath = (parent, sub) =>
  sub.length > parent.length &&
  !parent.some(([kp, ip], i) => {
    const [ks, is] = sub[i] || [];
    return kp !== ks || ip !== is;
  });

const pathForMove = (source, target) => {
  return target.map(([kt, it], i) => {

    if (i === source.length - 1) {
      const [ks, is] = source[i];

      if (ks === kt && is < it) {
        return [kt, it - 1];
      }
    }
    return [kt, it];
  });
};

export { buildTree, findAtPath, isSubPath, pathForMove };

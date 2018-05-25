const insert = (id, type, data, parents) => ({
  type: 'INSERT',
  payload: {
    id,
    data,
    type,
    parents
  }
});

const remove = (id, type, parents) => ({
  type: 'REMOVE',
  payload: {
    id,
    type,
    parents
  }
});

export { insert, remove };

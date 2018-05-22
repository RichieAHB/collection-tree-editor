const insert = (id, data, type) => ({
  type: 'INSERT',
  payload: {
    id,
    data,
    type
  }
});

const remove = (id, type) => ({
  type: 'REMOVE',
  payload: {
    id,
    type
  }
});

export {
  insert,
  remove
};

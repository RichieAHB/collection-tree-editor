// @flow

import { move, EditTypes } from '../Edits';
import { type Edit } from '../Edits';

const mergeMoves = (edits: Edit[]): Edit[] => {
  // this assumes we can't have moves with anything other than a REMOVE and INSERT
  if (edits.length !== 2) {
    return edits;
  }

  const [edit1, edit2] = edits;

  if (
    edit1.type === EditTypes.REMOVE &&
    edit2.type === EditTypes.INSERT
  ) {
    const {
      payload: { id: id1, type: type1, parents: parents1 }
    } = edit1;
  
    const {
      payload: { id: id2, type: type2, parents: parents2, index }
    } = edit2;

    if (id1 === id2 && type1 === type2) {
      return [move(id1, type1, index, parents1, parents2)];
    }
  }

  return edits;
};

export { mergeMoves };

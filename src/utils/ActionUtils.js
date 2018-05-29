// @flow

import { move, ActionTypes } from '../Actions';
import { type Action } from '../Actions';

const mergeMoves = (actions: Action[]): Action[] => {
  // this assumes we can't have moves with anything other than a REMOVE and INSERT
  if (actions.length !== 2) {
    return actions;
  }

  const [action1, action2] = actions;

  if (
    action1.type === ActionTypes.REMOVE &&
    action2.type === ActionTypes.INSERT
  ) {
    const {
      payload: { id: id1, type: type1, parents: parents1 }
    } = action1;
  
    const {
      payload: { id: id2, type: type2, parents: parents2 }
    } = action2;

    if (id1 === id2 && type1 === type2) {
      return [move(id1, type1, parents1, parents2)];
    }
  }

  return actions;
};

export { mergeMoves };

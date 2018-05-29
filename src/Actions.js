// @flow
import { type ParentSpec } from './utils/TreeUtils';

const ActionTypes = {
  INSERT: 'INSERT',
  REMOVE: 'REMOVE',
  MOVE: 'MOVE'
};

type InsertAction = {|
  type: 'INSERT',
  payload: {
    id: string,
    data: any,
    type: string,
    parents: ParentSpec[]
  }
|};

type RemoveAction = {|
  type: 'REMOVE',
  payload: {
    id: string,
    type: string,
    parents: ParentSpec[]
  }
|};

type MoveAction = {|
  type: 'MOVE',
  payload: {
    id: string,
    type: string,
    oldParents: ParentSpec[],
    newParents: ParentSpec[]
  }
|};

type Action = InsertAction | RemoveAction | MoveAction;

const insert = (
  id: string,
  type: string,
  data: any,
  parents: ParentSpec[]
): InsertAction => ({
  type: ActionTypes.INSERT,
  payload: {
    id,
    data,
    type,
    parents
  }
});

const remove = (
  id: string,
  type: string,
  parents: ParentSpec[]
): RemoveAction => ({
  type: ActionTypes.REMOVE,
  payload: {
    id,
    type,
    parents
  }
});

const move = (
  id: string,
  type: string,
  oldParents: ParentSpec[],
  newParents: ParentSpec[]
): MoveAction => ({
  type: ActionTypes.MOVE,
  payload: {
    id,
    type,
    oldParents,
    newParents
  }
});

export { insert, remove, move, ActionTypes };
export type { Action };

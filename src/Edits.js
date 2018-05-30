// @flow
import { type ParentSpec } from './utils/TreeUtils';

const EditTypes = {
  INSERT: 'INSERT',
  REMOVE: 'REMOVE',
  MOVE: 'MOVE'
};

type InsertEdit = {|
  type: 'INSERT',
  payload: {
    id: string,
    data: any,
    type: string,
    parents: ParentSpec[],
    index: number
  }
|};

type RemoveEdit = {|
  type: 'REMOVE',
  payload: {
    id: string,
    type: string,
    parents: ParentSpec[]
  }
|};

type MoveEdit = {|
  type: 'MOVE',
  payload: {
    id: string,
    type: string,
    index: number,
    oldParents: ParentSpec[],
    newParents: ParentSpec[]
  }
|};

type Edit = InsertEdit | RemoveEdit | MoveEdit;

const insert = (
  id: string,
  type: string,
  data: any,
  parents: ParentSpec[],
  index: number
): InsertEdit => ({
  type: EditTypes.INSERT,
  payload: {
    id,
    data,
    type,
    parents,
    index
  }
});

const remove = (
  id: string,
  type: string,
  parents: ParentSpec[]
): RemoveEdit => ({
  type: EditTypes.REMOVE,
  payload: {
    id,
    type,
    parents
  }
});

const move = (
  id: string,
  type: string,
  index: number,
  oldParents: ParentSpec[],
  newParents: ParentSpec[]
): MoveEdit => ({
  type: EditTypes.MOVE,
  payload: {
    id,
    type,
    index,
    oldParents,
    newParents
  }
});

export { insert, remove, move, EditTypes };
export type { InsertEdit, RemoveEdit, MoveEdit, Edit };

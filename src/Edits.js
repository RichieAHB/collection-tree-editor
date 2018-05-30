// @flow
import { type ParentSpec } from './utils/TreeUtils';

const EditTypes = {
  INSERT: 'INSERT',
  REMOVE: 'REMOVE',
  MOVE: 'MOVE'
};

type InsertEdit = {|
  type: 'INSERT',
  nodeType: string,
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
  nodeType: string,
  payload: {
    id: string,
    type: string,
    parents: ParentSpec[]
  }
|};

type MoveEdit = {|
  type: 'MOVE',
  nodeType: string,
  payload: {
    id: string,
    type: string,
    index: number,
    oldParents: ParentSpec[],
    newParents: ParentSpec[]
  }
|};

type Edit = InsertEdit | RemoveEdit | MoveEdit;

type EditTypeMap = {|
  MOVE: MoveEdit,
  REMOVE: RemoveEdit,
  INSERT: InsertEdit
|};

type CreateEditFunc = <E>(e: E) => { [string]: (edit: E) => void };
type EditType = $Keys<EditTypeMap>;
type EditHandlers = $Shape<$ObjMap<EditTypeMap, CreateEditFunc>>;

const insert = (
  id: string,
  type: string,
  data: any,
  parents: ParentSpec[],
  index: number
): InsertEdit => ({
  type: EditTypes.INSERT,
  nodeType: type,
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
  nodeType: type,
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
  nodeType: type,
  payload: {
    id,
    type,
    index,
    oldParents,
    newParents
  }
});

export { insert, remove, move, EditTypes };
export type { InsertEdit, RemoveEdit, MoveEdit, Edit, EditType, EditHandlers };

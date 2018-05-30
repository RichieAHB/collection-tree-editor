// @flow

import React from 'react';
import Node from './Node';
import { isSubPath } from './utils/PathUtils';
import { type Path } from './utils/PathUtils';
import { insert, remove /* dedupe */ } from './utils/TreeUtils';
import { type SchemaNode } from './utils/TreeUtils';
import { mergeMoves } from './utils/EditUtils';
import { type Edit, type EditType, type EditHandlers } from './Edits';
import { INTERNAL_TRANSFER_TYPE } from './Constants';

type DropSpec = {
  data: any,
  type: string,
  path?: Path
};

type DropMapper = string => DropSpec;

type DropMapperMap = {
  [string]: DropMapper
};

type CollectionProps = {
  dropMappers: DropMapperMap,
  schema: SchemaNode,
  tree: Object,
  onChange: (tree: Object, edits: Edit[]) => void,
  editHandlers: EditHandlers,
  onError: string => void,
  dedupeTypes: string[]
};

type CollectionState = {|
  tree: Object,
  draftData: {
    tree: ?Object,
    edits: ?(Edit[])
  }
|};

class Collection extends React.Component<CollectionProps, CollectionState> {
  constructor(props: CollectionProps) {
    super(props);
    this.state = {
      tree: this.props.tree,
      draftData: {
        tree: null,
        edits: null
      }
    };
  }

  static defaultProps = {
    dropMappers: {},
    onError: (error: string) => console.log(error),
    onChange: () => {},
    editHandlers: {}
  };

  static getDerivedStateFromProps = ({ tree }: CollectionProps) => ({
    tree
  });

  onDragEnd = () => {
    this.setState({
      draftData: {
        tree: null,
        edits: null
      }
    });
  };

  get dropMappers(): DropMapperMap {
    return {
      [INTERNAL_TRANSFER_TYPE]: (data: string): DropSpec => JSON.parse(data),
      ...this.props.dropMappers
    };
  }

  async getDropData(e: DragEvent): Promise<DropSpec> {
    const dataTransfer: ?DataTransfer = e.dataTransfer;

    if (!dataTransfer || !dataTransfer.getData) {
      throw new Error('Data transfer issue');
    }

    const { dropMappers } = this;

    const type = Object.keys(dropMappers).find(key =>
      dataTransfer.getData(key)
    );

    if (!type) {
      throw new Error('Unknown transfer type');
    }

    const mapper = dropMappers[type];

    // listen for errors here??
    return mapper(dataTransfer.getData(type));
  }

  detach = (path: Path, type: string, data: any) => (e: DragEvent) => {
    const dataTransfer: ?DataTransfer = e.dataTransfer;

    if (!dataTransfer || !dataTransfer.getData) {
      throw new Error('Data transfer issue');
    }

    const dropSpecString = JSON.stringify({
      data,
      type,
      path
    });

    dataTransfer.setData(INTERNAL_TRANSFER_TYPE, dropSpecString);

    try {
      const [tree, edits] = remove(
        this.state.tree,
        this.props.schema,
        null,
        path,
        data
      );

      this.setState({
        draftData: {
          tree,
          edits
        }
      });
    } catch (error) {
      console.log(`Couldn't detach: ${error.message}`);
    }
  };

  runDrop = async (path: Path, e: DragEvent) => {
    e.preventDefault();
    let spec;

    try {
      spec = await this.getDropData(e);
    } catch (error) {
      return 'error parsing the drag data';
    }

    if (!spec) {
      return 'could not find a way to handle this drag event';
    }

    // TODO: change this to `pathAtDepth` to get the type
    const { data, path: sourcePath, type } = spec;

    if (sourcePath && isSubPath(sourcePath, path)) {
      return "can't drop into itself";
    }

    // TODO: remove type from PathSpec and find the type from the structure?
    const allowedType = path[path.length - 1].type;

    if (type !== allowedType) {
      return `can't drop ${type}, expecting ${allowedType || 'unknown'}`;
    }

    try {
      // this could probably just be draft tree
      const [tree, edits] = insert(
        this.state.draftData.tree || this.state.tree,
        this.props.schema,
        sourcePath,
        path,
        data
      );

      // dedupe

      const combinedEdits = mergeMoves([
        ...(this.state.draftData.edits || []),
        ...edits
      ]);

      this.setState({
        draftData: {
          tree: null,
          edits: null
        }
      });

      combinedEdits.forEach(edit => {
        const typeEditors = this.props.editHandlers[edit.type];
        if (!typeEditors) {
          return;
        }
        const nodeTypeEditor = typeEditors[edit.nodeType];
        if (!nodeTypeEditor) {
          return;
        }
        nodeTypeEditor(edit);
      });

      this.props.onChange(tree, combinedEdits);
    } catch (error) {
      return error.message;
    }
  };

  attach = (path: Path) => async (e: DragEvent) => {
    const error = await this.runDrop(path, e);

    if (error) {
      this.props.onError(error);
    }
  };

  render() {
    const { attach, detach, onDragEnd } = this;
    const { schema } = this.props;
    const { tree } = this.state;

    return (
      <div onDragEnd={onDragEnd}>
        <Node
          node={tree}
          path={[]}
          attach={attach}
          detach={detach}
          schema={schema}
        />
      </div>
    );
  }
}

export default Collection;

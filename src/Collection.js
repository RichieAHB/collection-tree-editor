// @flow

import React from 'react';
import Node from './Node';
import { isSubPath } from './utils/PathUtils';
import { insert, remove /* dedupe */ } from './utils/TreeUtils';
import { INTERNAL_TRANSFER_TYPE } from './Constants';

type PathSpec = {|
  key: string,
  index: number,
  type: ?string
|};

type Path = PathSpec[];

type DropSpec = {
  data: any,
  type: string,
  path?: Path
};

type DropMapper = string => DropSpec;

type DropMapperMap = {
  [string]: DropMapper
};

type InsertAction = {|
  type: 'INSERT',
  payload: {
    id: string,
    data: any,
    type: string
  }
|};

type RemoveAction = {|
  type: 'INSERT',
  payload: {
    id: string,
    data: any,
    type: string
  }
|};

type EditAction = InsertAction | RemoveAction;

type Renderer = () => any;

type RendererMap = {
  [string]: Renderer
};

type CollectionProps<Tree> = {
  dropMappers: DropMapperMap,
  structure: any[],
  tree: Tree,
  onChange: (tree: Tree, edits: EditAction[]) => void,
  renderers: RendererMap,
  dedupeTypes: string[]
};

type CollectionState<Tree> = {|
  tree: Tree,
  draftData: {
    tree: ?Tree,
    edits: ?(EditAction[])
  }
|};

class Collection<Tree> extends React.Component<
  CollectionProps<Tree>,
  CollectionState<Tree>
> {
  constructor(props: CollectionProps<Tree>) {
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
    dropMappers: {}
  };

  static getDerivedStateFromProps = ({ tree }: CollectionProps<Tree>) => ({
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
      const [tree, edits] = remove(this.state.tree, null, path);
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

  attach = (path: Path) => async (e: DragEvent) => {
    e.preventDefault();
    let spec;

    try {
      spec = await this.getDropData(e);
    } catch (error) {
      console.log(`error parsing the drag data`);
      return;
    }

    if (!spec) {
      return;
    }

    const { data, path: sourcePath, type } = spec;

    if (sourcePath && isSubPath(sourcePath, path)) {
      console.log(`can't drop into itself`);
      return;
    }

    // TODO: remove type from PathSpec and find the type from the structure?
    const allowedType = path[path.length - 1].type;

    if (type !== allowedType) {
      console.log(`can't drop ${type}, expecting ${allowedType || 'unknown'}`);
      return;
    }

    try {
      // this could probably just be draft tree
      const [tree, edits] = insert(
        this.state.draftData.tree || this.state.tree,
        sourcePath,
        path,
        data,
        type
      );

      // dedupe

      const combinedEdits = [...(this.state.draftData.edits || []), ...edits];

      this.props.onChange(tree, combinedEdits);
    } catch (error) {
      console.log(`Couldn't attach: ${error.message}`);
    }
  };

  render() {
    const { attach, detach, onDragEnd } = this;
    const { structure, renderers } = this.props;
    const { tree } = this.state;

    return (
      <div onDragEnd={onDragEnd}>
        <Node
          node={tree}
          path={[]}
          attach={attach}
          detach={detach}
          renderers={renderers}
          structure={structure}
        />
      </div>
    );
  }
}

export default Collection;

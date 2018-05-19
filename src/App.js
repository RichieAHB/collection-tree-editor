import React from 'react';
import produce from 'immer';
import DragZone from './DragZone';
import DropZone from './DropZone';

const buildTree = (model, frontId, frontsKey) => {
  const front = model[frontsKey][frontId];
  return {
    ...front,
    collections: front.collections.map(id => {
      const collection = model.collections[id];
      return {
        ...collection,
        articleFragments: collection.articleFragments.map(id => {
          const articleFragment = model.articleFragments[id];
          return {
            ...articleFragment,
            supporting: (articleFragment.supporting || []).map(id => {
              const supporting = model.articleFragments[id];
              return supporting;
            })
          };
        })
      };
    })
  };
};

const findAtPath = (obj, path) =>
  path.reduce((o, [key, index]) => o[key][index], obj);

const build = (normalizedData, frontId, frontsKey, articleNesting) => {
  let tree = buildTree(normalizedData, frontId, frontsKey);

  return {
    tree,
    update: onUpdate => path => e => {
      const data = JSON.parse(e.dataTransfer.getData('data'));
      tree = produce(tree, draftTree => {
        const newPath = path.slice();
        const [key, index] = newPath.pop();
        const parent = findAtPath(draftTree, newPath);
        parent[key].splice(index, 0, data);
      });
      onUpdate(tree);
    },
    remove: onRemove => path => () => {
      tree = produce(tree, draftTree => {
        const newPath = path.slice();
        const [key, index] = newPath.pop();
        const parent = findAtPath(draftTree, newPath);
        parent[key].splice(index, 1);
      });
      onRemove(tree);
    }
  };
};

const Indent = ({ children }) => (
  <div style={{ marginLeft: '10px' }}>{children}</div>
);



class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    const { normalizedData, frontId, frontsKey, articleNesting } = this.props;
    const { tree, remove, update } = build(
      normalizedData,
      frontId,
      frontsKey,
      articleNesting
    );
    this.state = {
      tree,
      remove: remove(this.onDragStart),
      update: update(this.onDrop)
    };
  }

  onDragStart = tree => {}

  onDrop = tree => this.setState({
    tree
  });

  render() {
    const { update, remove, tree } = this.state;

    return (
      <div>
        <DragZone data="test" />
        <h1>Front</h1>
        {tree.collections.map((collection, i) => (
          <Indent key={collection.id}>
            <div>{collection.title}</div>
            {collection.articleFragments.map((articleFragment, j) => (
              <Indent key={articleFragment.id}>
                <DropZone
                  onDrop={update([['collections', i], ['articleFragments', j]])}
                />
                <DragZone
                  onDragStart={remove([
                    ['collections', i],
                    ['articleFragments', j]
                  ])}
                  data={articleFragment}
                >
                  {articleFragment.title}
                </DragZone>
                {(articleFragment.supporting || []).map((supporting, k) => (
                  <Indent key={supporting.id}>
                    <DropZone
                      onDrop={update([
                        ['collections', i],
                        ['articleFragments', j],
                        ['supporting', k]
                      ])}
                    />
                    <DragZone
                      onDragStart={remove([
                        ['collections', i],
                        ['articleFragments', j],
                        ['supporting', k]
                      ])}
                      data={supporting}
                    >
                      {supporting.title}
                    </DragZone>
                  </Indent>
                ))}
              </Indent>
            ))}
          </Indent>
        ))}
      </div>
    );
  }
}

App.defaultProps = {
  frontsKey: 'fronts'
};

export default App;

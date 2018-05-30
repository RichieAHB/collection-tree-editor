import * as React from 'react';
import { mount } from 'enzyme';
import Collection from '../Collection';
import { el, RenderNode } from '../lib';

const tree = {
  id: 1,
  webTitle: 'Front 1',
  collections: [
    {
      id: 1,
      webTitle: 'Collection 1',
      articleFragments: [
        {
          id: 1,
          webTitle: 'Article 1',
          supporting: [
            { id: 2, webTitle: 'Article 2' },
            { id: 3, webTitle: 'Article 3' }
          ]
        },
        { id: 4, webTitle: 'Article 4', supporting: [] }
      ]
    },
    { id: 2, webTitle: 'Collection 2', articleFragments: [] }
  ]
};

const renderNode = ({ children }) => <div data-test="node">{children}</div>;

const schema = el(
  'front',
  renderNode,
  el(
    'collection',
    renderNode,
    el('articleFragment', renderNode, el('articleFragment', renderNode), {
      childrenKey: 'supporting'
    })
  )
);

describe('Collection', () => {
  it('renders every node', () => {
    const wrapper = mount(<Collection schema={schema} tree={tree} />);
    expect(wrapper.find('[data-test="node"]').length).toBe(7);
  });
});

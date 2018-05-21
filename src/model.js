const model = {
  fronts: {
    1: {
      id: 1,
      title: 'Front 1',
      collections: [1]
    }
  },
  collections: {
    1: {
      id: 1,
      title: 'Collection 1',
      articleFragments: [1, 4]
    }
  },
  articleFragments: {
    1: {
      id: 1,
      title: 'Article 1',
      supporting: [2, 3]
    },
    2: {
      id: 2,
      title: 'Article 2'
    },
    3: {
      id: 3,
      title: 'Article 3'
    },
    4: {
      id: 4,
      title: 'Article 4'
    }
  }
};

export default model;

const model = {
  fronts: {
    1: {
      id: 1,
      webTitle: 'Front 1',
      collections: [1, 2]
    }
  },
  collections: {
    1: {
      id: 1,
      webTitle: 'Collection 1',
      articleFragments: [1, 4]
    },
    2: {
      id: 2,
      webTitle: 'Collection 2'
    }
  },
  articleFragments: {
    1: {
      id: 1,
      webTitle: 'Article 1',
      supporting: [2, 3]
    },
    2: {
      id: 2,
      webTitle: 'Article 2'
    },
    3: {
      id: 3,
      webTitle: 'Article 3'
    },
    4: {
      id: 4,
      webTitle: 'Article 4'
    }
  }
};

export default model;

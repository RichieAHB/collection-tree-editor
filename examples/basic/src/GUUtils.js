import capiQuery from './CAPI';

const capi = capiQuery();

const searchById = async id =>
  (await capi.search({
    ids: id,
    'api-key': 'teleporter-view'
  })).response.results[0];

const isGuardianURL = url => {
  const [, id] = url.match(/https:\/\/www.theguardian\.com\/(.*)\??/) || [];

  return {
    url,
    id
  };
};

const urlToArticle = async text => {
  const { id } = isGuardianURL(text);

  return (
    !!id && {
      data: await searchById(id),
      type: 'articleFragment'
    }
  );
};

export { urlToArticle };

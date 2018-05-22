const API_BASE = 'https://content.guardianapis.com/';

const enc = encodeURIComponent;

const qs = o =>
  `?${Object.keys(o)
    .map(key => {
      const val = o[key];

      if (!val) {
        return false;
      }

      return `${enc(key)}=${enc(val)}`;
    })
    .filter(Boolean)
    .join('&')}`;

const capiQuery = (baseURL = API_BASE, fetch = window.fetch) => ({
  search: async params => {
    const response = await fetch(
      `${baseURL}search${qs({
        ...params
      })}`
    );

    return response.json();
  }
});

export default capiQuery;

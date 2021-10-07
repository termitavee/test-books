const baseUrl = 'https://openlibrary.org';
const params = { method: 'GET', headers: { Accept: '*/*' } };

const search = (text = '') => {
  //dont have pagination so bring all and filter locally
  return fetch(`${baseUrl}/search.json?q=${text}`, params)
    .then(res => {
      try {
        return res.json();
      } catch (e) {
        return res;
      }
    })
    .then(list => {
      const listRes: IBook[] | string = list?.docs || list.error || [];

      return listRes;
    })
    .catch(err => {
      console.warn('fetch', { err });
    });
};

const getBook = (id = '') => {
  //dont have pagination so bring all and filter locally
  return fetch(`${baseUrl}${id}.json`, params)
    .then(res => {
      try {
        return res.json();
      } catch (e) {
        return res;
      }
    })
    .catch(err => {
      console.warn('fetch', { err });
    });
};

const BookApi = {
  search,
  getBook,
};

export default BookApi;

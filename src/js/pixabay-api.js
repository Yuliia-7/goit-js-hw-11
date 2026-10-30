import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const APY_KEY = '58321598-67404884f8deeffb5d54b2073';

export const getImagesByQuery = query => {
  return axios
    .get(BASE_URL, {
      params: {
        key: APY_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
};

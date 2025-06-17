import axios from 'axios';
export function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: '50818565-86d44cf91814c3f45e3f7ee49',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return axios(`https://pixabay.com/api/?${params}`).then(resp => resp.data);
}

import axios from 'axios';
export async function getImagesByQuery(query, page) {
  const params = new URLSearchParams({
    key: '50818565-86d44cf91814c3f45e3f7ee49',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page,
  });
  const resp = await axios(`https://pixabay.com/api/?${params}`);
  return resp.data;
}

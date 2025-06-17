import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  lightbox,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = event.target.elements[0].value.trim();
  if (!query) return;

  showLoader();

  getImagesByQuery(query)
    .then(response => {
      if (response.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: `topRight`,
        });
        clearGallery();
        return;
      }
      gallery.innerHTML = createGallery(response.hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.error('Error:', error);
      hideLoader();
      iziToast.error({
        message: 'Error loading images',
        position: `topRight`,
      });
    })
    .finally(() => {
      hideLoader();
    });
}

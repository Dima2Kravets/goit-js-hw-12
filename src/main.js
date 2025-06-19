import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  lightbox,
  createGallery,
  clearGallery,
  showLoaderTop,
  hideLoaderTop,
  hideLoadMoreButton,
  showLoadMoreButton,
  showLoaderBottom,
  hideLoaderBottom,
  btnLoad,
  scrollAfterLoad,
} from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');

let page = 1;

let per_page = 15;

let totalHits;

let query;

let totalPage;

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  page = 1;
  showLoaderTop();
  hideLoadMoreButton();
  query = event.target.elements[0].value.trim();
  if (!query) {
    hideLoaderTop();
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }
  try {
    const response = await getImagesByQuery(query, page);
    totalHits = response.totalHits;
    totalPage = Math.ceil(totalHits / per_page);
    if (page < totalPage) {
      showLoadMoreButton();
    }
    if (response.hits.length === 0) {
      hideLoaderTop();
      hideLoadMoreButton();
      clearGallery();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: `topRight`,
      });

      return;
    }
    gallery.innerHTML = createGallery(response.hits);
    lightbox.refresh();
    hideLoaderTop();
  } catch (error) {
    console.error('Error:', error);
    hideLoaderTop();
    clearGallery();
    iziToast.error({
      message: 'Error loading images',
      position: `topRight`,
    });
  }
}

btnLoad.addEventListener('click', handleClick);
async function handleClick(event) {
  showLoaderBottom();
  page += 1;
  try {
    const response = await getImagesByQuery(query, page);
    gallery.insertAdjacentHTML('beforeend', createGallery(response.hits));
    lightbox.refresh();
    hideLoaderBottom();
    scrollAfterLoad();
    if (page >= totalPage) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: `topRight`,
      });
    }
  } catch (error) {
    clearGallery();
    hideLoaderBottom();
    hideLoadMoreButton();
    iziToast.error({
      message: 'Error loading images',
      position: `topRight`,
    });
  }
}

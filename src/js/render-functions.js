import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loaderTop = document.querySelector('#loader-top');
const loaderBottom = document.querySelector('#loader-bottom');
export const btnLoad = document.querySelector('.btn-load');

export const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="card">
          <p><span>👍 Likes</span>${likes}</p>
          <p><span>👁 Views</span>${views}</p>
          <p><span>💬 Comments</span>${comments}</p>
          <p><span>⬇ Downloads</span>${downloads}</p>
        </div>
      </li>
    `
    )
    .join('');
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showLoaderTop() {
  loaderTop.classList.remove('hidden');
}

export function hideLoaderTop() {
  loaderTop.classList.add('hidden');
}

export function showLoaderBottom() {
  loaderBottom.classList.remove('hidden');
}

export function hideLoaderBottom() {
  loaderBottom.classList.add('hidden');
}

export function hideLoadMoreButton() {
  btnLoad.classList.add('hidden');
}
export function showLoadMoreButton() {
  btnLoad.classList.remove('hidden');
}

export function scrollAfterLoad() {
  const firstCard = document.querySelector('.gallery-item');
  if (!firstCard) return;
  const cardHeight = firstCard.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    left: 0,
    behavior: 'smooth',
  });
}

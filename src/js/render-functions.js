import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('#loader');

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

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

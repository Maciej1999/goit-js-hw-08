import _ from 'lodash';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
for (let i = 0; i < galleryItems.length; i++) {
  const link = document.createElement('a');
  link.className = 'gallery__item';
  link.href = `${galleryItems[i].original}`;
  const img = document.createElement('img');
  img.className = 'gallery__image';
  img.src = galleryItems[i].preview;
  img.alt = galleryItems[i].description;
  link.appendChild(img);
  gallery.appendChild(link);
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

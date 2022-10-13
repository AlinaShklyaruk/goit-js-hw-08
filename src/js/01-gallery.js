import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createGalleryItems(galleryItems);
function createGalleryItems(items) {
    return items.map(({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`).join('');
}

const gallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captions: true,
    captionsDelay: 250,
 });

console.log(galleryItems);

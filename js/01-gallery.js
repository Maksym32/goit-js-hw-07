import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const image = createGalleryItem(galleryItems);
gallery.addEventListener('click', onImageClick);
gallery.insertAdjacentHTML('afterbegin', image);

function createGalleryItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a></div>`).join("");

};
function onImageClick(event) {
  
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
};





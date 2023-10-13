import { galleryItems } from './gallery-items.js';

// Change code below this line
document.querySelector('.gallery').innerHTML = galleryItems.map(({preview,original,description}) =>
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');
let gallery = new SimpleLightbox('.gallery a',
    {
        captionPosition: 'bottom',
        captionDelay: 250,
        captionsData:'alt',
    });


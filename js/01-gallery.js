import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryItems.map(({preview,original,description}) =>
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
let onOpenedModalKeyDown;
function onKeyDown(e)
{    
    if (e.key === 'Escape')
        this.close(() => {
            document.removeEventListener('keydown', onOpenedModalKeyDown)
        });
}
gallery.addEventListener('click', e => {    
    if (e.target.nodeName !== 'IMG')
        return;    
    e.preventDefault(); 
    const modal = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
    onOpenedModalKeyDown = onKeyDown.bind(modal);
    modal.show(() => { document.addEventListener('keydown', onOpenedModalKeyDown); })   
})




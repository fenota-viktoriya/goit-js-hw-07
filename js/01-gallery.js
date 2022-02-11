import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const galleryRef = document.querySelector('.gallery');
function createMarkup({ preview, original, description}){
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt=""${description}
    />
  </a>
</div>`
};
const markup = galleryItems.map(createMarkup).join('');
galleryRef.insertAdjacentHTML('afterbegin', markup);

//2.Реализация делегирования на div.gallery и получение url большого изображения.
galleryRef.addEventListener('click', onClickGallery);

function onClickGallery(event){
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
      }
      createBasicLightbox();
};


function createBasicLightbox(){
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">     
`,  {
    onShow: () => {
    
      window.addEventListener("keydown", onClickEscape);
    },
    onClose: () => window.removeEventListener("keydown", onClickEscape),
  }
);
function onClickEscape(event){
    if (event.key === "Escape") {
        instance.close();
      }
}
instance.show()
        
};



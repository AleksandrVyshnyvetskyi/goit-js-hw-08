// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

// Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).  +
// Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того,           
// что библиотека была установлена через npm (синтаксис import/export).




const gallaryContainer = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__card">
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </div>`;
    }).join('');
};

gallaryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
console.log(gallaryContainer)

const captionImg = new SimpleLightbox('.gallery__item', { captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

console.log('Hello !')
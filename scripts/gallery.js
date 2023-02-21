const allPhotos = document.querySelectorAll('.gallery__photo');
const popup = document.querySelector('.popup');
// const nextBtn = document.querySelector('.popup__button-next');
// const prevBtn = document.querySelector('.popup__button-prev');
const popupImg = document.querySelector('.popup__img');
const popupClose = document.querySelector('.popup__close');

allPhotos.forEach(photo => {
    photo.addEventListener('click', (e) => {
        popup.classList.add('popup_opened');
        popupImg.src = photo.getAttribute('src');
    })
});




// const popup = document.querySelector('.popup');
// const popupImg = document.querySelector('.popup__img');
// const popupClose = document.querySelector('.popup__close');

// const photos = document.querySelectorAll('.gallery__photo');



// function closePopup() {
//     popup.classList.remove('popup_opened');
// }

// function openPopup() {
//     popup.classList.add('popup_opened');
//     const swiper = new Swiper(".mySwiper", {
//         pagination: {
//           el: ".swiper-pagination",
//           type: "fraction",
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
// }


// photos.forEach(photo => {
//     photo.addEventListener('click', () => {
//         openPopup();
//         popupImg.src = photo.getAttribute('src');
//     })
// });

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
});
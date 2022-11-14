const plays = [
    {
        name: 'Катапульта',
        author: 'Дмитрий Богославский',
        place: 'Москва 2021',
        image: "url('https://lubimovka.ru/images/2021materials/off/bogoslavskii.JPG')",
        readLink: '',
        downloadLink: 'https://lubimovka.ru/images/2021plays/vnekonkurs/Bogoslavsky_Katapulta.docx'
    },

    {
        name: 'Чёрная пурга',
        author: 'Анастасия Букреева',
        place: 'Москва 2021',
        image: "url('https://lubimovka.ru/images/2021materials/off/bookreeva.JPG')",
        readLink: '',
        downloadLink: 'https://lubimovka.ru/images/2021plays/vnekonkurs/Bukreeva_Chernaya_purga.docx'
    },

    {
        name: 'Ленточки',
        author: 'Павел Пряжко',
        place: 'Москва 2021',
        image: "url('https://lubimovka.ru/images/2021materials/off/pryazhko.JPG')",
        readLink: '',
        downloadLink: 'https://lubimovka.ru/images/2021plays/vnekonkurs/Pryazhko_Lentochki.docx'
    },

    {
        name: 'Друг мой',
        author: 'Константин Стешик',
        place: 'Москва 2021',
        image: "url('https://lubimovka.ru/images/2021materials/off/steshik.JPG')",
        readLink: '',
        downloadLink: 'https://lubimovka.ru/images/2021plays/vnekonkurs/Steshik_Drug_moi.docx'
    },

    {
        name: 'Инау',
        author: 'Олег Михайлов',
        place: 'Москва 2021',
        image: "url('https://lubimovka.ru/images/2021materials/off/mihailov.JPG')",
        readLink: "url('')",
        downloadLink: 'https://lubimovka.ru/images/2021plays/vnekonkurs/Mikhaylov_Inau.docx'
    }
];

const playsContainer = document.querySelector('.plays__items');
const playTemplate  = document.querySelector('#play-template');

const createPlay = (name, author, place, image, readLink, downloadLink) => {
    const play = playTemplate.content
        .querySelector('.play')
        .cloneNode(true);
    play.querySelector('.play__promo').style.backgroundImage = image;
    play.querySelector('.play__title').textContent = name;
    play.querySelector('.play__author').textContent = author;
    play.querySelector('.play__place').textContent = place;
    play.querySelector('.play__link_read').href = readLink;
    play.querySelector('.play__link_download').href = downloadLink;
    return play;
};

const addPlay = (name, author, place, image, readLink, downloadLink) => {
    const play = createPlay(name, author, place, image, readLink, downloadLink);
    playsContainer.append(play)
}

plays.forEach(play => addPlay(play.name, play.author, play.place, play.image, play.readLink, play.downloadLink));

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
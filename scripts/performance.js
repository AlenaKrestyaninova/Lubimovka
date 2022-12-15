const performances = [
    {
        date: '22 октября',
        time: '19:00',
        name: 'С училища',
        playwright: 'Драматург: Иванов Андрей',
        director: 'Режиссёр: Иванов Андрей',
        description: 'История о демоническом обаянии студентки ПТУ и её роковой роли в жизни преподавателя философии. Премьера спектакля состоялась 20 января 2018 года (грант BrewHouse Stage Prize-2017).',
        imageLink: 'https://lubimovka.art/_next/image?url=https%3A%2F%2Flubimovka.art%2Fmedia%2Fimages%2Fafisha%2Fperformances%2Fsuch.jpg&w=1920&q=75',
        linkAbout: 'https://lubimovka.art/performances/1',
        linkTickets: 'https://teatrpushkin.ru/spektakli/detail/s_uchilischa/'
    },
    {
        date: '4 ноября',
        time: '20:00',
        name: 'Я убил царя',
        playwright: 'Драматург: Богаев Олег',
        director: 'Режиссёр: Мирзоев Владимир',
        description: 'В ночь с 16 на 17 июля 1918 года была убита семья Романовых.',
        imageLink: 'https://lubimovka.art/_next/image?url=https%3A%2F%2Flubimovka.art%2Fmedia%2Fimages%2Fafisha%2Fperformances%2FTsar_main.jpg&w=1080&q=75',
        linkAbout: 'https://lubimovka.art/performances/8',
        linkTickets: 'https://vnutri.space/ya-ubil-tsarya'
    },
    {
        date: '9 ноября',
        time: '20:00',
        name: 'Финист Ясный Сокол',
        playwright: 'Драматург: Петрийчук Светлана',
        director: '',
        description: 'История о женщинах, решивших виртуально выйти замуж за представителей радикального ислама и уехать к ним в Сирию.',
        imageLink: 'https://lubimovka.art/_next/image?url=https%3A%2F%2Flubimovka.art%2Fmedia%2Fimages%2Fafisha%2Fperformances%2FFinist_obl.jpg&w=1080&q=75',
        linkAbout: 'https://lubimovka.art/performances/9',
        linkTickets: 'https://vnutri.space/finist'
    },
    {
        date: '10 ноября',
        time: '19:00',
        name: 'Про линя',
        playwright: 'Драматург: Каргин Александр',
        director: 'Режиссёр: Кудряшов Александр',
        description: 'Экзистенциальное путешествие внутрь себя и по памяти главного героя. Премьера спектакля состоялась 4 ноября 2019 года ("Любимовка.Продакшн").',
        imageLink: 'https://lubimovka.art/_next/image?url=https%3A%2F%2Flubimovka.art%2Fmedia%2Fimages%2Fafisha%2Fperformances%2Flin2.jpg&w=1920&q=75',
        linkAbout: 'https://lubimovka.art/performances/2',
        linkTickets: 'https://lubimovka.timepad.ru/event/1094231/'
    },
    {
        date: '11 ноября',
        time: '18:00',
        name: 'Опус ДНК',
        playwright: 'Драматург: Августеняк Екатерина',
        director: 'Режиссёр: Августеняк Екатерина',
        description: 'Партитура на основе генетического кода как способ преодолеть проблемы в общении. Премьера спектакля состоялась 20 февраля 2020 года (грант BrewHouse Stage Prize-2019).',
        imageLink: 'https://lubimovka.art/_next/image?url=https%3A%2F%2Flubimovka.art%2Fmedia%2Fimages%2Fafisha%2Fperformances%2FOpus.jpg&w=1080&q=75',
        linkAbout: 'https://lubimovka.art/performances/6',
        linkTickets: 'http://web.archive.org/web/20220428184413/http://meyerhold.ru/opus-dnk/'
    },
    {
        date: '1 января',
        time: '4:00',
        name: 'Мама',
        playwright: 'Драматург: Волошина Ася',
        director: 'Режиссёр: Шехватов Юрий',
        description: 'Монолог о личном опыте и вечных вопросах. Премьера спектакля состоялась 22 октября 2019 года ("Любимовка.Продакшн").',
        imageLink: 'https://lubimovka.art/_next/image?url=https%3A%2F%2Flubimovka.art%2Fmedia%2Fimages%2Fafisha%2Fperformances%2Fmama.jpg&w=1920&q=75',
        linkAbout: 'https://lubimovka.art/performances/4',
        linkTickets: 'https://www.instagram.com/mamaspekt/'
    }
];

const performanceTemplate  = document.querySelector('.performance__template').content;
const performanceSectionForThreeElements = document.querySelector('#performance__section_for-three-elements');
const performanceSectionForTwoElements = document.querySelector('#performance__section_for-two-elements');
const performanceSectionForOneElement = document.querySelector('#performance__section_for-one-element');

const createPerformance = (date, time, name, playwright, director, description, imageLink, linkAbout, linkTickets) => {
    const performance = performanceTemplate.querySelector('.performance__item').cloneNode(true);
    const performanceImage = performance.querySelector('.performance__image');

    performanceImage.alt = name;
    performanceImage.src = imageLink;
    performance.querySelector('.performance__date').textContent = date;
    performance.querySelector('.performance__time').textContent = time;
    performance.querySelector('.performance__name').textContent = name;
    performance.querySelector('#playwright').textContent = playwright;
    performance.querySelector('#director').textContent = director;
    performance.querySelector('.performance__description').textContent = description;
    performance.querySelector('#about').href = linkAbout;
    performance.querySelector('#tickets').href = linkTickets;

    return performance;
};

for (let i=0; i<3; i++) {
    const newPerformance = createPerformance(performances[i].date, performances[i].time, performances[i].name, performances[i].playwright, performances[i].director, performances[i].description, performances[i].imageLink, performances[i].linkAbout, performances[i].linkTickets);
    performanceSectionForThreeElements.append(newPerformance);
}
for (let i=3; i<5; i++) {
    const newPerformance = createPerformance(performances[i].date, performances[i].time, performances[i].name, performances[i].playwright, performances[i].director, performances[i].description, performances[i].imageLink, performances[i].linkAbout, performances[i].linkTickets);
    performanceSectionForTwoElements.append(newPerformance);
}

performanceSectionForOneElement.append(createPerformance(performances[5].date, performances[5].time, performances[5].name, performances[5].playwright, performances[5].director, performances[5].description, performances[5].imageLink, performances[5].linkAbout, performances[5].linkTickets));




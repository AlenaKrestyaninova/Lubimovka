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
    }
];

const performanceTemplate  = document.querySelector('.performance__template').content;
const performanceSection = document.querySelector('.performance__section');

const createPerformance = (date, time, name, playwright, director, description, imageLink, linkAbout, linkTickets) => {
    const performance = performanceTemplate.querySelector('.performance__item').cloneNode(true);
    const performanceImage = performance.querySelector('.performance__image');

    performanceImage.alt = name;
    performanceImage.src = imageLink;
    performance.querySelector('.performance__date').textContent = date;
    performance.querySelector('.performance__time').textContent = time;
    performance.querySelector('.performance__name').textContent = name;
    performance.querySelector('.playwright').textContent = playwright;
    performance.querySelector('.director').textContent = director;
    performance.querySelector('.performance__description').textContent = description;
    performance.querySelector('.about').href = linkAbout;
    performance.querySelector('.tickets').href = linkTickets;

    return performance;
};

performances.forEach((performance) => {
    const newPerformance = createPerformance(performance.date, performance.time, performance.name, performance.playwright, performance.director, performance.description, performance.imageLink, performance.linkAbout, performance.linkTickets);
    performanceSection.append(newPerformance);
});

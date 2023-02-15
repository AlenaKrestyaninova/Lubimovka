const persons = [
    {
        name: 'Алёна Крестьянинова',
        description: 'Тим-лид, умница, красавица',
        url: './images/persons/prAlenaKrestyaninova.jpg'
    },
    {
        name: 'Дмитрий Бакшистов',
        description: 'Веб разработчик, кондитер',
        url: './images/persons/prDmitriyBakshistov.jpg'
    },
    {
        name: 'Аврора Ренард',
        description: 'Сейлор Мун, бесподобна и чудесна',
        url: './images/persons/prAuroraRenard.jpg'
    },
    {
        name: 'Алексей Холмогоров',
        description: 'Инкогнито, user not found',
        url: './images/persons/prAlekseyKholmogorov.jpeg'
    },
    {
        name: 'Арина Кострова',
        description: 'Web-разработчик, любит путешествовать',
        url: './images/persons/prArinaKostrova.jpg'
    }
];

const personTemplate = document.querySelector('.persons__template').content;
const personSection = document.querySelector('.persons__items');

const createNewPerson = (name, description, url) => {
    const person = personTemplate.querySelector('.persons__item').cloneNode(true);
    const personPhoto = person.querySelector('.persons__photo');

    personPhoto.alt = name;
    personPhoto.src = url;
    person.querySelector('.persons__name').textContent = name;
    person.querySelector('.persons__description').textContent = description;

    return person;
};

persons.forEach( (person) => {
    const newPerson = createNewPerson(person.name, person.description, person.url);
    personSection.append(newPerson);
});

let sliderPersons
function initPersonsSlider () {
    const personsSection = document.querySelector('.persons')
    const slider = personsSection.querySelector('.swiper-container');
    if(window.innerWidth < 1280) {
        sliderPersons = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 30,
            mousewheel: true,
            keyboard: true,
            onlyInViewport: true,
            slidesOffsetAfter: 168,
            breakpoints: {
                200: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                }
            },
        })
    } else {
        if (slider.classList.contains('swiper-container-initialized')) {
            sliderPersons.destroy();
        }
    }
}

initPersonsSlider();
addEventListener('resize', initPersonsSlider);
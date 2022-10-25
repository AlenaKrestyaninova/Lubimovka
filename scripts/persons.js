const persons = [
    {
        name: 'Мария Крупник',
        description: 'Арт-менеджер, переводчик, куратор образовательной программы',
        url: '../images/persons/krupnik.webp'
    },
    {
        name: 'Вероника Устимук',
        description: 'Продюсер, координатор волонтёров фестиваля',
        url: '../images/persons/Ustimuk_cut.webp'
    },
    {
        name: 'Анна Юсина',
        description: 'Театровед, редактор блога фестиваля',
        url: '../images/persons/yusina.webp'
    },
    {
        name: 'Ольга Иванникова',
        description: 'Продюсер, координатор фестиваля',
        url: '../images/persons/Ivannikova.webp'
    }
];

const personTemplate = document.querySelector('.persons__template').content;
const personSection = document.querySelector('.persons__section');

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
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}

export class UiController {
    constructor(uiWrapperHtmlClass) {
        this.uiWrapper = document.querySelector(uiWrapperHtmlClass);
        this.nameInput = this.uiWrapper.querySelector('#name');
        this.nameRandomButton = this.uiWrapper.querySelector('#random-name');
        this.weaponInput = this.uiWrapper.querySelector('#weapon');
        this.weaponRandomButton = this.uiWrapper.querySelector('#random-weapon');
        this.strengthInput = this.uiWrapper.querySelector('#strength');
        this.strengthRandomButton = this.uiWrapper.querySelector('#random-strength');
        this.hpInput = this.uiWrapper.querySelector('#hitpoints');
        this.hpRandomButton = this.uiWrapper.querySelector('#random-hitpoints');

        this.initAllEventListeners();
    }


    initAllEventListeners = () => {
        this.nameInput.addEventListener('change', () => {
            console.log('Name input was change');
        });

        this.nameRandomButton.addEventListener('click', () => {
            this.nameInput.value = charName[getRandomNumberBetween(0, 24)];
            console.log('Random Name button click');
        });

        this.weaponInput.addEventListener('change', () => {
            console.log('Weapon input was change');
        });

        this.weaponRandomButton.addEventListener('click', () => {
            this.weaponInput.value = charWeapon[getRandomNumberBetween(0, 24)];
            console.log('Random weapon button click');
        });

        this.strengthInput.addEventListener('change', () => {
            console.log('strength input was change');
        });

        this.strengthRandomButton.addEventListener('click', () => {
            this.strengthInput.value = getRandomNumberBetween(1, 10);
            console.log('Strength Name button click');
        });

        this.hpInput.addEventListener('change', () => {
            console.log('Hp input was change');
        });

        this.hpRandomButton.addEventListener('click', () => {
            this.hpInput.value = getRandomNumberBetween(50, 100);
            console.log('Random hp button click');
        });
    };
}

const charName = ['Harry', 'Ross',
    'Bruce', 'Cook',
    'Carolyn', 'Morgan',
    'Albert', 'Walker',
    'Randy', 'Reed',
    'Larry', 'Barnes',
    'Lois', 'Wilson',
    'Jesse', 'Campbell',
    'Ernest', 'Rogers',
    'Theresa', 'Patterson',
    'Henry', 'Simmons',
    'Michelle', 'Perry',
    'Frank'];

const charWeapon = ['Brooks',
    'Rachel', 'Edwards',
    'Christopher', 'Perez',
    'Thomas', 'Baker',
    'Sara', 'Moore',
    'Chris', 'Bailey',
    'Roger', 'Johnson',
    'Marilyn', 'Thompson',
    'Anthony', 'Evans',
    'Julie', 'Hall',
    'Paula', 'Phillips',
    'Annie', 'Hernandez',
    'Dorothy', 'Murphy'];

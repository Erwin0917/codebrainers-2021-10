export class UiController {
    constructor(uiWrapperHtmlClass) {
        this.uiWrapper = document.querySelector(uiWrapperHtmlClass);

        // this.nameInput = this.uiWrapper.querySelector('#name');
        this.nameRandomButton = this.uiWrapper.querySelector('#random-name');
        this.weaponInput = this.uiWrapper.querySelector('#weapon');
        this.weaponRandomButton = this.uiWrapper.querySelector('#random-weapon');
        this.strengthInput = this.uiWrapper.querySelector('#strength');
        this.strengthRandomButton = this.uiWrapper.querySelector('#random-strength');
        this.hitpointsInput = this.uiWrapper.querySelector('#hitpoints');
        this.hitpointsRandomButton = this.uiWrapper.querySelector('#random-hitpoints');

        this.randomCharacterButton = this.uiWrapper.querySelector('#random-character');


        this.addEventListeners()

    }
//metoda dodająca listenery aby w constructorze nie było syfu
    addEventListeners = () => {
        //Sekcja z inputem////////////////////////////////////////////////////////////////////////
        this.nameInput.addEventListener('change', () => {
            console.log('Name input was change');
        })
        this.weaponInput.addEventListener('change', () => {
            console.log('Weapon input was changed');
        })
        this.strengthInput.addEventListener('change', () => {
            console.log('Strength input was changed');
        })
        this.hitpointsInput.addEventListener('change', () => {
            console.log('hp input was changed');
        })

        //Sekcja z kliknięciem//////////////////////////////////////////////////////////////
        function getRandomNumberBetween(min, max) {
            return Math.floor(Math.random() * (max - min * 1) + min);
        }

        this.nameRandomButton.addEventListener('click', () => {
            this.fillNameInput(charName[Math.floor(Math.random() * charName.length)]);
            console.log('Random Name button click');
        })

        this.weaponRandomButton.addEventListener('click', () => {
            this.fillWeaponInput(charWeapon[getRandomNumberBetween(0,24)])
            console.log('Random Weapon button click');

        })

        this.strengthRandomButton.addEventListener('click', () => {
            this.fillStrengthInput(getRandomNumberBetween(1,10));
            console.log('Random Strength button click');
        })

        this.hitpointsRandomButton.addEventListener('click', () => {
            this.fillHitpointsInput(getRandomNumberBetween(50,100))
            console.log('Random hp button click');
        })

        //Mozna tutaj  poniżej poprzeklejać po prostu logikę z góry np
        // this.hitpointsInput.value = bla bla bla
        //this.nameInput.value = bla bla bla ale mozna też inaczej
        this.randomCharacterButton.addEventListener('click', this.fillAllInputs);
    };

   fillHitpointsInput = (newHpValue) => {
       this.hitpointsInput.value = newHpValue;

   }

   fillStrengthInput = (newStregthValue) => {
       this.strengthInput.value = newStregthValue;
   }

   fillWeaponInput = (newWeaponValue) => {
       this.weaponInput.value = newWeaponValue;

   }

   fillNameInput = (newNameValue) => {
       this.nameInput.value = newNameValue;

   }

   fillAllInputs = () => {
       this.fillHitpointsInput(getRandomNumberBetween(50,100));
       this.fillStrengthInput(getRandomNumberBetween(1,10));
       this.fillWeaponInput(charWeapon[getRandomNumberBetween(0,24)]);
       this.fillNameInput(charName[Math.floor(Math.random() * charName.length)]);

   }
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
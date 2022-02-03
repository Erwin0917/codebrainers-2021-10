import {getRandomNumberBetween} from "./main.js";

export class UiController {
    constructor(uiWrapperHtmlClass, addCharacterCallback) {
        this.uiWrapper = document.querySelector(uiWrapperHtmlClass);
        this.addCharacterCallback = addCharacterCallback;
        this.nameInput = this.uiWrapper.querySelector('#name');
        this.nameRandomButton = this.uiWrapper.querySelector('#random-name');
        this.weaponInput = this.uiWrapper.querySelector('#weapon');
        this.weaponRandomButton = this.uiWrapper.querySelector('#random-weapon');
        this.strengthInput = this.uiWrapper.querySelector('#strength');
        this.strengthRandomButton = this.uiWrapper.querySelector('#random-strength');
        this.hitpointsInput = this.uiWrapper.querySelector('#hitpoints');
        this.hitpointsRandomButton = this.uiWrapper.querySelector('#random-hitpoints');
        this.randomCharacterButton = this.uiWrapper.querySelector('#random-character');
        this.selectTeamInput = this.uiWrapper.querySelector('#default_select');
        this.addCharacterButton = this.uiWrapper.querySelector('#add-character');


        this.initAllEventListeners();

    }

    //metoda dodająca listenery aby w constructorze nie było syfu
    initAllEventListeners = () => {
        //Sekcja z inputem//////////////////////////////////
        this.nameInput.addEventListener('change', () => {
            console.log('Name input was change');
        });
        this.weaponInput.addEventListener('change', () => {
            console.log('Weapon input was changed');
        });
        this.strengthInput.addEventListener('change', () => {
            console.log('Strength input was changed');
        });
        this.hitpointsInput.addEventListener('change', () => {
            console.log('hp input was changed');
        });

        //Sekcja z kliknięciem/////////////////////////////////////
        function getRandomNumberBetween(min, max) {
            return Math.floor(Math.random() * (max - min * 1) + min);
        };

        this.nameRandomButton.addEventListener('click', () => {
            this.fillNameInput(charName[Math.floor(Math.random() * charName.length)]);
            console.log('Random Name button click');
        });

        this.weaponRandomButton.addEventListener('click', () => {
            this.fillWeaponInput(charWeapon[getRandomNumberBetween(0, 24)])
            console.log('Random Weapon button click');

        });

        this.strengthRandomButton.addEventListener('click', () => {
            this.fillStrengthInput(getRandomNumberBetween(1, 10));
            console.log('Random Strength button click');
        });

        this.hitpointsRandomButton.addEventListener('click', () => {
            this.fillHitpointsInput(getRandomNumberBetween(50, 100))
            console.log('Random hp button click');
        });

        //Mozna tutaj  poniżej poprzeklejać po prostu logikę z góry np
        // this.hitpointsInput.value = bla bla bla
        //this.nameInput.value = bla bla bla ale mozna też inaczej

        this.randomCharacterButton.addEventListener('click', this.fillAllInputs);

        this.addCharacterButton.addEventListener('click', this.readInputs);
    };


    fillHitpointsInput = (newHpValue) => {
        if (typeof newHpValue !== 'number') return;
        this.hitpointsInput.value = newHpValue;
    };

    fillStrengthInput = (newStregthValue) => {
        if (typeof newStregthValue !== 'number') return;
        this.strengthInput.value = newStregthValue;
    };

    fillWeaponInput = (newWeaponValue) => {
        if (typeof newWeaponValue !== 'string') return;
        this.weaponInput.value = newWeaponValue;
    };

    fillNameInput = (newNameValue) => {
        if (typeof newNameValue !== 'string') return;
        this.nameInput.value = newNameValue;
    };

    randomTeam = () => {
        const teamValue = Math.random()
        if (teamValue < 0.5) {
            this.selectTeamInput.value = 'teamHero'
        } else {
            this.selectTeamInput.value = 'teamVillain'
        }
    }

    fillAllInputs = () => {
        this.fillHitpointsInput(getRandomNumberBetween(50, 100));
        this.fillStrengthInput(getRandomNumberBetween(1, 10));
        this.fillWeaponInput(charWeapon[getRandomNumberBetween(0, 24)]);
        this.fillNameInput(charName[Math.floor(Math.random() * charName.length)]);
        this.randomTeam();
    };

    readInputs = () => {
        const characterName = this.nameInput.value.trim();
        const characterWeapon = this.weaponInput.value.trim();
        const characterStrength = this.strengthInput.value.trim();
        const characterHp = this.hitpointsInput.value.trim();
        const characterTeam = this.selectTeamInput.value;
        if (characterName !== '' || characterWeapon !== '' || characterStrength !== '' || characterHp !== '' || characterTeam !== '') {
            this.addCharacterCallback(characterName, characterWeapon, characterStrength, characterHp, characterTeam);
            return;
        }
        console.log('Wrong input value')
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <div className="character nes-container">
//     <h2 className="name" id="char-name">Cynthia</h2>
//     <button type="button" className="delete-char" id="delete-char">X</button>
//     <div className="avatar__wrapper">
//         <img className="avatar" src="https://rickandmortyapi.com/api/character/avatar/87.jpeg" alt="hero-avatar">
//     </div>
//     <div className="details__wrapper">
//
//         <p>Weapon: <span className="nes-text is-warning">Heartsnatcher</span></p>
//         <p>Strength: <span className="nes-text is-success">54</span></p>
//         <p>HitPoints: <span className="nes-text is-error">124</span></p>
//
//     </div>
//     <progress className="nes-progress is-error" value="124" max="124"></progress>
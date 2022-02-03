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
        this.hpInput = this.uiWrapper.querySelector('#hitpoints');
        this.hpRandomButton = this.uiWrapper.querySelector('#random-hitpoints');
        this.randomCharacterButton = this.uiWrapper.querySelector('#random-character');
        this.selectTeamInput = this.uiWrapper.querySelector('#default_select');
        this.addCharacterButton = this.uiWrapper.querySelector('#add-character');


        this.initAllEventListeners();
    }

    initAllEventListeners = () => {
        this.nameInput.addEventListener('change', () => {
            console.log('Name input was change');
        });

        this.nameRandomButton.addEventListener('click', () => {
            this.fillNameInput(charName[getRandomNumberBetween(0, 24)]);
            console.log('Random Name button click');
        });

        this.weaponInput.addEventListener('change', () => {
            console.log('Weapon input was change');
        });

        this.weaponRandomButton.addEventListener('click', () => {
            this.fillWeaponInput(charWeapon[getRandomNumberBetween(0, 24)]);
            console.log('Random weapon button click');
        });

        this.strengthInput.addEventListener('change', () => {
            console.log('strength input was change');
        });

        this.strengthRandomButton.addEventListener('click', () => {
            this.fillStrengthInput(getRandomNumberBetween(1, 10));
            console.log('Strength Name button click');
        });

        this.hpInput.addEventListener('change', () => {
            console.log('Hp input was change');
        });

        this.hpRandomButton.addEventListener('click', () => {
            this.fillHpInput(getRandomNumberBetween(50, 100));
            console.log('Random hp button click');
        });

        this.addCharacterButton.addEventListener('click', this.readInputs);

        this.randomCharacterButton.addEventListener('click', this.fillAllInputs);
    };

    fillHpInput = (newHpValue) => {
        if(typeof newHpValue !== 'number' ) return;
        this.hpInput.value = newHpValue;
    };

    fillStrengthInput = (newStrengthValue) => {
        if(typeof newStrengthValue !== 'number' ) return;
        this.strengthInput.value = newStrengthValue;
    };

    fillWeaponInput = (newWeaponInput) => {
        if(typeof newWeaponInput !== 'string' ) return;
        this.weaponInput.value = newWeaponInput;
    };

    fillNameInput = (newNameInput) => {
        if(typeof newNameInput !== 'string' ) return;
        this.nameInput.value = newNameInput;
    };

    randomTeam = () => {
        const teamValue = Math.random();
        if (teamValue < 0.5) {
            this.selectTeamInput.value = 'teamHero';
        } else {
            this.selectTeamInput.value = 'teamVillain';
        }

    };

    fillAllInputs = () =>{
        this.fillHpInput(getRandomNumberBetween(50, 100));
        this.fillStrengthInput(getRandomNumberBetween(1, 10));
        this.fillWeaponInput(charWeapon[getRandomNumberBetween(0, 24)]);
        this.fillNameInput(charName[getRandomNumberBetween(0, 24)]);
        this.randomTeam()
    };

    readInputs = () =>{
        const characterName = this.nameInput.value.trim();
        const characterWeapon = this.weaponInput.value.trim();
        const characterStrength = this.strengthInput.value.trim();
        const characterHp = this.hpInput.value.trim();
        const characterTeam = this.selectTeamInput.value;
        if(characterName !== '' || characterWeapon !== '' || characterStrength !== '' || characterHp !== '' || characterTeam !== ''){
            this.addCharacterCallback(characterName, characterWeapon, characterStrength, characterHp, characterTeam);
            return;
        }
        console.log('Wrong input value');
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
// </div>
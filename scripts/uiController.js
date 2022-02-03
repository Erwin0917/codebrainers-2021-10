import {getRandomNumberBetween} from "./main.js";
import { Hero, Villain } from './person.js';


export class UiController {
    constructor(uiWrapperHtmlClass, gameController) {
        this.uiWrapper = document.querySelector(uiWrapperHtmlClass);
        this.gameController = gameController;

        this.nameInput = this.uiWrapper.querySelector('#name');
        this.weaponInput = this.uiWrapper.querySelector('#weapon');
        this.strengthInput = this.uiWrapper.querySelector('#strength');
        this.hpInput = this.uiWrapper.querySelector('#hitpoints');
        this.selectTeamInput = this.uiWrapper.querySelector('#default_select');

        this.nameRandomButton = this.uiWrapper.querySelector('#random-name');
        this.weaponRandomButton = this.uiWrapper.querySelector('#random-weapon');
        this.strengthRandomButton = this.uiWrapper.querySelector('#random-strength');
        this.hpRandomButton = this.uiWrapper.querySelector('#random-hitpoints');
        this.randomCharacterButton = this.uiWrapper.querySelector('#random-character');
        this.addCharacterButton = this.uiWrapper.querySelector('#add-character');
        this.startGame = this.uiWrapper.querySelector('#start-battle');

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
        // this.startGame.addEventListener('click', this.gameController.startBattle);
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
            this.addCharacterToTeam(characterName, characterWeapon, characterStrength, characterHp, characterTeam);
            return;
        }
        console.log('Wrong input value');
    }

    addCharacterToTeam = (characterName, characterWeapon, characterStrength, characterHp, characterTeam) => {
        const character = characterTeam === "teamHero" ? new Hero() : new Villain();
        character.name = characterName;
        character.hitPoints = characterHp;
        character.strength = characterStrength;
        character.weapon = characterWeapon;
        characterTeam === "teamHero" ? this.gameController.heroTeam.push(character) : this.gameController.villainTeam.push(character);

        this.addCharacterToWorld(characterName, characterWeapon, characterStrength, characterHp, characterTeam)

        this.fillAllInputs();

        console.log("Hero Team:", this.gameController.heroTeam);
        console.log("Villain Team:", this.gameController.villainTeam);
    };

    addCharacterToWorld = (characterName, characterWeapon, characterStrength, characterHp, characterTeam) => {
        const teamWrapperId = characterTeam === "teamHero" ? "#hero-team" : "#villain-team";
        const teamWrapper = document.querySelector(teamWrapperId)

        const characterWrapper = document.createElement("div");

        characterWrapper.classList.add("character", "nes-container");
        characterWrapper.innerHTML = `    
            <h2 class="name" id="char-name">${characterName}</h2>
            <button type="button" class="delete-char" id="delete-char">X</button>
            <div class="avatar__wrapper">
                <img class="avatar" src="https://rickandmortyapi.com/api/character/avatar/87.jpeg" alt="hero-avatar">
            </div>
            <div class="details__wrapper">
                <p>Weapon: <span class="nes-text is-warning">${characterWeapon}</span></p>
                <p>Strength: <span class="nes-text is-success">${characterStrength}</span></p>
                <p>HitPoints: <span class="nes-text is-error">${characterHp}</span></p>
            </div>
            <progress class="nes-progress is-error" value="${characterHp}" max="${characterHp}"></progress>
        `;

        teamWrapper.appendChild(characterWrapper);
    };

    refreshTeams = (teamHero, teamVillain) => {
        document.querySelector("#hero-team").innerHTML ='' ;
        document.querySelector("#villain-team").innerHTML= '';
        teamHero.forEach(  hero => {
            if (hero instanceof Hero) {
                this.addCharacterToWorld(hero.name, hero.weapon, hero.strength, hero.hitPoints, "teamHero");
            }
        teamVillain.forEach( villain => {
            if (villain instanceof Villain) {
                this.addCharacterToWorld(villain.name, villain.weapon, villain.strength, villain.hitPoints, 'teamVillain');
            }
        })

        } )
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

import {Hero, Person, Villain} from "./person.js";
import {getRandomNumberBetween} from "./main.js";

function isTeamAlive(team) {
    let teamIsAlive = false;
    for (const element of team) {
        if (element.isAlive()) {
            teamIsAlive = true;
        }
    }
    return teamIsAlive;
}

export class GameController {
    constructor() {
        this.heroTeam = [];
        this.villainTeam = [];
    }

    startBattle() {
        while (isTeamAlive(this.heroTeam) && isTeamAlive(this.villainTeam)) {
            const attackerTeam = Math.random() < 0.5 ? this.heroTeam : this.villainTeam;
            const defenderTeam = attackerTeam.find(person => person instanceof Hero) !== undefined ? this.villainTeam : this.heroTeam;
            const attackerIndex = getRandomNumberBetween(0, attackerTeam.length - 1);
            const defenderIndex = getRandomNumberBetween(0, defenderTeam.length - 1);

            this.duel(attackerTeam[attackerIndex], defenderTeam[defenderIndex], attackerTeam, defenderTeam, attackerIndex, defenderIndex);
        }
    }

    duel(attacker, defender, attackerTeam, defenderTeam, attackerIndex, defenderIndex) {
        if (!(attacker instanceof Person) || !(defender instanceof Person)) {
            console.log("Attacker or defender are not instance of Person Class");
            return;
        }

        attacker.attack(defender, getRandomNumberBetween(10, 25));

        if (!defender.isAlive()) {
            defenderTeam.splice(defenderIndex, 1);
        }

        if (!isTeamAlive(defenderTeam)) {
            return;
        }

        defender.attack(attacker, getRandomNumberBetween(10, 25));
        if (!attacker.isAlive()) {
            attackerTeam.splice(attackerIndex, 1);
        }

    }

    addCharacterToTeam = (characterName, characterWeapon, characterStrength, characterHp, characterTeam) => {
        const character = characterTeam === "teamHero" ? new Hero() : new Villain();
        character.name = characterName;
        character.hitPoints = characterHp;
        character.strength = characterStrength;
        character.weapon = characterWeapon;
        characterTeam === "teamHero" ? this.heroTeam.push(character) : this.villainTeam.push(character);
        console.log("Hero Team:", this.heroTeam);
        console.log("Villain Team:", this.villainTeam);
    };

    addCharacterToWorld = (characterName, characterWeapon, characterStrength, characterHp, characterTeam) => {
        const characterWrapper = document.createElement("div");
        characterWrapper.classList.add("character", "nes-container");
        characterWrapper.innerHTML = `    
            <h2 className="name" id="char-name">${characterName}</h2>
            <button type="button" className="delete-char" id="delete-char">X</button>
            <div className="avatar__wrapper">
                <img className="avatar" src="https://rickandmortyapi.com/api/character/avatar/87.jpeg" alt="hero-avatar">
            </div>
            <div className="details__wrapper">
                <p>Weapon: <span className="nes-text is-warning">${characterWeapon}</span></p>
                <p>Strength: <span className="nes-text is-success">${characterStrength}</span></p>
                <p>HitPoints: <span className="nes-text is-error">${characterHp}</span></p>
            </div>
            <progress className="nes-progress is-error" value="${characterHp}" max="${characterHp}"></progress>`;
    };
};
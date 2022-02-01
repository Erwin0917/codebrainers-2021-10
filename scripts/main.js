import { Hero, Person, Villain } from './person.js';
import { UiController } from './uiController.js';
import {GameController} from "./gameController.js";

export function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}



function fillTeamsByCharacters(teamLength, personType) {
    const team = [];

    for (let i = 0; i < teamLength; i++) {
        if (personType === 'hero') {
            team.push(new Hero(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5)));
        } else {
            team.push(new Villain(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5)));
        }
    }

    return team;
}

function gameInit() {
    const gameController = new GameController();
    const uiController = new UiController('.ui__wrapper', gameController.addCharacterToTeam);

    console.log("Team Hero", gameController.heroTeam);
    console.log("Team villain", gameController.villainTeam);
}

gameInit();







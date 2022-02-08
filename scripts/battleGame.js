import { GameController } from './gameController.js';
import { UiController } from './uiController.js';
import {Hero, Villain} from './person.js';

export class BattleGame {
    constructor() {
        this.gameController = new GameController();
        this.uiController = new UiController('.ui__wrapper', this.gameController);
    }

    init() {
        const startBattleButton = document.querySelector('#start-battle');
        startBattleButton.addEventListener('click', () => {
            this.gameController.startBattle(this.uiController.refreshTeams);
        });

        console.log('Team Hero', this.gameController.heroTeam);
        console.log('Team villain', this.gameController.villainTeam);

        document.querySelector('#villainWins').innerHTML = localStorage.getItem('winnerVillain');
        document.querySelector('#heroWins').innerHTML = localStorage.getItem('winnerHero');

        let localHeroTeam = localStorage.getItem('teamHero');
        let localVillainTeam = localStorage.getItem('teamVillain');
        localHeroTeam = JSON.parse(localHeroTeam);
        localVillainTeam = JSON.parse(localVillainTeam);

        localHeroTeam = localHeroTeam.map(hero => {
            const character = new Hero(hero.hitPoints);
            character.name = hero.name;
            character.strength = hero.strength;
            character.weapon = hero.weapon;
            character.picture = hero.picture;
            return character;
        });

        localVillainTeam = localVillainTeam.map(villain => {
            const character = new Villain(villain.hitPoints);
            character.name = villain.name;
            character.strength = villain.strength;
            character.weapon = villain.weapon;
            character.picture = villain.picture;
            return character;
        });

        this.uiController.refreshTeams(localHeroTeam, localVillainTeam);
        this.gameController.heroTeam.push(...localHeroTeam);
        this.gameController.villainTeam.push(...localVillainTeam);

    }
}

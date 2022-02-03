import { GameController } from './gameController.js';
import { UiController } from './uiController.js';

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
    }
}

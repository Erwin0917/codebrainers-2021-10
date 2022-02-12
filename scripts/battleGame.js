import {GameController, toogleDisableButton} from "./gameController.js";
import { UiController } from './uiController.js';
import {Hero, Villain} from './person.js';

export class BattleGame {
    constructor() {
        this.gameController = new GameController();
        this.uiController = new UiController('.ui__wrapper', this.gameController);
        this.readInitialGameState();
    }

    init() {

        this.uiController.startBattleButton.addEventListener('click', async (event) => {
            event.preventDefault()
            await this.gameController.startBattle(this.uiController.refreshTeams);
            toogleDisableButton(this.uiController.startBattleButton, "nonactive");
        });
        // console.log(this.gameController.heroTeam)
        // console.log(this.gameController.villainTeam)
        if (this.gameController.heroTeam.length < 1 || this.gameController.villainTeam.length < 1){
            this.uiController.startBattleButton.setAttribute("disabled", "true")
            this.uiController.startBattleButton.classList.add("is-disabled")
        }

        document.querySelector('#villainWins').innerHTML = localStorage.getItem('winnerVillain');
        document.querySelector('#heroWins').innerHTML = localStorage.getItem('winnerHero');
    }


    readInitialGameState(){
        let localHeroTeam = localStorage.getItem('teamHero');
        let localVillainTeam = localStorage.getItem('teamVillain');

        if (localHeroTeam !== null) {
            localHeroTeam = JSON.parse(localHeroTeam);
            localHeroTeam = localHeroTeam.map(hero => this.gameController.createCharacter(hero, 'teamHero'));
            this.gameController.heroTeam.push(...localHeroTeam);
        }

        if (localVillainTeam !== null) {
            localVillainTeam = JSON.parse(localVillainTeam);
            localVillainTeam = localVillainTeam.map(villain => this.gameController.createCharacter(villain, 'teamVillain'));
            this.gameController.villainTeam.push(...localVillainTeam);
        }

        this.uiController.refreshTeams(this.gameController.heroTeam, this.gameController.villainTeam);
    }
}

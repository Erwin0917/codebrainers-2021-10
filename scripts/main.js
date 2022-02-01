import { Hero, Person, Villain } from './person.js';
import { UiController } from './uiController.js';

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}

function isTeamAlive(team) {
    let teamIsAlive = false;
    for (const element of team) {
        if (element.isAlive()) {
            teamIsAlive = true;
        }
    }
    return teamIsAlive;
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

function duel(attacker,defender, attackerTeam, defenderTeam,attackerIndex, defenderIndex) {
    if(!(attacker instanceof Person)  || !(defender instanceof Person)){
        console.log("Attacker or defender are not instance of Person Class")
        return;
    }

    attacker.attack(defender, getRandomNumberBetween(10,25));

    if(!defender.isAlive()){
        defenderTeam.splice(defenderIndex, 1);
    }

    if (!isTeamAlive(defenderTeam)) {
        return;
    }

    defender.attack(attacker, getRandomNumberBetween(10,25));
    if(!attacker.isAlive()){
        attackerTeam.splice(attackerIndex, 1);
    }

}

function gameInit() {
    const uiController = new UiController('.ui__wrapper');


    const heroTeam = fillTeamsByCharacters(3, 'hero');
    const villainTeam = fillTeamsByCharacters(3, 'villain');

    while(isTeamAlive(heroTeam) && isTeamAlive(villainTeam)) {
        const attackerTeam = Math.random() < 0.5 ? heroTeam : villainTeam;
        const defenderTeam = attackerTeam.find(person => person instanceof Hero) !== undefined ? villainTeam : heroTeam;
        const attackerIndex = getRandomNumberBetween(0,attackerTeam.length - 1);
        const defenderIndex = getRandomNumberBetween(0,defenderTeam.length - 1);

        duel(attackerTeam[attackerIndex], defenderTeam[defenderIndex], attackerTeam, defenderTeam, attackerIndex, defenderIndex)
    }



    console.log("Team Hero", heroTeam)
    console.log("Team villain", villainTeam)
}

gameInit();







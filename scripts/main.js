import {Hero, Person, Villain} from './person.js';

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}
const heroTeam = [];
const villainTeam = [];

function isTeamAlive(team) {
    let teamIsAlive = false;
    for (const element of team) {
        if (element.isAlive()) {
            teamIsAlive = true;
        }
    }

    return teamIsAlive;
}

const hero = new Hero(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5));
const villain = new Villain(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5));
const hero1 = new Hero(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5));
const villain1 = new Villain(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5));
const hero2 = new Hero(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5));
const villain2 = new Villain(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5));


heroTeam.push(hero, hero1, hero2);
villainTeam.push(villain, villain1, villain2);

function duel(attacker,defender, attackerTeam, defenderTeam,attackerIndex, defenderIndex) {
    if(!(attacker instanceof Person)  || !(defender instanceof Person)){
        console.log("Attacker or defender are not instance of Person Class")
        return;
    }
    attacker.attack(defender, getRandomNumberBetween(10,25));
    if(!defender.isAlive()){
        defenderTeam.splice(defenderIndex, 1);

    }
    defender.attack(attacker, getRandomNumberBetween(10,25));
    if(!attacker.isAlive()){
        attackerTeam.splice(attackerIndex, 1);
    }
}
console.log((heroTeam.length > 0 && villainTeam.length > 0))
while(heroTeam.length > 0 && villainTeam.length > 0) {
    console.log([...heroTeam])
    const heroIndex = getRandomNumberBetween(0,heroTeam.length - 1);
    console.log([...villainTeam])
    const villainIndex = getRandomNumberBetween(0,villainTeam.length - 1);
    duel(heroTeam[heroIndex],villainTeam[villainIndex],heroTeam, villainTeam,heroIndex, villainIndex)
}
console.log("Team Hero", heroTeam)
console.log("Team villain", villainTeam)
// while(hero.isAlive() && villain.isAlive()){
//     if(villain.isAlive()){
//         villain.attack(hero, getRandomNumberBetween(10,25));
//     }
//     if(hero.isAlive()){
//         hero.attack(villain, getRandomNumberBetween(15,25));
//     }
//     console.log("Hero has " + hero.hitPoints + " hp left")
//     console.log("Villain has " + villain.hitPoints + " hp left")
// }


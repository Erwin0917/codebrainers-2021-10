import { Hero, Villain } from './person.js';

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}


const hero = new Hero(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5));
const villain = new Villain(getRandomNumberBetween(50,100), getRandomNumberBetween(1,5));
console.log(villain)

while(hero.isAlive() && villain.isAlive()){
    if(villain.isAlive()){
        villain.attack(hero, getRandomNumberBetween(10,25));
    }
    if(hero.isAlive()){
        hero.attack(villain, getRandomNumberBetween(15,25));
    }
    console.log("Hero has " + hero.hitPoints + " hp left")
    console.log("Villain has " + villain.hitPoints + " hp left")
}





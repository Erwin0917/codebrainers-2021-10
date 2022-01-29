class Person {
    constructor(hitPoints = 0) {
        this.name = '';
        this.hitPoints = hitPoints;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

    setHitPoints(hp = 0) {
        this.hitPoints = hp;
    }

    attack(target, power) {

    }
}


class Hero extends Person {
    constructor(hitPoints) {
        super();
    }

    isAlive() {
        console.log('Hero isAlive');
        return super.isAlive();
    }
}

class Villain extends Person {
    constructor() {
        super();
    }
}



const person = new Person(100);

const hero = new Hero(100);
const villain = new Villain();

console.log(person);
console.log(hero);
console.log(hero.isAlive());




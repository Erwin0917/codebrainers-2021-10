class Person {
    constructor(hitPoints = 0) {
        this.name = '';
        this.hitPoints = hitPoints;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

    setHitPoints(hp = 0) {
        this.hitPoints = hp > 0 ? hp : 0;

    }

    attack(target, power) {
        target.setHitPoints(target.hitPoints - power)

    }
}


class Hero extends Person {
    constructor(hitPoints) {
        super(hitPoints);
    }
}

class Villain extends Person {
    constructor(hitPoints) {
        super(hitPoints);
    }
}



const person = new Person(100);

const hero = new Hero(100);
const villain = new Villain(100);
console.log(villain)
while(hero.isAlive() && villain.isAlive()){
    if(villain.isAlive()){
        villain.attack(hero, 25);
    }
    if(hero.isAlive()){
        hero.attack(villain, 25);
    }
    console.log("Hero has " + hero.hitPoints + " hp left")
    console.log("Villain has " + villain.hitPoints + " hp left")
}




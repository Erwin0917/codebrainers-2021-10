function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}

class Person {
    constructor(hitPoints = 0, strength = 0) {
        this.name = '';
        this.hitPoints = hitPoints;
        this.strength= strength;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

    setHitPoints(hp = 0) {
        this.hitPoints = hp > 0 ? hp : 0;


    }

    attack(target, power) {
        const damageFactor = Math.round(this.strength * 0.2);
        const damage = target.hitPoints - (power + damageFactor);
        target.setHitPoints(damage);

    }
}


class Hero extends Person {
    constructor(hitPoints, strength) {
        super(hitPoints);
        this.strength= strength
    }
}

class Villain extends Person {
    constructor(hitPoints, strength) {
        super(hitPoints);
        this.strength = strength
    }
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





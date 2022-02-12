export  class Person {
    constructor(hitPoints = 0, id , strength = 0) {
        if (id === undefined) {
            this.id = `_` + Math.random().toString(36).substr(2, 9);
        } else {
            this.id = id;
        }

        this.name = '';
        this.hitPoints = hitPoints;
        this.strength= strength;
        this.htmlWrapper = null;
        this.maxHitPoints = hitPoints;

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



export class Hero extends Person {
    constructor(hitPoints, strength, id) {
        super(hitPoints, id);
        this.strength= strength
    }
}

export class Villain extends Person {
    constructor(hitPoints, strength, id) {
        super(hitPoints, id);
        this.strength = strength
    }
}


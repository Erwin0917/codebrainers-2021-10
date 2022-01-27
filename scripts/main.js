// POJO = Plain Old Javascript Object

const car = {
    color: 'red',
    maximumSpeed: 250,
    numberOfWheels: 4
}

class Car {

    constructor(color = 'black', maximumSpeed, numberOfWheels) {
        if (typeof color === 'string' && typeof maximumSpeed === 'number' && typeof numberOfWheels === 'number') {
            this.color = color;
            this.maximumSpeed = maximumSpeed;
            this.numberOfWheels = numberOfWheels;
        }

        this.speed = 0;
    }

    setSpeed(speed) {

    }

    accelerate(howMuch) {

    }

    decelerate(howMuch) {

    }

}


const car1 = new Car();
car1.setSpeed(200);
console.log('car1 setSpeed with number', car1);
car1.setSpeed('200');
console.log('car1 setSpeed with string', car1);

const car2 = new Car(2, '2', 2);
console.log(car2);

const car3 = new Car('2', 2);
console.log(car3);

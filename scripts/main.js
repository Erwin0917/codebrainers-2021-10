// POJO = Plain Old Javascript Object

const car = {
    color: 'red',
    maximumSpeed: 250,
    numberOfWheels: 4
}

class Car {

    constructor(color = 'black', maximumSpeed, numberOfWheels) {
        if (typeof color === 'string') {
            this.color = color;
        }
        this.maximumSpeed = this.setNumberValue(maximumSpeed, 300)
        this.numberOfWheels = this.setNumberValue(numberOfWheels, 4)

        this.speed = 0;
    }

    isNumber = (insertValue) => {
        return typeof insertValue === 'number' && !isNaN(insertValue);
    }

    setNumberValue = (insertValue, defaultNumber) => this.isNumber(insertValue) ? insertValue : defaultNumber;

    setSpeed(speed) {
        if (this.isNumber(speed)) {
           if (speed <= this.maximumSpeed) {
               this.speed = speed;
           } else {
               console.log("It is too much speed. Set new one.");
           }
        }
    }

    accelerate(howMuch) {
    // todo: to finish
    }

    decelerate(howMuch) {
    // todo: to finish
    }

}


const car1 = new Car();
car1.setSpeed(200);
car1.setSpeed(301);
console.log('car1 setSpeed with number', car1);
car1.setSpeed(NaN);
console.log('car1 setSpeed with number', car1);
car1.setSpeed('200');
console.log('car1 setSpeed with string', car1);

// const car2 = new Car(2, '2', 2);
// console.log(car2);
//
// const car3 = new Car('2', 2);
// console.log(car3);

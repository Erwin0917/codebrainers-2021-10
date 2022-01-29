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
               // console.log("It is too much speed. Set new one.");
               // console.error('It is too much speed');
               throw new Error('It is too much speed');

           }
        }
    }

    accelerate(howMuch) {
        if (this.isNumber(howMuch)) {
            if (this.speed + howMuch <= this.maximumSpeed) {
                this.speed += howMuch ;
            } else {
                this.speed = this.maximumSpeed
                console.log("You can't accelerate that much.");
            }
        }
    }

    decelerate(howMuch) {
        if (this.isNumber(howMuch)) {
            if (this.speed - howMuch >= 0) {
                this.speed -= howMuch ;
            } else {
                this.speed = 0;
                console.log("You can't go slower than 0.");
            }
        }
    }

}


const car1 = new Car();

try {
    car1.setSpeed(400);
    // car1.setSpeed(301);
    console.log('car1 setSpeed with number', car1)

} catch (error) {
    console.log(error);
}

car1.accelerate(500)
console.log('car1 accelerate', car1);

car1.decelerate(300)
console.log('car1 decelerate', car1);


console.log(car1 instanceof Car);





// car1.setSpeed(NaN);
// console.log('car1 setSpeed with number', car1);
// car1.setSpeed('200');
// console.log('car1 setSpeed with string', car1);

// const car2 = new Car(2, '2', 2);
// console.log(car2);
//
// const car3 = new Car('2', 2);
// console.log(car3);

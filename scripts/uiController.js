function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}

export class UiController {
    constructor() {
        const nameInput = document.querySelector('#name');
        const nameRandomButton = document.querySelector('#random-name');
        const weaponInput = document.querySelector('#weapon')
        const weaponRandomButton = document.querySelector('#random-weapon');
        const strengthInput = document.querySelector('#strength');
        const strengthRandomButton = document.querySelector('#random-strength');
        const hpInput = document.querySelector('#hitpoints');
        const hpRandomButton = document.querySelector('#random-hitpoints');
        console.log(hpRandomButton)


        nameInput.addEventListener('change', () => {
            console.log('Name input was change');
        })

        nameRandomButton.addEventListener('click', () => {
            let randomName = charName[getRandomNumberBetween(0, 24)]
            nameInput.value = randomName
            console.log('Random Name button click');
            console.log(randomName)
        })
        weaponInput.addEventListener('change', () => {

            console.log('Weapon input was change');

        })

        weaponRandomButton.addEventListener('click', () => {
            let randomWeapon = charWeapon[getRandomNumberBetween(0, 24)]
            weaponInput.value = randomWeapon
            console.log('Random weapon button click');
            console.log(randomWeapon)
        })
        strengthInput.addEventListener('change', () => {
            console.log('strength input was change');
        })

        strengthRandomButton.addEventListener('click', () => {
            let randomStrength = getRandomNumberBetween(1, 10)
            strengthInput.value = randomStrength
            console.log('Strength Name button click');
            console.log(randomStrength)
        })
        hpInput.addEventListener('change', () => {
            console.log('Hp input was change');
        })
        hpRandomButton.addEventListener('click', () => {
            let randomHp = getRandomNumberBetween(50, 100)
            hpInput.value = randomHp
            console.log('Random hp button click');


        })

    }
}

const charName = ["Harry", "Ross",
    "Bruce", "Cook",
    "Carolyn", "Morgan",
    "Albert", "Walker",
    "Randy", "Reed",
    "Larry", "Barnes",
    "Lois", "Wilson",
    "Jesse", "Campbell",
    "Ernest", "Rogers",
    "Theresa", "Patterson",
    "Henry", "Simmons",
    "Michelle", "Perry",
    "Frank"];
const charWeapon = ["Brooks",
    "Rachel", "Edwards",
    "Christopher", "Perez",
    "Thomas", "Baker",
    "Sara", "Moore",
    "Chris", "Bailey",
    "Roger", "Johnson",
    "Marilyn", "Thompson",
    "Anthony", "Evans",
    "Julie", "Hall",
    "Paula", "Phillips",
    "Annie", "Hernandez",
    "Dorothy", "Murphy"];

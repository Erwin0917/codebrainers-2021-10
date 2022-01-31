export class UiController {
    constructor() {
        const nameInput = document.querySelector('#name');
        const nameRandomButton = document.querySelector('#random-name');
        const weaponInput = document.querySelector('#weapon');
        const weaponRandomButton = document.querySelector('#random-weapon');

        //TODO: Wyszukać resztę elementów z UI i dodać o nich odpowiednie listenery
        //Sekcja z inputem
        nameInput.addEventListener('change', () => {
            console.log('Name input was change');
        })
        weaponInput.addEventListener('change', () => {
            console.log('Weapon input was changed');
        })
        //Sekcja z kliknięciem

        nameRandomButton.addEventListener('click', () => {
            //TODO: na click uzupełnij nameInput losowym imieniem
            console.log('Random Name button click');
        })



    }
}
